class KongManager {
  get elements() {
    return {
      workspaceDefault: () => cy.contains('default', { timeout: 10000 }),
    
      addServiceBtn: () => cy.get('button').contains('Add a Gateway Service', { timeout: 10000 }),
      serviceNameInput: () => cy.get('input[name="name"]'),
      serviceUrlInput: () => cy.get('input[name="url"]'),
      submitBtn: () => cy.get('[data-testid$="submit"]'), 
      
      routesTab: () => cy.get('[data-testid="service-routes"]'),
      addRouteBtn: () => cy.get('button').contains(' Add a Route '),
      routeNameInput: () => cy.get('[data-testid="route-form-name"]'),
      routePathInput: () => cy.get('[data-testid="route-form-paths-input-1"]'),
      routeSubmitBtn:() => cy.get('[data-testid="route-create-form-submit"]'),

      routeIcon:() => cy.get('[data-testid="row-actions-dropdown-trigger"]'),
      routeDtlBtn:() => cy.get('[data-testid="action-entity-delete"]'),
      routeDltImput:() => cy.get('[data-testid="confirmation-input"]'),
      routeDltYes:() => cy.get('[data-testid="modal-action-button"]'),

      serviceSideBar:() => cy.get('[class="router-link-active breadcrumbs-item link"]').contains('Gateway Services'),
      serviceIcon:() => cy.get('[data-testid="row-actions-dropdown-trigger"]'),
      serviceDtlBtn:() => cy.get('[data-testid="action-entity-delete"]'),
      serviceDltImput:() => cy.get('[data-testid="confirmation-input"]'),
      sericeDltYes:() => cy.get('[data-testid="modal-action-button"]')
    };
  }

  createService(name, url) {
    this.elements.addServiceBtn().should('be.visible').click();
    this.elements.serviceNameInput().clear().type(name);
    this.elements.serviceUrlInput().clear().type(url);
    this.elements.submitBtn().click();
  }

  createRoute(name, path) {
    this.elements.routesTab().should('be.visible').click();
    this.elements.addRouteBtn().should('be.visible').click();
    this.elements.routeNameInput().clear().type(name);
    this.elements.routePathInput().clear().type(`${path}`);
    this.elements.routeSubmitBtn().click();
  }

  deleteRoute(name) {
    this.elements.routeIcon().click();
    this.elements.routeDtlBtn().click();
    this.elements.routeDltImput().type(name);
    this.elements.routeDltYes().click();
  }

  deleteService(name){
    this.elements.serviceSideBar().click();
    cy.wait(2000);
    this.elements.serviceIcon().click();
    this.elements.serviceDtlBtn().click();
    this.elements.serviceDltImput().type(name);
    this.elements.sericeDltYes().click();
  }
}

export const kongManager = new KongManager();