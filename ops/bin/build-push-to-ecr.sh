#!/usr/bin/env bash 
set -eou pipefail
echo '--- :docker: Build app image'
VERSION=$(git describe --tags --always) 
docker build -f Dockerfile.prod -t tiffany-frameworkless-basic-web-app-frontend:$VERSION . 
echo '--- :docker: Push app image'
docker push tiffany-frameworkless-basic-web-app-frontend:$VERSION