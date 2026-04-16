describe('Test du formulaire avec fixture', () => {
  beforeEach(() => {
    cy.visit('https://library.mithridatem.fr/register/');
    cy.fixture('users').as('userData');
  });
      it('Remplir le formulaire avec des utilisateur valide depuis la fixture', function () {
        const users = this.userData.users;
        
       cy.wrap(users).each((entry) => {
        const user = entry.standardUser;
             cy.get('#firstname').type(user.firstName);
             cy.get('#lastname').type(user.lastName);
             cy.get('#email').type(user.email);
             cy.get('#password').type(user.password);
             cy.get('#confirm-password').type(user.password);
             
             cy.get('button[type="submit"]').click();
       });             
    });
});

