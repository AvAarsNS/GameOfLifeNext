import React from 'react';

const GameGrid = ({ grid }: { grid: number[][] }) => (
  <div className="grid grid-cols-20 gap-0.5"> {/* Ensure this div has the correct grid class */}
    {grid.map((row, rowIndex) => 
      row.map((cell, colIndex) => (
        <div
          key={`${rowIndex}-${colIndex}`}
          className={`w-6 h-6 ${cell ? 'bg-black' : 'bg-gray-100'} border border-gray-200`}
        />
      ))
    )}
  </div>
);

export default GameGrid;
