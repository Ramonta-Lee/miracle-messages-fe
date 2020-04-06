/// enables intellisense for cypress
/// <reference types="Cypress" />


/* eslint-disable no-undef */
describe("Login page", function() {

    it("should successfully load the login page", function() {
      cy.visit("/admin/login");
    });

    it("should fill input fields", function() {
        cy.get("input").first().type('test@test.com', { delay: 100 });
        cy.get("input").eq(1).type('Password1', { delay: 100 })
        
      });

      it("should click to submit", function() {
        cy.get(".button-primary").click();
      });

})