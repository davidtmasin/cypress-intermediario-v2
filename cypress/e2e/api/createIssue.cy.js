/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Cypress Intermediário V2 - Create Issue", () => {
  beforeEach(() => {
    cy.api_deleteProjects();
  });

  it("creates successfully a issue", () => {
    const issue = {
      title: `issue-${faker.datatype.uuid()}`,
      description: faker.random.words(3),
      project: {
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5),
      },
    };

    cy.api_createIssue(issue).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.title).to.equal(issue.title);
      expect(response.body.description).to.equal(issue.description);
    });
  });
});
