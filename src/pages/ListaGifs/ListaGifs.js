import { useState } from 'react';
import { GridGifs } from '../../components/GridGifs/GridGifs';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';
import { Container } from './styles';

function ListaGifs() {
  const [gifs, setGifs] = useState([]);

  return (
    <Container>
      <SearchComponent setGifs={setGifs} />
      <GridGifs gifs={gifs} />
    </Container>
  );
}

export default ListaGifs;
