# Kong Gateway Structure
 cypress/support/pages/kongManager.js: Contains the KongManager class with all locators and action methods.
 cypress/e2e/kongGateway.cy.js: Contains the end-to-end test flow for Service and Route creation.


## How to Run
1. Start Kong: 'docker-compose up -d'
2. Install: 'npm install'
3. Test: 'npx cypress run'
4. Teardown: 'docker-compose down'