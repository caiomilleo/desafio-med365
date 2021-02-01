import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ListaGifs from './pages/ListaGifs/ListaGifs';
import Gif from './pages/Gif/Gif';
import Favoritos from './pages/Favoritos/Favoritos';

function App() {
  const [gif, setGif] = useState({});
  const [gifs, setGifs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [gifsFavoritos, setGifsFavoritos] = useState([]);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={['/', '/lista']}>
            <ListaGifs
              gifs={gifs}
              setGifs={setGifs}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setGif={setGif}
              gifsFavoritos={gifsFavoritos}
              setGifsFavoritos={setGifsFavoritos}
            />
          </Route>
          <Route exact path='/gif'>
            <Gif gif={gif} />
          </Route>
          <Route exact path='/favoritos'>
            <Favoritos
              gifsFavoritos={gifsFavoritos}
              setGifsFavoritos={setGifsFavoritos}
              setGif={setGif}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
