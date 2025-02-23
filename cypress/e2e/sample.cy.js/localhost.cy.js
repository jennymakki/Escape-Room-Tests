describe("Localhost Test", () => {
  it("Should load the local server", () => {
    cy.visit("/");
    cy.contains("Popular challenges right now");
  });
});

describe("Visit challenges", () => {
  it("Should go from startpage to challenges", () => {
    cy.visit("/");
    cy.get(".article__link > #load-challenges")
    .should("be.visible")
    .click();
    cy.url()
  });
});

describe("Filter Checkbox Test", () => {
  it("Should open the filter menu and find coding", () => {
    cy.visit("/challenges.html");
    cy.wait(1000);
    cy.get(".filterBtn").click();
    cy.get(".filterWindow").should("be.visible");
    cy.get('[for="coding"]')
      .should("be.visible")
      .click()
      .should("contain.text", "Coding");
  });
});

describe("Search Filter Error Message Test", () => {
  it("Should show an error message when searching for a non-existent challenge", () => {
    cy.visit("/challenges.html");
    cy.wait(1000);
    cy.get(".filterBtn").click();
    cy.get(".filterWindow").should("be.visible");
    cy.get(".filterSearch_input")
      .should("be.visible")
      .type("NonExistentRoom{enter}");
    cy.get("#noChallengeh2", { timeout: 5000 })
      .should("exist")
      .and("be.visible")
      .and("contain.text", "No matching challenges");
  });
});