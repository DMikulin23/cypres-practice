/// <reference types="cypress" />
describe('queries homework', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
    })
    it('Facebook icon should open the facebook page', () => {
        cy.get('a.socials_link').eq(0).invoke('attr', 'href').should('contain', 'facebook.com');
    })
    it('Telegram icon should open the telegram page', () => {
        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 't.me');
    })
    it('Youtube icon should open the youtube page', () => {
        cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'youtube.com');
    })
    it('Instagram icon should open the instagram page', () => {
        cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'instagram.com');
    })
    it('Linkedin icon should open the linkedin page', () => {
        cy.get('a.socials_link').eq(4).invoke('attr', 'href').should('contain', 'linkedin.com');
    })
    it('Login form is open', () => {
        cy.get('button.header_signin').click();
        cy.get('h4').invoke("text").should('eq', 'Log in');
    })
    it('Registration form is open', () => {
        cy.get('button.btn-primary').click();
        cy.get('h4').invoke("text").should('eq', 'Registration');
    })
})