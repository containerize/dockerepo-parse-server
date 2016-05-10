FROM node

WORKDIR /parse

ADD package.json /parse
ADD main.js /parse/cloud/main.js
ADD index.js /parse

RUN npm install

ENV MONGO_DB_NAME=dev

ENV APP_ID=appId
ENV MASTER_KEY=masterKey

EXPOSE 1337