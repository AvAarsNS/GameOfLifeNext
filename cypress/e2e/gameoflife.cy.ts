describe('Time to play the game of life', () => {
  it('is able to play the first tick of a new game with a glider', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy-radiobutton-pattern=Glider]').click()
    cy.get('[data-cy-start-button]').click()
    cy.wait(1000)
    cy.get('[data-cy-cell(0,0)]').should('have.class', 'alive')
  })
})