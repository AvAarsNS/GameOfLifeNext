import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className='title'>
        <h1>The game of life</h1>
        <h2>FVT version</h2>
      </div>
      <div>
        <div></div>
        <div className='settings flex flex-col items-center justify-between'>
          <h3>Settings</h3>
          <h4>Patterns</h4>
          <div className="patterns">
            <label><input type="checkbox" /> Random</label>
            <br />
            <label><input type="checkbox" /> 1</label>
            <br />
            <label><input type="checkbox" /> 2</label>
            <br />
            <label><input type="checkbox" /> 3</label>
          </div>
        </div>
      </div>
    </main>
  )
}
