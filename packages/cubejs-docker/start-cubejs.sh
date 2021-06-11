git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/nuelife-api
git clone \
  --depth 1  \
  --filter=blob:none  \
  --sparse \
  https://git-codecommit.us-east-1.amazonaws.com/v1/repos/nuelife-api \
;
cd nuelife-api/modules
git sparse-checkout set nuelife-cube
cron
htpasswd -b -c /.htpasswd admin $PASSWORD
service nginx start
cubejs server