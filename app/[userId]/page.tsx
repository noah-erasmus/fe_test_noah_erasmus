import AlbumGallery from "@/components/AlbumGallery";
import ContentWrap from "@/components/ContentWrap";
import UserDetails from "@/components/UserDetails";
import { Album, Photo, User } from "@/types/main";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

interface DetailsPageProps {
  params: { userId: string };
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  // Extract the userId from the dynamic route
  const { userId } = params;

  // Statically fetch user details using the dynamic userId
  const [userRes, userAlbumsRes, photosRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`),
    fetch(`https://jsonplaceholder.typicode.com/photos`),
  ]);

  if (!userRes.ok || !userAlbumsRes.ok || !photosRes.ok) {
    throw new Error("Failed to fetch info");
  }

  const user: User = await userRes.json();
  const userAlbums: Album[] = await userAlbumsRes.json();
  const photos: Photo[] = await photosRes.json();

  const albumsWithPhotos = userAlbums.map((album) => {
    // Get photos for the current album
    const albumPhotos = photos.filter((photo) => photo.albumId === album.id);

    // Spread album and add the first photo as a property
    return {
      ...album,
      photo: albumPhotos.length > 0 ? albumPhotos[0] : undefined,
    };
  });

  return (
    <div className="bg-off-white min-h-screen">
      <ContentWrap className="py-12">
        <div className="flex items-center mb-4">
          {/* Back button */}
          <Link
            href={"/"}
            className="w-14 h-14 p-3 flex items-center justify-center rounded-full hover:shadow-lg transition-all cursor-pointer bg-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className=" text-black" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <UserDetails {...user} />

          <AlbumGallery
            albums={albumsWithPhotos}
            searchPlaceholder={`Search ${user.name}'s albums...`}
          />
        </div>
      </ContentWrap>
    </div>
  );
};

export default DetailsPage;
