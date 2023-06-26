pipeline{
    agent any

    tools {nodejs "nodejs"}

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description:"Ej: cypress/e2e/**/**")
        choice(name:"BROWSER", choices: ['chrome','edge'], description: "Escoja un browser para ejecucion")

    }
    
    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }

    }
}