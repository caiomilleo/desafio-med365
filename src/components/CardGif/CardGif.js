import React from 'react';

export function CardGif({ gif }) {
  return (
    <div>
      <img src={gif.images.fixed_height_small.url} />
    </div>
  );
}
