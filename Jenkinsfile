pipeline{
    agent any

    parameters{
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description:"Ej: cypress/e2e/features/cart.feature")
        choice(name:"BROWSER", choices: ['chrome','edge'], description: "Escoja un browser para ejecucion")

    }
    
    options{
        ansiColor('xterm')
    }

    stages{
        stage('Checkout'){
            git 'https://github.com/FreddyVal/cucumber-cypress-framework'
        }
        stage('Build'){
            sh "npm install"
        }
        stage('Run Cypress Tests'){
            docker.image('cypress/browsers:node14.17.0-chrome91').inside {
                sh 'npm run cypress:run'
            }
        }

    }
}