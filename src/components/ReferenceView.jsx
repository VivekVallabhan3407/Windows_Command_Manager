import { useState } from "react";
import commands from "../data/commands.json";
import SearchBar from "./SearchBar";
import CommandList from "./CommandList";

const ReferenceView = () => {
  const [searchText, setSearchText] = useState("");

  const filteredCommands = commands.filter((cmd) =>
    cmd.command.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <SearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
      />
      <CommandList commands={filteredCommands} />
    </div>
  );
};

export default ReferenceView;
