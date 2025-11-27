describe('SauceDemo Happy Path', () => {
    it('logs in, adds a product, checks out, and verifies order', () => {
        cy.visit('/');
        // Login
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('[data-test=login-button]').click();
        // Verify login succeeded
        cy.url().should('include', '/inventory.html');
        // Add first product to cart
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        // Open cart
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');
        // Checkout
        cy.get('[data-test=checkout]').click();
        // Fill checkout info
        cy.get('[data-test=firstName]').type('Cypress');
        cy.get('[data-test=lastName]').type('Tester');
        cy.get('[data-test=postalCode]').type('12345');
        cy.get('[data-test=continue]').click();
        // Finish order
        cy.get('[data-test=finish]').click();
        // Verify completion
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    });
});
