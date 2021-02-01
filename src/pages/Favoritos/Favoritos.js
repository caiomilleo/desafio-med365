import { CardGif } from '../../components/CardGif/CardGif';
import { Container } from './styles';

function Favoritos({ gifsFavoritos, setGifsFavoritos, setGif }) {
  return (
    <Container>
      {gifsFavoritos &&
        gifsFavoritos.length > 0 &&
        gifsFavoritos.map((gif) => (
          <CardGif
            gif={gif}
            key={gif.id}
            favorite={true}
            setGif={setGif}
            setGifsFavoritos={setGifsFavoritos}
          />
        ))}
    </Container>
  );
}

export default Favoritos;
