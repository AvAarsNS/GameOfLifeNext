import { gameOfLifeAPIJSON } from '../../test/doubles/grid.double';



describe('Time to play the game of life', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy-radiobutton-pattern=Glider]').click();
    cy.get('[data-cy-start-button]').click();
  });

  it('When we start a new game with a glider, we should see a b-e-a-utiful little glider in the top left corner of our universe', () => {

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
  it('By pressing the next tick button we should get the next state of the universe', () => {
    cy.get('[data-cy-nexttick-button]').click();
    // TODO: maybe this is not correct.... 
    cy.get(`[data-cy-gridcoordinate="(0,0)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(0,1)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(0,2)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(1,0)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(1,1)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(1,2)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(2,0)"]`).should('have.class', 'dead');
    cy.get(`[data-cy-gridcoordinate="(2,1)"]`).should('have.class', 'alive');
    cy.get(`[data-cy-gridcoordinate="(2,2)"]`).should('have.class', 'alive');
  });
});