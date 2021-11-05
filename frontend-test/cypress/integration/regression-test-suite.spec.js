/// <reference types="cypress" />

// This is a test suite
describe('Regression test suite', function(){

    // This is a test case
    it ('Perform valid login', function(){
        cy.visit(' http://localhost:3000')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > input').type('2021-09-05')
        cy.get(':nth-child(2) > input').type('2021-09-08')
        cy.get(':nth-child(3) > select').select("2")
        cy.get(':nth-child(4) > select').select('1')
        cy.get(':nth-child(5) > select').select('1')
        cy.get('.blue').click()
        

       

        







    })

})