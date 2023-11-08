import React from 'react';

const GameGrid = ({ grid }: { grid: number[][] }) => (
  <div className="grid grid-cols-20"> {/* Ensure this div has the correct grid class */}
    {grid.map((row, rowIndex) => 
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          data-cy-gridcoordinate={`(${rowIndex},${colIndex})`}
          className={`w-6 h-6 ${cell ? 'bg-black' : 'bg-gray-100'} border border-gray-400`}
        />
      ))
    )}
  </div>
);

export default GameGrid;
