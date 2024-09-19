"use client";

import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, placeholder }: SearchBarProps) => {
  const [searchString, setSearchString] = useState("");

  const handleChange = (search: string) => {
    onChange(search);
    setSearchString(search);
  };

  return (
    <div className="bg-white w-full rounded-lg shadow-lg p-3 flex items-center justify-between">
      <input
        type={`text`}
        name={`search`}
        id={`search`}
        className="w-full outline-none text-black"
        placeholder={placeholder ? placeholder : `Search albums...`}
        onChange={(e) => handleChange(e.target.value)}
        value={searchString}
      />
      {searchString.length > 0 ? (
        <FontAwesomeIcon
          onClick={() => handleChange("")}
          icon={faXmark}
          className="text-black w-8 cursor-pointer"
        />
      ) : (
        <FontAwesomeIcon icon={faSearch} className="text-black w-8" />
      )}
    </div>
  );
};

export default SearchBar;
