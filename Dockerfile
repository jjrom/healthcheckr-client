# Stage 1 - build image
FROM node:17-alpine AS appbuild

WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Install curl for healthcheck
RUN apk --update --no-cache add curl

# Copy src and config
COPY ./vite.config.js /app
COPY ./index.html /app
COPY ./config.env /app/.env
COPY ./src /app/src

RUN npm run build

# Stage run build
FROM jjrom/s6-overlay:bionic
LABEL maintainer="jerome.gasperi@gmail.com"

# Add ppa, curl and syslogd
RUN apt-get update && apt-get install -y software-properties-common curl inetutils-syslogd && \
    apt-add-repository ppa:nginx/stable -y && \
    apt-get update && apt-get install -y \
    zip \
    unzip \
    gettext-base \
    nginx && \
    apt-get autoremove -y && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy NGINX service script
COPY ./build/start-nginx.sh /etc/services.d/nginx/run
RUN chmod 755 /etc/services.d/nginx/run

# Copy NGINX configuration
COPY ./build/container_root/etc/nginx /etc/nginx

# Copy run.d configuration
COPY ./build/container_root/cont-init.d /etc/cont-init.d

# Copy source code in app directory
RUN mkdir /app
COPY --from=appbuild /app/dist /app