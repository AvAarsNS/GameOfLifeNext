'use client';
import React, { useState } from 'react';
import GameGrid from './components/gamegrid';
import GameConfig from './components/gameconfig';

const createInitialGrid = (size: number) =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => 0));

export default function Home() {
  const [grid, setGrid] = useState(createInitialGrid(20));

  // Callback function to update the grid
  const updateGrid = (newGrid: number[][]) => {
    setGrid(newGrid);
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div className='title'>
        <h1>The game of life</h1>
        <h2>FVT version</h2>
      </div>
      <div className="flex w-full">
        <div className="w-5/6 flex justify-center items-center h-screen">
          <GameGrid grid={grid} />
        </div>
        <div className="w-1/6 flex flex-col items-center justify-between">
          <h3>Settings</h3>
          <GameConfig onGameStart={updateGrid} />
        </div>
      </div>
    </main>
  )
}
