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
        <div className='settings'>
          <h3>Settings</h3>
          <h4>Patterns</h4>
          <input type='checkbox' /> Random
          <br /><input type='checkbox' /> 1
          <br /><input type='checkbox' /> 2
          <br /><input type='checkbox' /> 3
        </div>
      </div>
    </main>
  )
}
