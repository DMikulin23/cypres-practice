/// <reference types="cypress" />
describe('queries pro', () => {

    it.skip("children", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
        cy.get('div.contacts_socials').children('a[href="https://www.instagram.com/hillel_itschool/"]');

    });

    it.skip("parent, parents", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
        cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').parent();
        cy.get('a[href="https://www.instagram.com/hillel_itschool/"]').parents('div.app-content');
    })

    it.skip("find", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })

        cy.get('header').find('a.header_logo');

    })

    it.skip("within", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })

        cy.contains('Sign In').click();

        cy.get('div.modal-content').within(() => {
            cy.get('button');
        })
        cy.get('button');

    })

    it("several elements", () => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })

        cy.get('span.socials_icon');
        cy.get('span.socials_icon').first();
        cy.get('span.socials_icon').last();
        cy.get('span.socials_icon').eq(0);
        cy.get('span.socials_icon').eq(2);
        cy.get('span.socials_icon').eq(2);
        cy.get('.socials_link').filter('a[href="https://t.me/ithillel_kyiv"]');


    })

})