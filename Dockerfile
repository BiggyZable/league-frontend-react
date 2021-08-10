FROM node:latest

WORKDIR /

COPY /app .

RUN npm install

CMD ["npm" , "start"]