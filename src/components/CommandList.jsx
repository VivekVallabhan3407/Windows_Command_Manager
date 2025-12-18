const CommandList=({commands})=>{
    return(
        <div>
            {
                commands.map((cmd)=>(
                    <div key={cmd.id} style={{marginBottom:"20px"}}>
                        <h3>{cmd.name}</h3>
                        <p>{cmd.description}</p>
                        <small>
                            <b>Category:</b>{cmd.category}
                        </small>
                        <pre>{cmd.example}</pre>
                    </div>
                ))}
        </div>

    );
};