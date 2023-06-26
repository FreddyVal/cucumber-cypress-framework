pipeline{
    agent none

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/features/cart.feature", description:"Ej: cypress/e2e/features/cart.feature")
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

            agent {
                docker {
                    image 'cypress/browsers:node18.12.0-chrome107'
                }
            }
            steps{
                
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