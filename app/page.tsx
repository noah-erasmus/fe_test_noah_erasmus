import AlbumGallery from "@/components/AlbumGallery";
import { Album, Photo } from "@/types/main";

export default async function Home() {
  const [albumsRes, photosRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/albums", { cache: "no-store" }),
    fetch("https://jsonplaceholder.typicode.com/photos", { cache: "no-store" }),
  ]);

  if (!albumsRes.ok || !photosRes.ok) {
    throw new Error("Failed to fetch albums or photos");
  }

  const albums: Album[] = await albumsRes.json();
  const photos: Photo[] = await photosRes.json();

  const albumsWithPhotos = albums.map((album) => {
    const albumPhotos = photos.filter((photo) => photo.albumId === album.id);

    return {
      ...album,
      photo: albumPhotos.length > 0 ? albumPhotos[0] : undefined,
    };
  });

  return (
    <div className="bg-white min-h-screen">
      <AlbumGallery albums={albumsWithPhotos} />
    </div>
  );
}
