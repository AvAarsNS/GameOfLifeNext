import { gameOfLifeAPIJSON } from '../../test/doubles/grid.double';

describe('Time to play the game of life', () => {
  it('is able to play the first tick of a new game with a glider', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy-radiobutton-pattern=Glider]').click();

    // Intercept the network request when the start button is clicked. Some kind of mocking :)
    cy.intercept('POST', '/newgame*', {
      statusCode: 200,
      body: gameOfLifeAPIJSON
    });

    cy.get('[data-cy-start-button]').click();

    cy.get(`[data-cy-gridcoordinate="(0,0)"]`).should('have.class', 'alive');
  });
});
