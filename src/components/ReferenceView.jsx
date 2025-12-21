import commands from "../data/commands.json";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CommandList from "../components/CommandList";

const ReferenceView = () => {
  const [searchText, setSearchText] = useState("");

  const filteredCommands = commands.filter((cmd) =>
    cmd.command.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Command Reference</h2>

      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      <CommandList commands={filteredCommands} />
    </div>
  );
};

export default ReferenceView;
