import CommandCard from "./CommandCard";

const CommandList = ({ commands }) => {
    if (commands.length === 0) {
        return <p className="text-gray-500 mt-4">No commands available.</p>;
    }
    return (
        <div className="mt-4 space-y-4">
            {commands.map((cmd) => (
                <CommandCard key={cmd.id} command={cmd} />
            ))}
        </div>

    );
};

export default CommandList;