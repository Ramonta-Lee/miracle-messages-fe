/// enables intellisense for cypress
/// <reference types="Cypress" />

/* eslint-disable no-undef */
describe("Admin page", function () {
  it("should successfully load the login page", function () {
    cy.visit("/admin/chapters");
  });

  it("should get all the chapter elements", function () {
    cy.get(".card").then(($el) => {
      $el.get();
    });
  });

  it("should have state on load", () => {
    cy.window().its("store").invoke("getState").should("exist");
  });

  it("should get the Edit button for first Chapter", function () {
    cy.get(".btn").eq(0).should("have.length", 1);
    cy.get(".btn-secondary").eq(0).contains("Edit");
  });

  it.skip("should click add Chapter button", function () {
    cy.get(".addBtn").click();
  });

  it.skip("should fill all input fields to add a Chapter", function () {
    cy.get("input").eq(0).type("This is how we do it!");
    cy.get("input").eq(1).type("1981-02-20", { delay: 100 });
    cy.get(".form-control")
      .eq(2)
      .type("One day you'll wake up, and this will all be just a dream.");
    cy.get("input").eq(3).type("Norfolk");
    cy.get("input").eq(4).type("VA");
    cy.get("input").eq(5).type("36.8508");
    cy.get("input").eq(6).type("76.2859");
    cy.get("input").eq(7).type("greyflanel@.com");
    cy.get("input").eq(8).type("26");
    cy.get("input").eq(9).type("72");
    cy.get("input").eq(10).type("9");
    cy.get("input").eq(11).type("86", { delay: 100 });
    cy.get(".form-control")
      .eq(12)
      .type(
        "Once upon a time, not long ago. Where people wore pajamas and lived life slow........"
      );
  });

  it.skip("should click the cancel add Chapter button", function () {
    cy.get(".btn-secondary").contains("Cancel").click();
  });

  it("should click the delete the first Chapter button", function () {
    cy.get(".btn-danger").eq(0).click().wait(1000);
  });

  it("should click the cancel delete Chapter button", function () {
    cy.get(".btn-secondary").contains("Cancel").click().wait(1000);
  });

  it("should click the sidebar link for Volunteers", function () {
    cy.get(".sidebar-link").eq(1).click().wait(2000);
  });
  // TODO we don't have input fields
  it.skip("should fill input fields", function () {
    cy.get("input").first().type("test@test.com", { delay: 100 });
    cy.get("input").eq(1).type("Password1", { delay: 100 });
  });

  //TODO no submit button
  it.skip("should click to submit", function () {
    cy.get(".button-primary").click();
  });

  it("should click the sidebar link for Sponsors", function () {
    cy.get(".sidebar-link").contains("Sponsors").click();
  });

  it("should click the first Sponsor update button", function () {
    cy.get(".btn-secondary").eq(0).click();
  });

  it("should fill out all input fields", function () {
    cy.get(".form-control").eq(0).type("Ada Lovelace");
    cy.get(".form-control").eq(1).type("We Are the World.com");
  });

  it("should click on Choose a file button", function () {
    cy.get(".form-control-file").should("exist").wait(1000);
  });

  it("should click to Cancel updating Sponsors", function () {
    cy.get(".modal-content").eq(0).contains("Cancel").click();
  });

  it("should click the Chapters in sidebar", function () {
    cy.get(".sidebar-link").eq(0).click();
  });
});