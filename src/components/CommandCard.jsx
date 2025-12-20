const CommandCard = ({ command }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{command.command}</h3>
      <p className="text-gray-700 mt-1">{command.description}</p>

      <p className="text-sm mt-2">
        <b>Category:</b> {command.category}
      </p>

      <pre className="bg-gray-100 p-2 rounded mt-2 text-sm overflow-x-auto">
        {command.example}
      </pre>
    </div>
  );
};

export default CommandCard;
