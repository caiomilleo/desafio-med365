import { Container } from './styles';

function Gif({ gif }) {
  return (
    <Container>
      <img src={gif.images.fixed_height_small.url} />
    </Container>
  );
}

export default Gif;
