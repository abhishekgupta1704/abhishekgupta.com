
import { FilmographyGroup, Project } from './types';

export const BIO = `Abhishek Gupta is a filmmaker from India driven by a quiet obsession with turning lived emotion into moving images. Self-taught and shaped on real sets rather than classrooms, he learned his craft by working alongside some of India’s leading filmmakers and contributing to projects for platforms like Netflix and Amazon. Alongside series work, his short films have travelled across local and international festivals, building a portfolio rooted in story, atmosphere, and human nuance. Now based in Europe through the Erasmus Mundus Master’s programme, he continues to collaborate across cultures, exploring cinema as both craft and inner landscape.`;

export const PROJECTS: Project[] = [
  {
    id: 'sacred-games',
    title: 'SACRED GAMES',
    category: 'Series',
    year: '2018-2019',
    format: 'TV Series',
    credit: 'Assistant Editor',
    episodes: '16 episodes',
    synopsis: 'A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.',
    posterUrl: '/film-posters/2018,SacredGames,WebSeries,Netflix.webp',
    trailerUrl: 'https://www.youtube.com/watch?v=AkUgf2jIPyI',
    platforms: ['Netflix'],
    awards: [
      { title: 'Official Selection', festival: 'International Emmy Awards', year: '2019' }
    ]
  },
  {
    id: 'first-act',
    title: 'FIRST ACT',
    category: 'Series',
    year: '2023-2024',
    format: 'Docu-Series',
    credit: 'Editor',
    episodes: '2 episodes',
    synopsis: 'A searing look at the dark, twisted and painful world of child actors.',
    posterUrl: '/film-posters/2024,FirstAct,DocumentarySeries,AmazonPrime.webp',
    trailerUrl: 'https://www.youtube.com/watch?v=RZn9ReXYOD4',
    platforms: ['Amazon Prime'],
    awards: [
      { title: 'BAFTA Breakthrough', festival: 'BAFTA', year: '2024' }
    ]
  },
  {
    id: 'bena',
    title: 'BENA',
    category: 'Shorts',
    year: '2022',
    format: 'Short',
    credit: 'Editor',
    synopsis: 'After a supposed jewelry theft, Bena the house-help is asked to leave. But when the house-driver informs the jewelry has been found, Bena is not surprised. If Bena did not steal, then what was found in the bag?',
    posterUrl: '/film-posters/2021,Bena,ShortFilm.webp',
    awards: [
      { title: 'Winner: Best Director', festival: 'Berlin Indie Film Festival', year: '2021' },
      { title: 'Official Selection', festival: 'Shades International Short Film Festival' },
      { title: 'Official Selection', festival: 'California Women’s Film Festival' },
      { title: 'Official Selection', festival: 'Shorted' }
    ]
  },
  {
    id: 'keep-punching',
    title: 'KEEP PUNCHING',
    category: 'Shorts',
    year: '2020',
    format: 'Short',
    credit: 'Edited By',
    synopsis: 'Prior to fighting for her country, Kirnay, a withdrawn boxer must fight the battle for her freedom.',
    posterUrl: '/film-posters/2022,KeepPunching,ShortFIlm.webp',
    trailerUrl: 'https://www.youtube.com/watch?v=jhY2THKMSnU',
    awards: [
      { title: 'Winner', festival: 'Dallas Fort Worth South Asian Film Festival' },
      { title: 'Semi Finalist', festival: 'Flickers Rhode Island International Film Festival' },
      { title: 'Official Selection', festival: 'New York Indian Film Festival', year: '2022' },
      { title: 'Official Selection', festival: 'Melbourne Queer Film Festival', year: '2021' }
    ]
  },
  {
    id: 'two-sinners',
    title: 'TWO SINNERS',
    category: 'Shorts',
    year: '2024',
    format: 'Short',
    credit: 'Editor',
    synopsis: 'A revenge drama set in the dense foliage of an Indian forest, focusing on Azhar - whose elder brother orchestrates a sinister scheme compelling him to execute the bound and gagged perpetrator responsible for their sister\'s assault.',
    posterUrl: '/film-posters/2024,TwoSinners,ShortFilm.webp',
    awards: [
      { title: 'Official Selection', festival: 'Yellowstone International Film Festival', year: '2025' },
      { title: 'Official Selection', festival: 'Aesthetica Short Film Festival', year: '2025' },
      { title: 'Official Selection', festival: 'New York Indian Film Festival', year: '2025' },
      { title: 'Official Selection', festival: 'Chicago South Asian Film Festival', year: '2025' },
      { title: 'Official Selection', festival: 'Indian Film Festival of Melbourne', year: '2025' }
    ]
  },
  {
    id: 'umbral',
    title: 'UMBRAL',
    category: 'Shorts',
    year: '2025',
    format: 'Short',
    credit: 'Editor',
    synopsis: 'A family is evicted from the home they have lived in for almost 20 years. Teenage Sara experiences the change as her parents fight during the moving process.',
    posterUrl: '/film-posters/2025,Umbral,ShortFilm.webp',
    awards: [
      { title: 'Official Selection', festival: 'Caminhos do Cinema Português Festival', year: '2025' },
      { title: 'Official Selection', festival: 'Golden Grape International Short Film Festival', year: '2025' },
      { title: 'Official Selection', festival: 'Moinho Cine Fest', year: '2025' }
    ]
  },
  {
    id: 'saara',
    title: 'SAARA',
    category: 'Shorts',
    year: '2026',
    format: 'Short',
    credit: 'In Production',
    synopsis: 'A coming-of-age story set in Estonia, following a young woman\'s journey of self-discovery and cultural identity in the Nordic landscape.',
    posterUrl: '/film-posters/2026,Saara,ShortFilm,Estonia.webp',
    awards: [
      { title: 'In Production', festival: 'BFM, Tallinn University', year: '2026' }
    ]
  }
];

