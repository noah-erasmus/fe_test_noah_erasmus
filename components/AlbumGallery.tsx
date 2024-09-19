"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Album } from "@/types/main";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Fuse from "fuse.js";
import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

interface AlbumGalleryProps {
  albums: Album[];
  searchPlaceholder?: string;
}

const fuseOptions = {
  keys: ["title"],
  // Lower threshold means more accurate matching
  threshold: 0.3,
};

const AlbumGallery = ({ albums, searchPlaceholder }: AlbumGalleryProps) => {
  const [showLoremPicsum, setShowLoremPicsum] = useState(false);
  const [searchString, setSearchString] = useState("");

  // Initialize Fuse.js
  const fuse = new Fuse(albums, fuseOptions);

  // Perform fuzzy search if searchString exists, otherwise show all albums
  const filteredAlbums = searchString
    ? fuse.search(searchString).map((result) => result.item) // Get the items from Fuse.js results
    : albums;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-black text-2xl lg:text-4xl font-bold">
          Album Gallery
        </h2>

        <div className="flex items-center gap-2">
          <p className="text-black font-light text-xs lg:text-sm">
            Lorem Picsum
          </p>
          {/* Toggle Lorem Picsum Images */}
          <Toggle
            defaultChecked={showLoremPicsum}
            onChange={(e) => setShowLoremPicsum(e.target.checked)}
          />
        </div>
      </div>

      {/* Pass function to update search string to the search component */}
      <SearchBar
        onChange={(value) => setSearchString(value)}
        placeholder={searchPlaceholder}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-4">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <Link
              href={`/${album.userId}`}
              key={album.id}
              className="flex flex-col items-center rounded-md p-4 bg-white hover:shadow-lg hover:scale-[105%] transition-all"
            >
              <Image
                src={
                  showLoremPicsum || !album.photo?.thumbnailUrl
                    ? `https://picsum.photos/150/150?random=${album.id}`
                    : album.photo?.thumbnailUrl
                }
                alt="Album cover"
                width={150}
                height={150}
              />
              <h2 className="text-sm font-semibold text-black">
                {album.title}
              </h2>
            </Link>
          ))
        ) : (
          <div className="flex flex-col gap-4 h-64 justify-center items-center col-span-2 md:col-span-4 lg:col-span-7">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="h-24 text-gray-300"
            />
            <p className="text-gray-300 text-center">No albums found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumGallery;
