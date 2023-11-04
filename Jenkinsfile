pipeline {
    environment {
        registry = "bhoomika2897n"
        registryCredential = 'dockerhub_id'
        dockerImage = ''
    }
    agent any
    stages {
        stage ('git clone') {
            steps {
                git clone https://github.com/bhoomikakrish/docker-spring-boot-java-web-service-example.git
            }
        }
        stage ('docker build and push the image') {
            steps {
                def dockerImage = docker.build('bhoomika2897n/service1Image:$BUILD_NUMBER', '.')
                docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                    dockerImage.push()
                }
            }
        }
    }
}
