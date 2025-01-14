FROM node:18-alpine as build

WORKDIR /app

RUN npm install -g pnpm
COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm run build

# production server
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]