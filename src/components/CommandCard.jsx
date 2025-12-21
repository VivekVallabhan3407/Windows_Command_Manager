const CommandCard = ({ command }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      
      {/* Command name */}
      <h3 className="text-xl font-semibold text-blue-600">
        {command.command}
      </h3>

      {/* Description */}
      <p className="text-gray-700 mt-2">
        {command.description}
      </p>

      {/* Category */}
      <p className="text-sm mt-3 text-gray-500">
        <span className="font-medium text-gray-700">Category:</span>{" "}
        {command.category}
      </p>

      {/* Example */}
      <pre className="mt-4 bg-gray-100 text-sm p-3 rounded-lg overflow-x-auto">
        <code>{command.example}</code>
      </pre>
    </div>
  );
};

export default CommandCard;
