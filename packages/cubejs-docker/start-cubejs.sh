cron
htpasswd -b -c /.htpasswd admin $PASSWORD
service nginx start
cubejs server