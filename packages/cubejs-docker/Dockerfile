FROM node:12.22.1

ARG IMAGE_VERSION=unknown

ENV CUBEJS_DOCKER_IMAGE_VERSION=$IMAGE_VERSION
ENV CUBEJS_DOCKER_IMAGE_TAG=latest

RUN DEBIAN_FRONTEND=noninteractive \
    && apt-get update \
    && apt-get install -y --no-install-recommends rxvt-unicode libssl1.1 git \
    && rm -rf /var/lib/apt/lists/*

ENV TERM rxvt-unicode
ENV NODE_ENV production

WORKDIR /cube
COPY ./nginx.conf .
COPY ./start-cubejs.sh .
COPY ./sync-cubejs.sh .
COPY ./crontab .

RUN yarn policies set-version v1.22.5

RUN apt update
RUN apt install -y awscli nginx apache2-utils cron

RUN npm install -g serve

# Configure nginx
RUN mkdir -p /etc/nginx/sites-enabled
RUN cp nginx.conf /etc/nginx/sites-enabled/default

# Configure cron
RUN chmod 0644 crontab
RUN crontab crontab
RUN touch /cron.log

# There is a problem with release process.
# We are doing version bump without updating lock files for the docker package.
#RUN yarn install --frozen-lockfile
RUN yarn install

# By default Node dont search in parent directory from /cube/conf, @todo Reaserch a little bit more
ENV NODE_PATH /cube/conf/node_modules:/cube/node_modules
RUN ln -s /cube/node_modules/.bin/cubejs /usr/local/bin/cubejs
RUN ln -s /cube/node_modules/.bin/cubestore-dev /usr/local/bin/cubestore-dev

WORKDIR /cube/conf

EXPOSE 4000
EXPOSE 80

CMD ["bash", "/cube/start-cubejs.sh"]
