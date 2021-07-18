#!/usr/bin/env bash 
set -eou pipefail
echo '--- :docker: Build app image'
VERSION=$(git describe --tags --always) 
ECRACC='138666658526.dkr.ecr.ap-southeast-2.amazonaws.com'
APPIMAGE=$ECRACC/tiffany-frameworkless-basic-web-app-frontend:$VERSION
docker build -f Dockerfile.prod -t $APPIMAGE . 
echo '--- :docker: Push app image'
docker push $APPIMAGE