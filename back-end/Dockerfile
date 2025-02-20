FROM node:lts

COPY . /app/

WORKDIR /app

RUN npm install && \
    npm install typescript -g
RUN npm run build
CMD [ "node","./dist/server.js" ]