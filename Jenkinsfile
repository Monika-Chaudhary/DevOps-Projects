pipeline{
    agent any
    stages{
        stage("Checkout"){
            steps{
                checkout scmGit(branches: [[name: '*/NodeJSDeploymentInK8S']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Monika-Chaudhary/DevOps-Projects.git']])
            }
        }
        stage("Build"){
            steps{
                sh "npm install"
                sh "docker build -t nodejs-app:${BUILD_ID} ."
            }
        }
        //stage("Test"){
        //    steps{
        //        sh "npm test"
        //    }
        //}
        stage("Push to DockerHub"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'NodeApp-DH', passwordVariable: 'dockerPwd', usernameVariable: 'dockerUname')]) {
                    sh "docker tag nodejs-app:${BUILD_ID} ${dockerUname}/nodejs-app:${BUILD_ID}"
                    sh "docker login -u ${dockerUname} -p ${dockerPwd}"
                    sh "docker push ${dockerUname}/nodejs-app:${BUILD_ID}"
                }
            }
        }
        stage("Deploy to K8S"){
            steps{
                withKubeConfig(caCertificate: '', clusterName: 'minikube', contextName: 'minikube', credentialsId: 'minikube-jenkins-secret', namespace: '', restrictKubeConfigAccess: false, serverUrl: 'https://192.168.49.2:8443') {
                    sh "kubectl apply -f ${WORKSPACE}/K8S/deployment.yml"
                    sh "kubectl apply -f ${WORKSPACE}/K8S/service.yml"
                }
            }
        }
    }
}
