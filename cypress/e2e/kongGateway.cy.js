import { kongManager } from '../support/pages/kongManager';

describe('Kong Gateway Management Flow', () => {
  //
  const uniqueId = Date.now();
  const testData = {
    serviceName: `testBari`,
    serviceUrl: `https://test-bari-1.org`,
    routeName: `testBari`,
    routePath: `/testBari`
  };

  beforeEach(() => {
    cy.visit('/', { timeout: 30000 });
    kongManager.elements.workspaceDefault().should('be.visible').click();
  });



  it('should successfully create service and associated route', () => {

    
    // Create service
    kongManager.createService(testData.serviceName, testData.serviceUrl);

    cy.url().should('include', '/services/');
    cy.contains(testData.serviceName).should('be.visible');

    // 2. Create Route
    cy.contains(testData.serviceName).click();
    kongManager.createRoute(testData.routeName, testData.routePath,);

    cy.contains(testData.routeName).should('be.visible');

    //3. Delete Route
    kongManager.deleteRoute(testData.routeName);

    //4.Delete Service
    kongManager.deleteService(testData.serviceName);


    
    cy.log('Service and Route lifecycle verified successfully.');
  });
});