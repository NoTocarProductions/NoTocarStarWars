import { Link } from 'react-router-dom';
import classes from './FilmsList.module.css';
import {filmLoader} from '../util/filmLoader';

function FilmsList({ films }) {

  const filmImages = filmLoader();

  return (
    <div className={classes.events}>
      <h1 className={classes.listTitle}>FILMS</h1>
      <ul className={classes.list}>
        {films.map((film, index) => (
          <li key={index} className={classes.item}>
            <Link to={`/films/${film.episode_id}`}>
              <div className={classes.content}>
                <h2>{film.title}</h2>
                <img src={filmImages[film.episode_id - 1]} alt={film.name} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsList;
