import React from 'react';
import GameGrid from "../../src/app/components/gamegrid"

describe('GameGrid Component Optimization', () => {
  it('efficiently verifies grid rendering and cell properties', () => {
    // Testing with a smaller grid for efficiency
    const gridData = [
      [1, 0, 1],
      [0, 1, 0],
    ];

    cy.mount(<GameGrid grid={gridData} />);

    // Check grid structure
    cy.get('.grid').should('have.class', 'grid-cols-20');
    
    // Check a few cells instead of the entire grid
    // This reduces the number of DOM queries
    const testCells = [
      { rowIndex: 0, colIndex: 0, expectedBg: 'bg-black' },
      { rowIndex: 0, colIndex: 1, expectedBg: 'bg-gray-100' },
      { rowIndex: 1, colIndex: 1, expectedBg: 'bg-black' },
    ];

    testCells.forEach(({ rowIndex, colIndex, expectedBg }) => {
      cy.get(`[data-cy-gridcoordinate="(${rowIndex},${colIndex})"]`)
        .should('have.class', 'w-6')
        .should('have.class', 'h-6')
        .should('have.class', expectedBg);
    });
  });
});







