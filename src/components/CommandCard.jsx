import { useState } from "react";
import React from "react";

const CommandCard = ({ command }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      {/* Command name */}
      <h3 className="text-xl font-semibold text-gray-800">
        {command.command}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-1">
        {command.description}
      </p>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-blue-600 text-sm font-medium hover:underline"
      >
        {expanded ? "Hide details ▲" : "Show details ▼"}
      </button>

      {/* Expandable content */}
      {expanded && (
        <div className="mt-4">
          <p className="text-sm mb-2">
            <span className="font-semibold">Category:</span>{" "}
            {command.category}
          </p>

          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {command.example}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CommandCard;
