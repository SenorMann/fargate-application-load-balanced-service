FROM public.ecr.aws/bitnami/node:16.19.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY src/app.js ./

EXPOSE 8080

CMD ["node", "app.js"]