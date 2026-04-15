describe('Test du formulaire avec Fixtures', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/form.html'); // Ajuste selon ton chemin
        // On charge la fixture une fois pour tous les tests
        cy.fixture('user').as('userData');
    });

    it('doit remplir le formulaire avec un utilisateur valide depuis la fixture', function () {
        const user = this.userData.validUser;

        cy.get('#fullName').type(user.fullName);
        cy.get('#email').type(user.email);
        cy.get('#subscription').select(user.subscription);
        cy.get('#birthDate').type(user.birthDate);

        if (user.newsletter) {
            cy.get('#newsletter').check();
        }

        cy.get('button[type="submit"]').click();

        // Vérification du feedback DaisyUI
        cy.get('#successMsg')
            .should('be.visible')
            .and('contain', 'enregistré avec succès');
    });

    it('doit remplir le formulaire avec le profil minimal', function () {
        const user = this.userData.minimalUser;

        cy.get('#fullName').type(user.fullName);
        cy.get('#email').type(user.email);
        cy.get('#subscription').select(user.subscription);

        // On ne touche pas à la date ni à la checkbox
        cy.get('button[type="submit"]').click();
        cy.get('#successMsg').should('be.visible');
    });
});