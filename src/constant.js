const API = import.meta.env.VITE_API_KEY;
export const URL_POPULAR = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=In&key=${API}`;
