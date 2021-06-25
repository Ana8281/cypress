/// <reference types="cypress" />

describe('load main page', () => {
    it('load main page', () => {
        cy.visit('/index.html'); //url base added in cy config

        // verify h1 and contains a text see good practice add to the element data-cy="sometihng"
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // verify exits
        cy.get('[data-cy="titulo-proyecto"]').should('exist')

        // verify element exist and has a text
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria')


        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal', 'No hay Citas')
    });
})