const SearchBar=({searchtext, onSearchChange})=>{
    return(
        <input 
            type="text"
            placeholder="Search commands..."
            value={searchtext}
            onChange={(e)=>onSearchChange(e.target.value)}
            style={
                {
                    padding:"8px",
                    width:"100%",
                    marginBottom:"20px",
                }
            }
        />
    );
};

export default SearchBar;