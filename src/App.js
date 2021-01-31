import { useState } from 'react';
import ListaGifs from './pages/ListaGifs/ListaGifs';
import Gif from './pages/Gif/Gif';

function App() {
  const [gif, setGif] = useState({});

  return (
    <div>
      {!Object.keys(gif).length > 0 && <ListaGifs setGif={setGif} />}
      {Object.keys(gif).length > 0 && <Gif gif={gif} />}
    </div>
  );
}

export default App;
