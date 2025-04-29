# NodeJS App Deployment in Kubernetes with Jenkins CI/CD Pipeline
1. Update system packages
   > sudo apt-get update

2. Install NodeJS & npm
   > apt install nodejs -y
   > apt install npm -y

3. Create nodejs app and initalize with npm
   > mkdir nodejs-app
   > cd nodejs-app
   > npm init -y

4. Install express framework (web framework for nodejs)
   > sudo npm install express

5. Create app code:
   > vi app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
res.send('Hello Welcome to my node application');
});
app.listen(port, ()=>{
console.log(`App listen at http://localhost:${port}`);
}); 

6. Create test file
   > vi test.js
const assert = require('assert');

describe('Sample Test', function(){
  it('should return true', function(){
    assert.equal(true, true);
  });
});

7. Install mocha and add to package.json file
   > npm install --save-dev mocha
   > npm init -y

8. Install docker
   > sudo apt install docker.io -y

9. Create docker file
   > vi Dockerfile
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

10. Build docker image
    > docker build -t nodejs-app .

11. Run docker container
    > docker run -d -p 3000:3000 --name node-app nodejs-app

12. Install Java and Jenkins:
    i. Install java
    > sudo apt install openjdk-17-jdk -y

    ii. Start by importing the GPG key. The GPG key verifies package integrity
    > sudo wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key

    iii. Add the Jenkins software repository to the source list and provide the authentication key
    > echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null

    iv. Update system
    > sudo apt update

    v. Install Jenkins
    > sudo apt install jenkins -y

    vi. Check Jenkins Status
    > sudo systemctl status jenkins

13. Set up K8S cluster and write k8s manifest files:
    i. Install minikube
       > curl -LO https://github.com/kubernetes/minikube/releases/latest/download/minikube-linux-amd64
       > sudo install minikube-linux-amd64 /usr/local/bin/minikube && rm minikube-linux-amd64

