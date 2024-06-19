FROM node:18-alpine as proyecto1

WORKDIR /app/react-app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine as PRODUCTION-IMAGE
WORKDIR /app/react-app

COPY --from=proyecto1 /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080


COPY package.json .
COPY vite.config.js .

RUN npm install typescript
EXPOSE 8080
CMD ["npm", "run", "preview"]