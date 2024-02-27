import Axios from 'axios';

export const imageBaseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';

export const axiosClient = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export function _getPhotoUrl(url) {
  if (url === null)
    return 'https://image.tmdb.org/t/p/w220_and_h330_face/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg';
  else return imageBaseUrl + '' + url;
}

export const _getAxiosHeaders = () => {
  const headers = {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDYyMGVlNDEwMDkyM2YyNDM1YTkzOTFmZDU1ODJjZCIsInN1YiI6IjY1ZGRjNzMyMmFjNDk5MDE3ZGNiN2NiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_VtK09if8ULcxz2ATTr0oZZ5dIlGYLkUCPk25Hn2PI',
  };
  return {
    headers,
  };
};

export const epGetLatestMovies =
  'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=primary_release_date.asc';
export const epGetPopularMovies =
  'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2024&sort_by=popularity.desc';
