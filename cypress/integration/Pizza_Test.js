describe('Pizza Test', function () {

    it ('Check Name Input', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('.formName')
            .type('Michael Bolton')
            .should('have.value', 'Michael Bolton')
    })

    it ('Check Toppings Checklist', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[type="checkbox"]')
          .check()
          .should('be.checked')
    })

    it ('Chec Size Dropdown Functionality', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('select')
          .select('Large')
          .should('have.value', 'Large')
    })

    it ('Check Special Instructions Input', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('.specialInstructions')
            .type('No Cheese!')
            .should('have.value', 'No Cheese!')
    })
    
    it ('Check Submission Button', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('.finish').click().should('not.be.disabled')
    })

})
