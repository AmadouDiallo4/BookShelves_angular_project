#stage 
FROM arm32v7/node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


#stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/bookshelves /usr/share/nginx/html
