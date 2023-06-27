pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/features/*", description:"Ej: cypress/e2e/features/cart.feature")
        choice(name:"BROWSER", choices: ['chrome','edge','electron'], description: "Escoja un browser para ejecucion")
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
                sh "npm install"
                sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                //sh "docker run -i -t cucumberproject:1.1 cypress run --spec ${SPEC} --browser ${BROWSER}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }

    }
}