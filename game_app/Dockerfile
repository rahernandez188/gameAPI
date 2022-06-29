FROM node:16-alpine AS app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build