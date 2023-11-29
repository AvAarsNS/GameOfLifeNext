import React from "react";
import GameConfig from "../../src/app/components/gameconfig"
import '../../src/app/globals.css';

describe('We want to verify if all elements are present for the user to configure the Game of Life', () => {
    beforeEach(() => {
        cy.mount(<GameConfig/>);
    });

    it('should have a start button', () => {
        cy.get('[data-cy-start-button]').should('be.visible'); 
    });

    it('should have pattern title with nice styling', () => {
        const patternTitle = cy.get('h4[data-cy-pattern-title]');
        patternTitle.should('be.visible'); 
        patternTitle.should('have.class', 'font-bold'); 
    });

    it('should contain 4 checkboxes, one for each pattern', () => {
        cy.get('[data-cy-checkbox-pattern=Random]').should('be.visible'); 
        cy.get('[data-cy-checkbox-pattern=Glider]').should('be.visible'); 
        cy.get('[data-cy-checkbox-pattern=Blinker]').should('be.visible'); 
        cy.get('[data-cy-checkbox-pattern=Beehive]').should('be.visible'); 
    });

    it('should have the checkboxes vertically and left-aligned', () => {
        cy.get('[data-cy-checkboxes]').should('have.class', 'flex-col'); 
        cy.get('[data-cy-checkboxes]').should('have.class', 'items-left'); 
    });
});