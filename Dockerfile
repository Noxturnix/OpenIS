FROM node:16-slim as builder

WORKDIR /app-src

COPY . .

RUN yarn && \
    yarn build

FROM node:16-slim

WORKDIR /app

RUN apt update && \
    apt install -y git && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app-src/dist .

COPY --from=builder /app-src/package.json .

COPY --from=builder /app-src/yarn.lock .

COPY --from=builder /app-src/.git /app/.git

RUN yarn --production

CMD [ "node", "index.js" ]