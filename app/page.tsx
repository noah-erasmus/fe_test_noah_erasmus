import AlbumGallery from "@/components/AlbumGallery";
import ContentWrap from "@/components/ContentWrap";
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
        <h2 className="text-black text-4xl font-bold mb-4">Album Gallery</h2>
        <AlbumGallery albums={albumsWithPhotos} />
      </ContentWrap>
    </div>
  );
}
