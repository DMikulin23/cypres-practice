// Сторінка - https://the-internet.herokuapp.com/dropdown

// Тест 1:

// Перевірити, що по дефолту обране значення "Please select an option"
// Тест 2:

// Обрати значення "Option 2"
// Перевірити, що обране значення "Option 2"

/// <reference types="cypress"/>
describe('Exercise 2', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    })
    it('Checking the initial checkbox', () => {
        cy.get('select#dropdown option:selected').should('have.text', 'Please select an option');
    })
    it('Changing and checking a checkbox', () => {
        cy.get('select#dropdown').select('Option 2');
        cy.get('select#dropdown option:selected').should('have.text', 'Option 2');
    })
})