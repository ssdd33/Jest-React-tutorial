/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
describe("habit tracker", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders", () => {
    cy.findByText("Habit Tracker").should("exist");
  });

  it("adds new habit at the end", () => {
    cy.findByPlaceholderText("Habit").type("new habit");
    cy.findByText("Add").click();

    // cy.findByText("new habit").should("exist");
    cy.findAllByTestId("habit-name").last().should("have.text", "new habit");
    cy.findAllByTestId("habit-count").last().should("have.text", "0");
  });

  it("increase count", () => {
    cy.findAllByTitle("increment").last().click();
    cy.findAllByTestId("habit-count").last().should("have.text", "1");
  });

  it("decrease count", () => {
    cy.findAllByTitle("increment").last().click();
    cy.findAllByTitle("decrement").last().click();
    cy.findAllByTestId("habit-count").last().should("have.text", "0");
  });

  it("does not decreases below 0", () => {
    cy.findAllByTitle("decrement").last().click();
    cy.findAllByTestId("habit-count").last().should("have.text", "0");
  });

  it("shows active count on the header", () => {
    cy.findAllByTitle("increment").click({ multiple: true });
    cy.findByTestId("total-count").should("have.text", "3");
  });

  it("reset to 0 when clicking reset all button", () => {
    cy.findAllByTitle("increment").click({ multiple: true });
    cy.findByText("Reset All").click();
    // cy.findAllByTestId("habit-count").should("have.text", "000");
    cy.findAllByTestId("habit-count").each((item) => {
      cy.wrap(item).should("have.text", "0");
    });
    cy.findByTestId("total-count").should("have.text", "0");
  });

  it("deletes an item", () => {
    cy.findAllByTitle("delete").first().click();
    // cy.findAllByTestId("habit-name").first().should("have.text", "Running");
    cy.findAllByTestId("habit-name").findByText("Reading").should("not.exist");
  });
});
