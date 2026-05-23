FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build --skipLibCheck || npx tsc --skipLibCheck
EXPOSE 7860
ENV PORT=7860
CMD npx prisma migrate deploy && node dist/server.js
