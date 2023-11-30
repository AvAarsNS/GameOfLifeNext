'use client';
import GameGrid from './components/gamegrid'
import { gliderGrid } from '../../test/doubles/grid.double';
import GameConfig from './components/gameconfig';

const createInitialGrid = (size: number) =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => 0));

export default function Home() {
  const grid = createInitialGrid(20);

  return (
    <main className="flex flex-col items-center justify-between">
      <div className='title'>
        <h1>The game of life</h1>
        <h2>FVT version</h2>
      </div>
      <div>
          <div className="flex justify-center items-center h-screen">
            <GameGrid grid={grid} />
          </div>
        <div className='settings flex flex-col items-center justify-between'>
          <h3>Settings</h3>
          <GameConfig />
        </div>
      </div>
    </main>
  )
}
