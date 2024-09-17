"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="bg-white border-2 border-black w-full rounded-md p-3 flex items-center justify-between">
      <input
        type={`text`}
        name={`search`}
        id={`search`}
        className="w-full outline-none text-black"
        placeholder={`Search albums...`}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <FontAwesomeIcon icon={faSearch} className="text-black w-8" />
    </div>
  );
};

export default SearchBar;
