describe("User can search Github Registry", () => {
    beforeEach(() => {
        cy.server();
        cy.route({
            method: "GET",
            url: "https://api.github.com/search/users?q=name",
            response: "fixture:register.json",
        })
        cy.visit("/")
    })
    it("sucessfully", () => {
        cy.get("#input").type("Barack")
        cy.get("button").contains("Search").click()
    })
})