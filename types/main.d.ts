export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
  photo?: Photo;
};

export type User = {
  name: string;
  website: string;
  email: string;
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
