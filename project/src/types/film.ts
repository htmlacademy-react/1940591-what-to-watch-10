export type Film = {
  id: number;
  title: string;
  cover: string;
  poster: string;
  video: string;
  genre: string[];
  description: string;
  director: string;
  starring: string[];
  runTime: number;
  releaseDate: Date;
  rating: number;
  promo: boolean;
  reviews: number[];
};

export type Films = Film[];
