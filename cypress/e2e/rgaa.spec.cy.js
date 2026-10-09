describe('Tests de l\'application Counter - Vite', () => {
  
    beforeEach(() => {
      // On considère que l'app tourne sur le port par défaut de Vite
      cy.visit('http://localhost:5173/calc.html');
    });
    it("Verifier que les hover fonctionnent dans la navbar", () => {
      cy.get('.navbar li').first().trigger('mouseover').should('have.css', 'background-color');
    })
  it('Verifier le focus clavier visible des boutons', () => {
      cy.get('#firstNumber').focus();
    cy.press(Cypress.Keyboard.Keys.TAB);
      cy.focused().should('match', 'button').should(($button) => {
        expect($button[0].matches(':focus-visible')).to.be.true;
      });
      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.get('#secondNumber').should('have.focus');
      cy.press(Cypress.Keyboard.Keys.TAB);
      cy.focused().should('have.id', 'calculBtn').should(($button) => {
        expect($button[0].matches(':focus-visible')).to.be.true;
      });
  });
  it('Verifier la lisibilité des boutons', () => {
      cy.get('button').each(($button) => {
        expect($button).to.be.visible;
      const style = window.getComputedStyle($button[0]);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { willReadFrequently: true });
      const getRgb = (color) => {
        context.fillStyle = color;
        context.fillRect(0, 0, 1, 1);
        return Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3);
      };
      const getLuminance = (color) => {
        const channels = getRgb(color).map((value) => {
          const channel = value / 255;
          return channel <= 0.04045
            ? channel / 12.92
            : ((channel + 0.055) / 1.055) ** 2.4;
        });
        return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
      };
      const luminances = [getLuminance(style.color), getLuminance(style.backgroundColor)];
      const contrast = (Math.max(...luminances) + 0.05) / (Math.min(...luminances) + 0.05);

      expect(contrast).to.be.at.least(4.5);
    });
  });
  it('Verifier la sémantique native des boutons', () => {
    cy.get('button').each(($button) => {
      expect($button[0].tagName).to.eq('BUTTON');
    });
  });
  it('Verifier que les boutons ont un libellé accessible', () => {
    cy.get('button').each(($button) => {
      const ariaLabel = $button.attr('aria-label')?.trim();
      const visibleLabel = $button.text().trim();
      expect(ariaLabel || visibleLabel).not.to.be.empty;
    });
  });
});