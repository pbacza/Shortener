FROM node:14.15-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

WORKDIR /shortener-be

COPY tsconfig.json ./entrypoint.sh ./
COPY package*.json ./

RUN npm ci

COPY src ./src

ENTRYPOINT ["./entrypoint.sh"]