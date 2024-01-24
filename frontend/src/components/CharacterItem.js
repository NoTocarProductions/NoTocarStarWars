import { useSelector } from 'react-redux';
import classes from './CharacterItem.module.css';
import { Link } from 'react-router-dom';
import {ImageLoader} from '../util/ImageLoader';
import {filmLoader} from '../util/filmLoader';

function CharacterItem({ character, filmIds, characterId }) {
  const allFilms = useSelector((state) => state.films.data);
  const images = ImageLoader();
  const films = filmLoader();
  return (
    <>
      <article className={classes.event}>
        <h1>{character.name}</h1>
        
        <img src={images[characterId] ? images[characterId] : images[37]} alt={character.name} />
        <h2>Appeared in:</h2>
        {/* Render film titles as Links */}
        
          {filmIds.map((filmId, index) => {
            const foundFilm = allFilms.find((film) => film.episode_id === parseInt(filmId));
            const correctId = foundFilm.episode_id >= 4 ? foundFilm.episode_id - 3 : foundFilm.episode_id + 3;
            return (
              <div key={index} >
                {foundFilm && (
                  <Link to={`/films/${correctId}`}>
                    <div className={classes.characterContainer}>
                    {/* <h1>{foundFilm.title}</h1> */}
                    <img className={classes.characterContainerImageImg}
                      src={films[correctId -1]}
                      alt={correctId}
                    />
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        
      </article>
    </>
  );
}

export default CharacterItem;
