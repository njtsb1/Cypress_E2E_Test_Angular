describe('Comments', () => {
    it('Write', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('Global Feed').click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Sensational!')
        cy.get('.btn-primary').click()
        cy.contains('Sensational!')
    })
})
