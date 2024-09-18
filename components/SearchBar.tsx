"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder }: SearchBarProps) => {
  return (
    <div className="bg-white w-full rounded-lg shadow-lg p-3 flex items-center justify-between">
      <input
        type={`text`}
        name={`search`}
        id={`search`}
        className="w-full outline-none text-black"
        placeholder={placeholder ? placeholder : `Search albums...`}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <FontAwesomeIcon icon={faSearch} className="text-black w-8" />
    </div>
  );
};

export default SearchBar;
