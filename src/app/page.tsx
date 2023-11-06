import Image from 'next/image'
import GameGrid from './components/gamegrid'

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
        <div>
          <div className="flex justify-center items-center h-screen bg-gray-50">
            <GameGrid grid={grid} />
    </div>
        </div>
        <div className='settings flex flex-col items-center justify-between'>
          <h3>Settings</h3>
          <h4>Patterns</h4>
          <div className="patterns">
            <label><input type="checkbox" /> Random</label>
            <label><input type="checkbox" /> 1</label>
            <label><input type="checkbox" /> 2</label>
            <label><input type="checkbox" /> 3</label>
          </div>
        </div>
      </div>
    </main>
  )
}
