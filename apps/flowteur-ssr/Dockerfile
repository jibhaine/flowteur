# install node_modules inside image step.
FROM node:13 as builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm ci

FROM node:13

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules

CMD ["node", "dist/main.js"]