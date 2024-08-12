Cypress.Commands.add('typeAText', (field, text) => { 
    cy.get(field).should('exist').type(text)
})
