import GameGrid from "@/app/components/gamegrid"
import { gliderGrid } from "../../test/doubles/grid.double"
import React from "react"
 
describe('<GameGrid />', () => {
  it('should be able to render a grid with a glider', () => {
    // Start measuring time
    const startTime = new Date().getTime();

    // Mount the React component for the About page
    
    cy.mount(<GameGrid grid={gliderGrid} />)
      .then(() => {
        
        // Measure time after mounting
        const mountTime = new Date().getTime() - startTime;
        cy.log(`Mounting took ${mountTime} milliseconds`);

        // check for each cell whether it has the right class
        for (let i = 0; i < gliderGrid.length; i++) {
          for (let j = 0; j < gliderGrid[i].length; j++) {
            const cellStartTime = new Date().getTime();

            if (gliderGrid[i][j] === 1) {
              cy.get(`[data-cy-gridcoordinate="(${i},${j})"]`)
                .should('have.class', 'bg-black')
                .should('have.class', 'w-6')
                .should('have.class', 'h-6');
            } else {
              cy.get(`[data-cy-gridcoordinate="(${i},${j})"]`)
                .should('have.class', 'bg-gray-100')
                .should('have.class', 'w-6')
                .should('have.class', 'h-6');
            }

            // Measure time for each cell
            const cellExecutionTime = new Date().getTime() - cellStartTime;
            cy.log(`Checking cell (${i},${j}) took ${cellExecutionTime} milliseconds`);
          }
        } 
      }) 
      .then(() => {
        // Measure total test time
        const totalTime = new Date().getTime() - startTime;
        cy.log(`Total test execution time: ${totalTime} milliseconds`);
      });
  });
});


