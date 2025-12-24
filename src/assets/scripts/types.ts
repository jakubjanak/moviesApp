type Subtitles = {
  label: string,
  lang: string,
  src: string,
  default?: boolean
}

export type MovieData = {
    year: number,
    review: number,
    genre: string[],
    poster: string,
    length: number,
    trailerUrl: string,
    url: string,
    description: string,
    directors: string[],
    actors: string[],
    subtitles?: Subtitles[]
}