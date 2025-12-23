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
