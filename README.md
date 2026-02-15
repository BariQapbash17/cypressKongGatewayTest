# Kong Gateway Project
## How to Run
1. Start Kong: 'docker-compose up -d'
2. Install: 'npm install'
3. Test: 'npx cypress run'
4. Teardown: 'docker-compose down'

##  Design Considerations (Required)
- Dynamic Names: Used Date.now() for Service/Route names to ensure test idempotency and avoid "Name already exists" errors.
- Wait Strategy: Added cy.wait(2000) after page load to handle Kong Manager
- Single Flow: Combined Service and Route creation to reflect their logical dependency.

