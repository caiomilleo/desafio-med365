import React, { useRef } from 'react';
import { searchGifs } from '../../services/api';
import { CardGif } from '../CardGif/CardGif';
import { Container } from './styles';

export function GridGifs({
  gifs,
  setGif,
  setGifs,
  searchValue,
  setGifsFavoritos,
  gifsFavoritos,
}) {
  const divRef = useRef();

  const search = async (searchText) => {
    try {
      const { data, pagination } = await searchGifs(
        searchText,
        gifs.pagination.count + 20
      );
      setGifs({ data, pagination });
    } catch (error) {}
  };

  const onScroll = () => {
    if (divRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        search(searchValue);
      }
    }
  };

  return (
    <Container onScroll={() => onScroll()} ref={divRef}>
      {gifs &&
        gifs.data &&
        gifs.data.length > 0 &&
        gifs.data.map((gif) => (
          <CardGif
            gif={gif}
            key={gif.id}
            setGif={setGif}
            gifsFavoritos={gifsFavoritos}
            setGifsFavoritos={setGifsFavoritos}
          />
        ))}
    </Container>
  );
}
