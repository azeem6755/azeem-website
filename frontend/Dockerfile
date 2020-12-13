FROM node:15.0.1-alpine3.10 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY public ./public

COPY src ./src