export const FILMOGRAPHY: FilmographyGroup[] = [
  {
    eyebrow: 'Television',
    title: 'Series & Episodic',
    credits: [
      { title: 'Yuva Sapno Ka Safar', year: '2025', format: 'TV Series', credit: 'Editor', status: 'Released' },
      { title: 'First Act', year: '2023-2024', format: 'TV Series', credit: 'Editor', episodes: '2 episodes', note: 'Includes "Papa Kehte Hain"' },
      { title: 'Love Storiyaan', year: '2024', format: 'TV Series', credit: 'Associate Editor', episodes: '1 episode', status: 'Released' },
      { title: 'Jubilee', year: '2023', format: 'TV Series', credit: 'Additional First Assistant Editor', episodes: '10 episodes', status: 'Released' },
      { title: 'Sacred Games', year: '2018-2019', format: 'TV Series', credit: 'Assistant Editor', episodes: '16 episodes', status: 'Released' }
    ]
  },
  {
    eyebrow: 'Film & Video',
    title: 'Feature Films and Shorts',
    credits: [
      { title: 'Umbral', year: '2025', format: 'Short', credit: 'Editor', status: 'Released' },
      { title: 'Two Sinners', year: '2024', format: 'Short', credit: 'Editor', status: 'Released' },
      { title: 'Pune Highway', year: '2024', format: 'Feature Film', credit: 'Editor', status: 'Released' },
      { title: 'Indi(r)a\'s Emergency', year: '2023', format: 'Feature Film', credit: 'Associate Editor', status: 'Released' },
      { title: 'Hum Dono', year: '2022', format: 'Short', credit: 'Editor', status: 'Released' },
      { title: 'Bena', year: '2022', format: 'Short', credit: 'Editor', status: 'Released' },
      { title: '2024', year: '2021', format: 'Short', credit: 'Editor', status: 'Released' },
      { title: 'Keep Punching', year: '2020', format: 'Short', credit: 'Edited By', status: 'Released' },
      { title: 'AK vs AK', year: '2020', format: 'Feature Film', credit: 'Associate Editor', status: 'Released' },
      { title: 'Choked', year: '2020', format: 'Feature Film', credit: 'Assistant Editor', status: 'Released' },
      { title: 'Barot House', year: '2019', format: 'Feature Film', credit: 'Editor', status: 'Released' },
      { title: 'Gurgaon', year: '2017', format: 'Feature Film', credit: 'Additional Editor', note: 'Boys Of Gudgaawaan - Ayyash Chore', status: 'Released' },
      { title: 'Hanuman Da\' Damdaar', year: '2017', format: 'Feature Film', credit: 'Editor: R.A.T Films', status: 'Released' }
    ]
  },
  {
    eyebrow: 'In Production',
    title: 'Current Work',
    credits: [
      { title: 'Seeking Jannat', year: 'TBA', format: 'Feature Film', credit: 'Co-Editor', status: 'Filming' },
      { title: 'Saara', year: '2026', format: 'Short', credit: 'Editor', status: 'In Production' }
    ]
  }
];
