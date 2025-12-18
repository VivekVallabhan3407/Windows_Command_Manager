import { useState } from 'react'
import commands from './data/commands.json'
import CommandList from './components/CommandList.jsx'
import SearchBar from './components/SearchBar.jsx'

function App() {
  const [searchText,setSearchText]=useState("");

  const filteredCommands=commands.filter((cmd)=>{
    return cmd.command.toLowerCase().includes(searchText.toLowerCase());
  })
  return (
    <>
      <div>
        <h1>Welcome to Windows Command Manager</h1>
        <SearchBar searchText={searchText} onSearchChange={setSearchText}/> 
        <CommandList commands={filteredCommands} />
      </div>
    </>
  )
}

export default App
