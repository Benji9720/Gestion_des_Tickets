# Étape 1 : Construire l'application Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend-gestion-des-tickets /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
