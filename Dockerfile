#Use node js image
FROM node:14

#Working dir inside container
WORKDIR /usr/app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install Dependencies
RUN npm install
RUN chmod -R +x node_modules/.bin

#Copy code
COPY . .

#Expose app port
EXPOSE 3000

#Run application
CMD ["node", "app.js"]
