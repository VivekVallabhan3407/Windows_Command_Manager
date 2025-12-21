const SearchBar = ({ searchtext, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search commands..."
            value={searchtext}
            onChange={(e) => onSearchChange(e.target.value)}
            className="
        w-full
        p-3
        border
        border-gray-300
        rounded-lg
        outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        text-gray-800
      "
        />
    );
};

export default SearchBar;