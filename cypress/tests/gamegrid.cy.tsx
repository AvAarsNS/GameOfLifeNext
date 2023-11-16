import GameGrid from "@/app/components/gamegrid"
import { gliderGrid } from "../../test/doubles/grid.double"
 
describe('<GameGrid />', () => {
  it('should be able to render a grid with a glider', () => {
    // Mount the React component for the About page
    
    cy.mount(<GameGrid grid={gliderGrid} />)
 
    // The new page should contain an h1 with "About page"
    cy.get('[data-cy-gridcoordinate="(0,0)"]')
      .should('have.class', 'w-6')
      .should('have.class', 'h-6')
      .should('have.class', 'bg-gray-100')
  })
})