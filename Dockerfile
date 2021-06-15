FROM node:14
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package.json .
RUN npm install && npm i -g @nestjs/cli

COPY --chown=node:node . .

EXPOSE 3000
RUN npm run build
CMD [ "node", "dist/main" ]
