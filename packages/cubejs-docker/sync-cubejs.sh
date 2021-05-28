aws configure set s3.signature_version s3v4
aws s3 sync /cube/conf s3://qa-cubejs-config