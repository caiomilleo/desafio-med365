import React from 'react';
import { Container } from './styles';
export function CardGif({ gif }) {
  return (
    <Container>
      <img src={gif.images.fixed_height_small.url} />
    </Container>
  );
}
