FROM node:12.16.1-alpine3.9
WORKDIR /usr/app
RUN npm install --quiet
EXPOSE 3000