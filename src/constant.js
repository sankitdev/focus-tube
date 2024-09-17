export const API = import.meta.env.VITE_API_KEY;
export const URL_POPULAR = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=In`;
export const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=`;
export const SEARCH_AUTOCOMPLETE =
  "https://suggestqueries.google.com/complete/search?client=firefox&q=";
