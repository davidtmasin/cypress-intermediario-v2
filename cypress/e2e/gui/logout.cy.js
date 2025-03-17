/// <reference types="cypress" />

describe("Cypress Intermediário V2 - Logout", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/");
  });
   
  it("logs out successfully", () => {
    cy.logout();

    cy.url().should("include", "/users/sign_in");
    cy.contains("h1", "GitLab Community Edition").should("be.visible");
  });
});
