import { useState } from 'react';
import ListaGifs from './pages/ListaGifs/ListaGifs';
import Gif from './pages/Gif/Gif';

function App() {
  const [gif, setGif] = useState({});
  const [gifs, setGifs] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      {!Object.keys(gif).length > 0 && (
        <ListaGifs
          gifs={gifs}
          setGifs={setGifs}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setGif={setGif}
        />
      )}
      {Object.keys(gif).length > 0 && <Gif gif={gif} />}
    </div>
  );
}

export default App;
