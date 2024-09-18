"use client";

import React, { useState } from "react";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { Album } from "@/types/main";
import SearchBar from "./SearchBar";
import Link from "next/link";

interface AlbumGalleryProps {
  albums: Album[];
}

const AlbumGallery = ({ albums }: AlbumGalleryProps) => {
  const [searchString, setSearchString] = useState("");
  // Filter albums based on search string
  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <ContentWrap>
      {/* Pass function to update search string to the search component */}
      <SearchBar onChange={(value) => setSearchString(value)} />

      <div className="grid grid-cols-6 gap-6">
        {filteredAlbums.map((album) => (
          <Link
            href={`/${album.userId}/${album.id}`}
            key={album.id}
            className=""
          >
            <Image
              src={
                album.photo?.thumbnailUrl
                  ? album.photo.thumbnailUrl
                  : `https://picsum.photos/150/150?random=${album.id}`
              }
              alt="Album cover"
              width={150}
              height={150}
            />
            <h2 className="text-lg font-semibold text-black">{album.title}</h2>
          </Link>
        ))}
      </div>
    </ContentWrap>
  );
};

export default AlbumGallery;
