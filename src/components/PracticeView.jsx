import { useState } from "react";
import commands from "../data/commands.json";

const PracticeView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCommand = commands[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    const randomIndex=Math.floor(Math.random()*commands.length);
   setCurrentIndex(randomIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Practice Commands
      </h1>

      <p className="text-gray-600 mb-6">
        Test your knowledge of Windows commands.
      </p>

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">
          What does this command do?
        </h2>

        <div className="text-lg font-mono bg-gray-100 p-3 rounded mb-4">
          {currentCommand.command}
        </div>

        {showAnswer && (
          <div className="mt-4">
            <p className="text-gray-700">
              <b>Description:</b> {currentCommand.description}
            </p>
            <p className="text-gray-700 mt-2">
              <b>Example:</b>
            </p>
            <pre className="bg-gray-100 p-3 rounded mt-1">
              {currentCommand.example}
            </pre>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowAnswer(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Show Answer
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeView;