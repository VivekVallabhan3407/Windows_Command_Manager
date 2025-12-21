import { useState } from "react";
import commands from "../data/commands.json";
import SearchBar from "../components/SearchBar";
import CommandList from "../components/CommandList";

const ReferenceView = () => {
  const [searchText, setSearchText] = useState("");

  const filteredCommands = commands.filter((cmd) =>
    cmd.command.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Command Reference
      </h1>

      <p className="text-gray-600 mb-6">
        Browse and search commonly used Windows commands with examples.
      </p>

      {/* Search */}
      <div className="max-w-xl mb-6">
        <SearchBar
          searchText={searchText}
          onSearchChange={setSearchText}
        />
      </div>

      {/* Command list */}
      <CommandList commands={filteredCommands} />
    </div>
  );
};

export default ReferenceView;
