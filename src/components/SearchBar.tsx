"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="px-4 py-2 border rounded-lg text-sm w-64"
    />
  );
}
