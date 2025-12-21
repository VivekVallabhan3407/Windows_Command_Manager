const HomeView = ({ setActiveView }) => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Windows Command Manager
      </h1>

      <p className="max-w-xl text-gray-600 text-lg mb-8">
        A simple reference and practice tool for common Windows commands.
        Quickly search, learn usage, and prepare for interviews.
      </p>

      <button
        onClick={() => setActiveView("reference")}
        className="
          px-6 py-3
          rounded-lg
          bg-blue-600
          text-white
          font-medium
          shadow-md
          hover:bg-blue-700
          hover:shadow-lg
          transition
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
        "
      >
        Start Exploring Commands
      </button>
    </div>
  );
};

export default HomeView;
