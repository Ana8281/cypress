/// <reference types="cypress" />

describe('load main page', () => {
    it('load main page', () => {
        cy.visit('/index.html');


        cy.get('[data-cy="formulario"]')
            .submit()

        //select alert
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger')

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')
    })
})