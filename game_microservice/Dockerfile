FROM node:16-alpine AS microservice

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build