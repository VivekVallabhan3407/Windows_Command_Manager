const Sidebar = ({ activeView, setActiveView }) => {
  return (
    <div style={{ width: "220px", padding: "20px", borderRight: "1px solid #ddd" }}>
      <h3>Menu</h3>

      <button
        onClick={() => setActiveView("home")}
        style={{
          display: "block",
          marginTop: "10px",
          fontWeight: activeView === "home" ? "bold" : "normal",
        }}
      >
        Home
      </button>

      <button
        onClick={() => setActiveView("reference")}
        style={{
          display: "block",
          marginTop: "10px",
          fontWeight: activeView === "reference" ? "bold" : "normal",
        }}
      >
        Command Reference
      </button>

      {/* Practice can be added later */}
    </div>
  );
};

export default Sidebar;
