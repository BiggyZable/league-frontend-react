FROM node:latest as build

WORKDIR /app

COPY /app .

RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm run build

FROM nginx:latest

COPY --from=build /app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
#RUN service nginx restart
