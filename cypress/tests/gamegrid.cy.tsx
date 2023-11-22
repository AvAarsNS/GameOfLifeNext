import GameGrid from "@/app/components/gamegrid"
import { gliderGrid } from "../../test/doubles/grid.double"
import React from "react"
 
describe('<GameGrid />', () => {
  it('should render grid with glider correctly', () => {
    // Mount the GameGrid component with the provided gliderGrid
    cy.mount(<GameGrid grid={gliderGrid} />);

    // Get all grid cells as a single group
    cy.get('[data-cy-gridcoordinate]').each(($cell) => {
      // Convert the jQuery object to a native DOM element
      const cellElement = $cell[0];

      // Extract row and column indices from the cell's data attribute
      const [rowIndex, columnIndex] = cellElement.dataset.cyGridcoordinate.replace(/[()]/g, '').split(',').map(Number);

      // Determine the expected class based on the cell value in gliderGrid
      const expectedClass = gliderGrid[rowIndex][columnIndex] === 1 ? 'bg-black' : 'bg-gray-100';

      // Assert that the cell has the expected class
      cy.wrap(cellElement).should('have.class', expectedClass);
    });
  });
});






