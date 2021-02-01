import { GridGifs } from '../../components/GridGifs/GridGifs';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';
import { Container } from './styles';

function ListaGifs({
  gifs,
  setGifs,
  searchValue,
  setSearchValue,
  setGif,
  gifsFavoritos,
  setGifsFavoritos,
}) {
  return (
    <Container>
      <SearchComponent
        gifs={gifs}
        setGifs={setGifs}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <GridGifs
        gifs={gifs}
        setGifs={setGifs}
        setGif={setGif}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        gifsFavoritos={gifsFavoritos}
        setGifsFavoritos={setGifsFavoritos}
      />
    </Container>
  );
}

export default ListaGifs;
