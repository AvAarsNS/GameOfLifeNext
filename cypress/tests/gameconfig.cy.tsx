import React from "react";
import GameConfig from "../../src/app/components/gameconfig"
import '../../src/app/globals.css';

describe('We want to verify if all elements are present for the user to configure the Game of Life', () => {
    let onGameStartSpy;
    
    beforeEach(() => {
        // Create a spy function
        onGameStartSpy = cy.spy().as('onGameStart');

        // Mount the component with the spy as a prop
        cy.mount(<GameConfig onGameStart={onGameStartSpy} />);
    });

    it('should have pattern title with nice styling', () => {
        const patternTitle = cy.get('h4[data-cy-pattern-title]');
        patternTitle.should('be.visible'); 
        patternTitle.should('have.class', 'font-bold'); 
    });

    it('should contain 4 radiobuttons, one for each pattern', () => {
        cy.get('[data-cy-radiobutton-pattern=Random]').should('be.visible'); 
        cy.get('[data-cy-radiobutton-pattern=Glider]').should('be.visible'); 
        cy.get('[data-cy-radiobutton-pattern=Blinker]').should('be.visible'); 
        cy.get('[data-cy-radiobutton-pattern=Beehive]').should('be.visible'); 
    });

    it('should have the radiobuttons vertically and left-aligned', () => {
        cy.get('[data-cy-radiobuttons]').should('have.class', 'flex-col'); 
        cy.get('[data-cy-radiobuttons]').should('have.class', 'items-left'); 
    });

    it('should have a start button', () => {
        cy.get('[data-cy-start-button]').should('be.visible'); 
    });

    it('when the user clicks on the start button, the selected pattern should be passed on to create the game', () => {
        cy.get('[data-cy-radiobutton-pattern=Random]').click();
        cy.get('[data-cy-radiobutton-pattern=Random]').should('be.checked');
        cy.get('[data-cy-radiobutton-pattern=Glider]').click();
        cy.get('[data-cy-radiobutton-pattern=Glider]').should('be.checked');
        cy.get('[data-cy-start-button]').click();

        // Assert that the spy was called with the correct pattern
        cy.get('@onGameStart').should('have.been.calledWith', 'Glider');
    });
});