FROM node:14.17.3-buster as build

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

#RUN npm install
#COPY . .

#CMD ["npm","run","start"]

RUN npm ci --production

COPY . .

RUN npm run build


FROM nginx:stable-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

