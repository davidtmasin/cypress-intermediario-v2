Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password")
  ) => {
    const login = () => {
      cy.visit("/users/sign_in");

      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,
      });
      cy.get("[data-qa-selector='sign_in_button']").click();
    };

    login();
  }
);

Cypress.Commands.add("logout", () => {
    cy.get("[data-qa-selector='user_menu']").click();

    cy.get(".dropdown-menu.show").should("be.visible");

    cy.contains(".sign-out-link", "Sign out").click();
});
