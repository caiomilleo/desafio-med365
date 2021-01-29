import { useState } from 'react';
import { GridGifs } from '../../components/GridGifs/GridGifs';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';

function ListaGifs() {
  const [gifs, setGifs] = useState([]);

  return (
    <>
      <SearchComponent setGifs={setGifs} />
      <GridGifs gifs={gifs} />
    </>
  );
}

export default ListaGifs;
