FROM node:14.17.3-buster as build

WORKDIR /code

COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json

RUN npm ci --production

COPY . .

RUN npm run build

#Runtime 
FROM nginx:stable-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]

