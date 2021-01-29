import axios from 'axios';

const API_URL = 'http://api.giphy.com/v1/gifs/';
const API_KEY = 'WrXHPgZaxBNKjBsk588AfIGVWwnJ4xSn';

export const searchGifs = async (search, limit) => {
  const { data } = await axios.get(`${API_URL}search`, {
    params: {
      q: search,
      limit,
      api_key: API_KEY,
    },
  });

  return data;
};
