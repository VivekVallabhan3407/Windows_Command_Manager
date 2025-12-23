import { useState } from "react";
import React from "react";


const Sidebar = ({ activeView, setActiveView , selectedCategory, setSelectedCategory}) => {
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);

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
        onClick={() => { setActiveView("reference"); setIsReferenceOpen(!isReferenceOpen); }}
        style={{
          display: "block",
          marginTop: "10px",
          fontWeight: activeView === "reference" ? "bold" : "normal",
        }}
      >
        Command Reference
      </button>

      {/* Practice can be added later */}
      {isReferenceOpen && (
        <div style={{ marginLeft: "15px", marginTop: "8px" }}>
          {[
            "All",
            "File System",
            "Networking",
            "System / Process",
            "Disk & Storage",
          ].map((cat) => (
            <div
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "6px 0",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: selectedCategory === cat ? "bold" : "normal",
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Sidebar;
