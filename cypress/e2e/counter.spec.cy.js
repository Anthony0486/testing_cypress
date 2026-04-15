describe('Tests de l\'application Counter - Vite', () => {
  
    beforeEach(() => {
      // On considère que l'app tourne sur le port par défaut de Vite
      cy.visit('http://localhost:5173')
    })
  
    // ## 1. Test du Compteur (Logique métier)
    it('doit initialiser le compteur et s\'incrémenter au clic', () => {
      // Vérifie l'état initial (dépend de ta fonction setupCounter, souvent "count is 0")
      cy.get('#counter')
        .should('be.visible')
        .and('contain', 'Count is 0')
  
      // Premier clic
      cy.get('#counter').click()
      cy.get('#counter').should('contain', 'Count is 1')
  
      // Plusieurs clics
      cy.get('#counter').click().click()
      cy.get('#counter').should('contain', 'Count is 3')
    })
  
    // ## 2. Test d'Affichage et Assets
    it('doit afficher correctement les logos et les images', () => {
      // Vérifie que l'image Hero est présente
      cy.get('.hero img.base').should('be.visible')
      
      // Vérifie les logos framework et vite
      cy.get('img[alt="JavaScript logo"]').should('be.visible')
      cy.get('img[alt="Vite logo"]').should('be.visible')
      
      // Vérifie le titre principal
      cy.get('h1').should('have.text', 'Get started')
    })
  
    // ## 3. Test de Navigation (Liens externes)
    it('doit avoir des liens de documentation fonctionnels', () => {
      // Test du lien vers la doc Vite
      cy.contains('Explore Vite')
        .should('have.attr', 'href', 'https://vite.dev/')
        .and('have.attr', 'target', '_blank')
  
      // Test du lien vers MDN
      cy.contains('Learn more')
        .should('have.attr', 'href', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript')
    })
  
    // ## 4. Test de Structure (Accessibilité de base)
    it('doit avoir les sections principales et les icônes SVG', () => {
      cy.get('#next-steps').should('exist')
      cy.get('#docs').should('contain', 'Documentation')
      cy.get('#social').should('contain', 'Connect with us')
      
      // Vérifie qu'il y a bien 4 liens sociaux
      cy.get('#social ul li').should('have.length', 4)
    })
  })