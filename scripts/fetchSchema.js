const https = require("https");

const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema
} = require("graphql");

const fs = require("fs");

const yargs = require("yargs");

function runIntrospectionQuery() {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ query: getIntrospectionQuery() });
    let data = "";
    const req = https.request(
      {
        hostname: "serve.onegraph.com",
        port: 443,
        path: "/graphql?app_id=0b066ba6-ed39-4db8-a497-ba0be34d5b2a",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": body.length,
        }
      },
      res => {
        res.on("data", chunk => {
          data += chunk;
        });
        res.on("end", () => {
          const resp = JSON.parse(data);
          if (resp.errors) {
            throw new Error(
              "Error running introspection query, errors=" +
                JSON.stringify(resp.errors)
            );
          } else {
            resolve(printSchema(buildClientSchema(resp.data)));
          }
        });
      }
    );
    req.write(body);
    req.end();
  });
}

const persistQueryConfigDirective = `
  input PersistedQueryAccessTokenConfiguration {
    "The environment variable that holds the access token"
    environmentVariable: String!
  }

  directive @persistedQueryConfiguration(
    accessToken: PersistedQueryAccessTokenConfiguration
  ) on QUERY | MUTATION | SUBSCRIPTION
`;

function addPersistQueryDirective(schema) {
  return persistQueryConfigDirective + schema;
}

function writeFile(path, content) {
  fs.writeFileSync(path, content);
}

async function main(config) {
  const schema = await runIntrospectionQuery();
  const withPersistQueryDirective = addPersistQueryDirective(schema);
  writeFile(config.path, withPersistQueryDirective);
}

const argv = yargs
  .usage("Fetch OneGraph schema $0 --path <path>")
  .options({
    path: {
      describe: "Path to save schema.graphql",
      demandOption: true,
      type: "string",
      array: false
    }
  })
  .help().argv;

main(argv).catch(error => {
  console.error(String(error.stack || error));
  process.exit(1);
});