pipeline {
    environment {
        registry = "bhoomika2897n"
        registryCredential = 'docker_cred'
        dockerImage = ''
    }
    agent any
    stages {
        stage ('git clone') {
            steps {
                git 'https://github.com/bhoomikakrish/nodeapp.git'
            }
        }
        stage ('docker build and push the image') {
            steps {
                echo "CICD jenkins job running"
                def dockerImage = docker.build('bhoomika2897n/service1Image:$BUILD_NUMBER', '.')
                docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                    dockerImage.push()
                }
            }
        }
    }
}
