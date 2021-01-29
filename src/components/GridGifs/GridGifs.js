import React from 'react';
import { CardGif } from '../CardGif/CardGif';

export function GridGifs({ gifs }) {
  return (
    <div>
      {gifs && gifs.length > 0 && gifs.map((gif) => <CardGif gif={gif} />)}
    </div>
  );
}
