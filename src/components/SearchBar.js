import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div style={{
      position: "relative",
      width: "100%",
      marginBottom: "20px",
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        padding: "8px 16px",
        transition: "all 0.3s ease",
        border: "1px solid #e0e0e0",
      }}>
        <FaSearch style={{
          color: "#666",
          marginRight: "10px",
          fontSize: "18px"
        }} />
        <input
          type="text"
          placeholder="Cari produk..."
          value={query}
          onChange={handleChange}
          style={{
            flex: 1,
            border: "none",
            background: "none",
            padding: "10px 0",
            fontSize: "16px",
            outline: "none",
            color: "#333",
          }}
        />
        {query && (
          <FaTimes
            onClick={handleClear}
            style={{
              color: "#666",
              cursor: "pointer",
              fontSize: "16px",
              padding: "5px",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) => e.target.style.color = "#ff4444"}
            onMouseOut={(e) => e.target.style.color = "#666"}
          />
        )}
      </div>
    </div>
  );
}

export default SearchBar;
