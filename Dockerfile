FROM node:17-alpine

WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Install curl for healthcheck
RUN apk --update --no-cache add curl

# Copy src and config
COPY ./package.json /app/
COPY ./vite.config.js /app/
COPY ./index.html /app/
COPY ./src /app/src

CMD [ "npm", "start" ]