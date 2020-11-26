FROM node:14.15-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

RUN npm install -g http-server

WORKDIR /frontend

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD [ "./entrypoint.sh" ]