/// <reference types="cypress" />

describe("Cypress Intermediário V2 - Login", () => {
  it("logs in successfully", () => {
    cy.login();

    cy.get(".qa-user-avatar", { timeout: 6000 }).should("be.visible");
  });
});
