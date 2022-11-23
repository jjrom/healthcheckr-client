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

# Stage 2 - run
FROM nginx
COPY --from=appbuild /app/dist /usr/share/nginx/html
