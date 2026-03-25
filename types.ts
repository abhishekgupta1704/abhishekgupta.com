
export interface Award {
  title: string;
  festival: string;
  year?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Shorts' | 'Series' | 'Features';
  year?: string;
  format?: string;
  credit?: string;
  episodes?: string;
  synopsis: string;
  awards?: Award[];
  trailerUrl?: string;
  posterUrl?: string;
  platforms?: string[];
  imdbUrl?: string;
  placeholderLabel?: string;
}

export interface FilmographyCredit {
  title: string;
  year: string;
  format: string;
  credit: string;
  episodes?: string;
  status?: string;
  note?: string;
}

export interface FilmographyGroup {
  eyebrow: string;
  title: string;
  credits: FilmographyCredit[];
}
