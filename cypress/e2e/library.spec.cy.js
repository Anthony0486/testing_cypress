describe('Test du formulaire avec fixture', () => {
  beforeEach(() => {
    cy.visit('https://library.mithridatem.fr/register/');
    cy.fixture('user').as('userData');
  });
      it('Remplir le formulaire avec un utilisateur valide depuis la fixture', function () {
        const user = this.userData.standardUser;
       
             cy.get('#firstname').type(user.firstName);
             cy.get('#lastname').type(user.lastName);
             cy.get('#email').type(user.email);
             cy.get('#password').type(user.password);
             cy.get('#confirm-password').type(user.password);
             
             cy.get('button[type="submit"]').click();

    });
});

