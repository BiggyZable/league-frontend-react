FROM node:16.6.1-alpine3.14 as build

WORKDIR /app

COPY /app .

RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm run build

FROM nginx:1.21.1-alpine

COPY --from=build /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
#RUN service nginx restart
