"use client";

import React, { useState } from "react";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { Album } from "@/types/main";
import SearchBar from "./SearchBar";

interface AlbumGalleryProps {
  albums: Album[];
}

const AlbumGallery = ({ albums }: AlbumGalleryProps) => {
  const [searchString, setSearchString] = useState("");
  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <ContentWrap>
      <SearchBar onChange={(value) => setSearchString(value)} />
      <div className="grid grid-cols-6 gap-6">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="">
            <Image
              src={
                album.photo?.thumbnailUrl
                  ? album.photo.thumbnailUrl
                  : `https://picsum.photos/200/200?random=${album.id}`
              }
              alt="Album cover"
              width={150}
              height={150}
            />
            <h2 className="text-lg font-semibold text-black">{album.title}</h2>
          </div>
        ))}
      </div>
    </ContentWrap>
  );
};

export default AlbumGallery;
