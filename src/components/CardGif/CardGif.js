import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    flex: '1 0 30%',
    textAlign: 'center',
    border: '1px solid black',
    margin: '1%',
    alignItems: 'stretch',
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

export function CardGif({
  gif,
  setGif,
  gifsFavoritos,
  setGifsFavoritos,
  favorite,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleFavoritarGif = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setGifsFavoritos((prev) => [...prev, gif]);
  };

  const handleRemoverFavoritoGif = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push('/');
    setGifsFavoritos((prev) => prev.filter((item) => item.id !== gif.id));
  };

  const handleGifDetalhes = () => {
    setGif(gif);
    history.push('/gif');
  };

  const isFavorite = () => {
    if (gifsFavoritos && gifsFavoritos.length > 0) {
      return gifsFavoritos.some((fav) => fav.id === gif.id);
    }
  };

  return (
    <Card className={classes.root} onClick={() => handleGifDetalhes()}>
      <CardMedia
        className={classes.media}
        image={gif.images.fixed_height_small.url}
        title={gif.title}
      />
      <CardActions disableSpacing>
        <IconButton
          aria-label='add to favorites'
          onClick={(e) =>
            !favorite ? handleFavoritarGif(e) : handleRemoverFavoritoGif(e)
          }
        >
          {!favorite && (
            <FavoriteIcon style={{ fill: isFavorite() && 'red' }} />
          )}
          {favorite && <DeleteIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
