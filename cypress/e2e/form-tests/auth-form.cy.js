/// <reference types="cypress" />
describe('example to-do app', () => {
    it("Test1", () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('qwerty{enter}');
        cy.get('div#flash').should('have.text', '\n            Your password is invalid!\n            ×\n          ');
    })

})

describe('example to-do app', () => {
    it("Test2", () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.get('input#username').type('11231223');
        cy.get('input#password').type('qwerty{enter}');
        cy.get('div#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ');
    })

})