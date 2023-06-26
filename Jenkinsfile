pipeline{
    agent any

    nodejs('NodeJS 20.3.1') {
    // some block
    }

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description:"Ej: cypress/e2e/features/cart.feature")
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
            nodejs('NodeJS 20.3.1') {
                sh "npm i"
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