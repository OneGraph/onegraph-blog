FROM node:14 as builder

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ENV BASE_PATH="/changelog"
ENV NODE_ENV=production
ARG gcp_project

RUN yarn build && rm -rf .next/cache
RUN yarn firebase-deploy-directory --project $gcp_project --subpath changelog/_next/static --directory .next/static/ --commit

# Make smaller prod image
FROM node:14 as node_installer

ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

FROM node:14

ENV BASE_PATH="/changelog"
ENV NODE_ENV=production

COPY package.json .
COPY yarn.lock .
# Copies public environment variables
COPY .env.local .env
COPY server.js.example server.js
COPY next.config.js .

COPY --from=node_installer node_modules node_modules
COPY --from=builder .next .next

CMD [ "node", "server.js" ]
