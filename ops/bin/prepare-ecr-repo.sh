#!/usr/bin/env bash
set -eou pipefail
echo '--- :ecr: Prepare repo in ECR'
aws cloudformation deploy \
    --template-file ./aws/ecr-template.yaml \
    --stack-name tiffany-ecr-frontend \
    --region ap-southeast-2