describe('Kong Gateway Management Flow', () => {

  // using Date.now() to genetrate unique ID
  const uniqueId = Date.now();
  const serviceName = `Service-Auto-${uniqueId}`;
  const serviceUrl = `http://mockbin-${uniqueId}.org`;
  const routeName = `Route-Auto-${uniqueId}`;
  const routePath = `/path-${uniqueId}`;
  

  before(() => {
    // visit Kong Manager
    cy.visit('http://localhost:8002');
    cy.wait(2000);
  });

  it('should create a service and route with dynamic name', () => {
    // create service
    cy.contains('default').click(); 
    cy.get('button').contains('Add a Gateway Service').click();
    
    //
    cy.get('input[name="name"]').type(serviceName);
    cy.get('input[name="url"]').type(serviceUrl);
    cy.get('[data-testid="service-create-form-submit"]').click();

    // Verify creation
    cy.contains(serviceName).should('be.visible');

    // create Route
    cy.contains(serviceName).click();
    cy.get('[data-testid="service-routes"]').click();
    cy.get('[data-testid="empty-state-action"]').click();

    cy.get('[data-testid="route-form-name"]').type(routeName);
    cy.get('[data-testid="route-form-paths-input-1"]').type(routePath); 
    
    cy.get('[data-testid="route-create-form-submit"]').click();

    // Verify the creation of Route
    cy.contains(routeName).should('be.visible');
    cy.log('Service and Route created successfully!');
  });
});