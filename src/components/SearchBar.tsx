"use client";
import { Dispatch, SetStateAction } from "react";

export default function SearchBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm w-64 mx-2"
    />
  );
}
