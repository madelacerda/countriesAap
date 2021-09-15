import React from "react";
import "./styles.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="container-input-search">
      <input
        className="input-search"
        placeholder="Buscar País..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <span>&#128270;</span>
    </div>
  );
}
