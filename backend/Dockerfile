FROM    node:14-alpine

COPY    package.json /usr/src/app/
WORKDIR /usr/src/app
RUN     npm install

COPY ./src /usr/src/app

EXPOSE 3000
CMD    node ./src/index.js
