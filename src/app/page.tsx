import GameGrid from './components/gamegrid'
import { gliderGrid } from '../../test/doubles/grid.double';
import GameConfig from './components/gameconfig';

const createInitialGrid = (size: number) =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => Math.round(Math.random())));

export default function Home() {
  const grid = gliderGrid;

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
          <h4>Patterns</h4>
          <div className="patterns">
            <label><input type="checkbox" /> Random</label>
            <label><input type="checkbox" /> 1</label>
            <label><input type="checkbox" /> 2</label>
            <label><input type="checkbox" /> 3</label>
          </div>
        </div>
        <GameConfig />
      </div>
    </main>
  )
}
