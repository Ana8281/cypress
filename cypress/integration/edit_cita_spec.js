/// <reference types="cypress" />

describe('Call all fields to create a new Cita and edit it', () => {
    it('new cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Sam')

            cy.get('[data-cy="propietario-input"]')
            .type('Laura')

            cy.get('[data-cy="telefono-input"]')
            .type('333333')

            cy.get('[data-cy="fecha-input"]')
            .type('2020-08-21')

            cy.get('[data-cy="hora-input"]')
            .type('10:30')

            cy.get('[data-cy="sintomas-textarea"]')
            .type('Fiber')

            cy.get('[data-cy="submit-cita"]')
             .click()

             cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')

            cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')
 
            cy.get('[data-cy="alerta"]')
                .invoke('text')
                .should('equal', 'Se agregó correctamente')
    })

    it('edit cita', () => {
        cy.get('[data-cy="btn-editar"]')
        .click()

        cy.get('[data-cy="propietario-input"]')
        .clear()
        .type('Carlos')

        cy.get('[data-cy="submit-cita"]')
             .click()

        cy.get('[data-cy="alerta"]')
        .should('have.class', 'alert-success')

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')
    })
})