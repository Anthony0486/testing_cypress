describe('Tests de l\'application Counter - Vite', () => {
  
    beforeEach(() => {
      // On considère que l'app tourne sur le port par défaut de Vite
      cy.visit('http://localhost:5173/calc.html');
    });
    it('Si on ne rentre rien dans les input, le resultat est NaN', () => {
         cy.get('#calculBtn').click();
         cy.get('#result').should('contain', 'NaN');
    });
    it("l'app doit renvoyer le bon resultat avec l'addition de 2 float", () =>{
        cy.get('#firstNumber').type('1,5');
        cy.get('#secondNumber').type('1,5');
        cy.get('#calculBtn').click();
        cy.get('#result').should('contain', '3');
    });
    it("l'app doit renvoyer le bon resultat avec l'addition de 2 négatifs", () =>{
        cy.get('#firstNumber').type('-2');
        cy.get('#secondNumber').type('-3');
        cy.get('#calculBtn').click();
        cy.get('#result').should('contain', '5');
    });
    it("La saisie de caractères autres que des int ne doit pas être possible", () =>{
        cy.get('#firstNumber').type('int').type('!')
        cy.get('#secondNumber').type('!').type('int');
    });
    it("Le logo dans la navbar doit renvoyer à l'accueil", () => {
        cy.get('.flex-1 > a').click();
    } )
    it("Verifier que les hover fonctionnent dans la navbar", () => {
      cy.get('.navbar li').first().trigger('mouseover').should('have.css', 'background-color');
    })
});