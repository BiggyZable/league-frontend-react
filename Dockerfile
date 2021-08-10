FROM node:latest

WORKDIR /app

COPY /app/package_lock.json ./

RUN npm ci

COPY /app .

CMD ["npm" , "start"]