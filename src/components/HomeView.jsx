const HomeView = ({ setActiveView }) => {
  return (
    <div>
      <h1>Windows Command Manager</h1>

      <p style={{ marginTop: "10px", maxWidth: "600px" }}>
        A simple reference and practice tool for common Windows commands.
        Quickly search, learn usage, and prepare for interviews and internships.
      </p>

      <button
        onClick={() => setActiveView("reference")}
        style={{ marginTop: "20px" }}
      >
        Start Exploring Commands
      </button>
    </div>
  );
};

export default HomeView;
