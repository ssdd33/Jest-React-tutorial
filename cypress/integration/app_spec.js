/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
describe("habit tracker", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders", () => {
    cy.findByText("Habit Tracker").should("exist");
  });
});
