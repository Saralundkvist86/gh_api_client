describe("User can search Github Registry", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=Barack",
      response: "fixture:register.json",
    });
    cy.visit("/");
  });
  it("sucessfully", () => {
    cy.get('[data-cy="input"]').type("Barack");
    cy.get("button").contains("Search").click();
    cy.get('[data-cy="search-result"]').should("contain", "shentibeitaokongle");
  });
});
