import { CardGif } from '../../components/CardGif/CardGif';

function Gif({ gif, setGif, setGifsFavoritos, gifsFavoritos }) {
  return (
    <CardGif
      gif={gif}
      setGif={setGif}
      setGifsFavoritos={setGifsFavoritos}
      gifsFavoritos={gifsFavoritos}
    />
  );
}

export default Gif;
