This repo powers the [OneGraph blog](https://onegraph.com/blog). All of the posts in the blog are issues in this repo.

See the [https://onegraph.com/oneblog](https://onegraph.com/oneblog) for how to deploy your own blog backed by GitHub issues.

### Developing on this repo

What follows are implementation details specific to this repo. For setting up a general oneblog, see [https://github.com/oneblog](https://github.com/oneblog).

Staging triggers a build on [staging cloudbuild](https://console.cloud.google.com/cloud-build/builds?project=oph-dashboard-staging) on every push to non-master and deploys to staging firebase hosting/cloud run.

Production triggers a build on (https://console.cloud.google.com/cloud-build/builds?project=onegraph-dashboard) on pushes to master and deploys to prod firebase hosting/cloud run.

Check the cloudbuild-staging.yaml, cloudbuild.yaml, and Dockerfile for implementation details.
