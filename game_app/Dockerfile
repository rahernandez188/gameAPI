FROM node:16-alpine3.14 AS app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build