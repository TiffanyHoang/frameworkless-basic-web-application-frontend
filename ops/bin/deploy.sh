#!/usr/bin/env bash
set -eou pipefail
echo '--- :kubernetes: Deploy on Jupiter'
GITHASH=$(git describe --tags --always)
NAME=tiffany-app-frontend
ktmpl ./kube/deployment.yaml \
    --parameter name "$NAME" \
    --parameter imageTag "$GITHASH" \
    --parameter host "$NAME.svc.platform.myobdev.com" \
| kubectl apply -f -
