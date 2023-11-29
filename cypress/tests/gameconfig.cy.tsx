import React from "react";
import GameConfig from "../../src/app/components/gameconfig"

describe('We want to verify if all elements are present for the user to configure the Game of Life', () => {
    it('should have a start button ', () => {
        cy.mount(<GameConfig/>);
        cy.get('[data-cy-start-button]').should('be.visible'); 
    });
});