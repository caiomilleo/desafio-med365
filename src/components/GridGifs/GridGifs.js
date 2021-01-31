import React from 'react';
import { CardGif } from '../CardGif/CardGif';
import { Container } from './styles';

export function GridGifs({ gifs }) {
  return (
    <Container>
      {gifs &&
        gifs.length > 0 &&
        gifs.map((gif) => <CardGif gif={gif} key={gif.id} />)}
    </Container>
  );
}
