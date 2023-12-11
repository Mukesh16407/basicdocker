FROM node:latest
COPY . .
RUN npm install -g nodemon
WORKDIR /app
EXPOSE 5000
CMD ["npm","run", 'dev']
