describe('Test du formulaire avec fixture', () => {
  beforeEach(() => {
    cy.visit('https://library.mithridatem.fr/');
    cy.fixture('users').as('userData');
    cy.fixture('books').as('bookData');
  });
  it('Se connecter et ajouter des livres', function() {
        const users = this.userData.users;
        const books = this.bookData.books;

        cy.get('a[href="/login"]').click();
        cy.get('#email').should('be.visible').type(users[0].standardUser.email);
        cy.get('#password').should('be.visible').type(users[0].standardUser.password);
        cy.get('button[type="submit"]').click();
        
        cy.wrap(books).each((entry) => {
        const book = entry.book;
        cy.get('summary').click();
        cy.get('a[href="/book/add"]').click();
        cy.get("#title").type(book.title);
        cy.get("#author").type(book.author);
        cy.get("#description").type(book.description);
        cy.get("#publish_at").type(book.publish_at);
        cy.get("#cover").click();
        cy.get("option[value='56']").click();
        cy.get("button").click();
  })
})
});