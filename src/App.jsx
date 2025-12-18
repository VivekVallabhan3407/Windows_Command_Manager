import { useState } from 'react'
import commands from './data/commands.json'
import CommandList from './components/CommandList.jsx'

function App() {

  return (
    <>
      <div>
        <h1>Welcome to Windows Command Manager</h1>
        <CommandList commands={commands} />
      </div>
    </>
  )
}

export default App
