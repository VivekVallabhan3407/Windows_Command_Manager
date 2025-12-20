function CommandCard({ command }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-mono text-lg font-bold text-blue-600">
        {command.command}
      </h3>

      <p className="text-gray-700 mt-2">
        {command.description}
      </p>
    </div>
  );
}

export default CommandCard;
