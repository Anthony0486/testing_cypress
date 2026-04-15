describe('Tests de l\'application API - Vite', () => {
  
    beforeEach(() => {
      // On considère que l'app tourne sur le port par défaut de Vite
      cy.visit('http://localhost:5173/api.html');
    });
    it('Verifier que le status de la reponse est 200', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon').then((resp) => {
            expect(resp.status).to.eq(200);
        });
    });
    it('Verifier le nombre total de Pokemon', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon').then((resp) => {
            expect(resp.body.results).to.have.length(20);
         } );
    });
    it('Verifier le temps de réponse -2000ms', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon').then((resp) => {
            expect(resp.duration).to.be.lessThan(2000);
         } );
    });
    it('Verifier que le premier pokemon est bulbasaur', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon').then((resp) => {
            expect(resp.body.results[0]).to.have.keys('name', 'Bulbasaur');
         } );
    });
});