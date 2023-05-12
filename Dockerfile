# Student: Artur Moroz
FROM node:latest
WORKDIR /app

COPY package*.json ./
COPY server.js ./

RUN npm install
ENV PORT=3000
CMD [ "node", "server.js" ]
EXPOSE 3000
