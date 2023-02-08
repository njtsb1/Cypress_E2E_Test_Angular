describe('Conduit Login', () => {
    it('Login success', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.get('.nav-item:nth-child(4) > nav-link').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain', '/settings')
    })

    it('Invalid Data', () => {
        cy.login('user@nonexistent.com', 'wrongpassword')
        cy.get('.error-messages > li')
            .should('contain', 'email or password is invalid')
    })
})
