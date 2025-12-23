import { useState } from "react";
import React from "react";


const Sidebar = ({ activeView, setActiveView, selectedCategory, setSelectedCategory }) => {
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        {/* Text click = navigation */}
        <span
          onClick={() => setActiveView("reference")}
          style={{
            fontWeight: activeView === "reference" ? "bold" : "normal",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Command Reference
        </span>

        {/* Arrow click = expand / collapse */}
        <span
          onClick={() => setIsReferenceOpen(!isReferenceOpen)}
          style={{
            marginLeft: "8px",
            fontSize: "12px",
            transform: isReferenceOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            userSelect: "none",
          }}
        >
          ▶
        </span>
      </div>


      {/* Practice can be added later */}
      {isReferenceOpen && (
        <div
          style={{
            marginLeft: "16px",
            marginTop: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
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
                fontSize: "14px",
                cursor: "pointer",
                padding: "4px 6px",
                borderRadius: "4px",
                background:
                  selectedCategory === cat ? "#e5e7eb" : "transparent",
                fontWeight: selectedCategory === cat ? "600" : "400",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      )}


      <button
        onClick={() => setActiveView("practice")}
        style={{
          display: "block",
          marginTop: "10px",
          fontWeight: activeView === "practice" ? "bold" : "normal",
        }}
      >
        Practice
      </button>

    </div>
  );
};

export default Sidebar;
