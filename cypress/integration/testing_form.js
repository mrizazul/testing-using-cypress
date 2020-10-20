/// <reference types="cypress" />

describe('Testing Form', () => {

    it('Inline form', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Inline form')
            .find('[placeholder="Jane Doe"]')
            .click()
            .type("Moh Riza Z");

        cy.contains('nb-card', 'Inline form')
            .find('[placeholder="Email"]')
            .click()
            .type("mrizazul@gmail.com");

        cy.contains('nb-card', 'Inline form')
            .find('.custom-checkbox')
            .click();

        cy.contains('nb-card', 'Inline form')
            .find('button')
            .click();

        cy.url().should('include', 'forms/layouts?')
    });

    it('Using the Grid ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('#inputEmail1')
            .click()
            .type("mrizazul@gmail.com");

        cy.get('#inputPassword2')
            .click()
            .type("test");

        cy.contains("Option 2")
            .click();

        cy.contains('nb-card', 'Using the Grid')
            .find('button')
            .click();

        cy.url().should('include', 'forms/layouts?undefined=undefined');
    });

    it('Basic form ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('#exampleInputEmail1')
            .click()
            .type("mrizazul@gmail.com");

        cy.get('#exampleInputPassword1')
            .click()
            .type("test");

        cy.contains('Check me out')
            .click();

        cy.contains('nb-card', 'Basic form')
            .find('button')
            .click();

        cy.url().should('include', 'forms/layouts?');
    });

    it('Form without labels ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Recipients"]')
            .click()
            .type("Moh Riza z");

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Subject"]')
            .click()
            .type("Test Subject");

        cy.contains('nb-card', 'Form without labels')
            .find('[placeholder="Message"]')
            .click()
            .type("Test Message");

        cy.contains('nb-card', 'Form without labels')
            .find('button')
            .click()

        cy.url().should('include', 'forms/layouts?')
    });

    it('Block form ', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('#inputFirstName')
            .click()
            .type("Moh Riza z");

        cy.get('#inputLastName')
            .click()
            .type("Zulfahnur");

        cy.get('#inputEmail')
            .click()
            .type("mrizazul@gmail.com");

        cy.get('#inputWebsite')
            .click()
            .type("github.com/mrizazul");

        cy.contains('nb-card', 'Block form')
            .find('button')
            .click()

        cy.url().should('include', 'forms/layouts')
    });

});