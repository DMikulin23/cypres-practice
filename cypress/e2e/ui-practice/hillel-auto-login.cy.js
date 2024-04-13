/// <reference types="cypress"/>

import userData from "../../fixtures/credentials.json"

describe('Exercise 2', () => {
    it("Test1", () => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
        cy.contains("Sign In").click();
        cy.get("h4.modal-title").should("be.visible");
        cy.get("input#signinEmail").type(userData.username);
        cy.get("input#signinPassword").type(userData.password);
        cy.contains("Login").click();
        cy.get('h1').invoke("text").should('eq', 'Garage');
    });
});