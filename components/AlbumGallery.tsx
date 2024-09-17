import React from "react";
import ContentWrap from "./ContentWrap";
import Image from "next/image";
import { Album, Photo } from "@/types/main";

interface AlbumGalleryProps {
  albums: Album[];
}

const AlbumGallery = ({ albums }: AlbumGalleryProps) => {
  return (
    <ContentWrap className="grid grid-cols-6 gap-6">
      {albums.map((album) => (
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
    </ContentWrap>
  );
};

export default AlbumGallery;
