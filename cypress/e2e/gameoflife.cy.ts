import { gameOfLifeAPIJSON } from '../../test/doubles/grid.double';

describe('Time to play the game of life', () => {
  it('is able to play the first tick of a new game with a glider', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy-radiobutton-pattern=Glider]').click();

    cy.get('[data-cy-start-button]').click();
    // Only check the area where the glider is. Maybe we can improve this..
    cy.get(`[data-cy-gridcoordinate="(0,0)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(0,1)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(0,2)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(1,0)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(1,1)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(1,2)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(2,0)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(2,1)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(2,2)"]`).should('have.class', 'alive');

  });
});
