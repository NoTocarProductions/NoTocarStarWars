// FilmItem.js
import { useSelector } from "react-redux";
import classes from "./FilmItem.module.css";
import { Link } from "react-router-dom";
import {filmLoader} from "../util/filmLoader";
import {ImageLoader} from "../util/ImageLoader";

function FilmItem({ episode_id }) {
  const allFilms = useSelector((state) => state.films.data);
  const allCharacters = useSelector((state) => state.characters.data);
  // Find the film based on episode_id
  const foundFilm = allFilms.find((film) => film.episode_id === episode_id);
  console.log(foundFilm);
  console.log(episode_id);
  const filmImages = filmLoader();
  const images = ImageLoader();
  return (
    <>
      <article className={classes.event}>
        {foundFilm && (
          <>
            <h1>{foundFilm.title}</h1>
            <img src={filmImages[episode_id - 1]} alt={episode_id} />
            <p>{foundFilm.opening_crawl}</p>
            <h1>Characters:</h1>
            <div className={classes.characterList}>
            {foundFilm.characters.map((characterURL, index) => {
              // Extract characterNumber from characterURL
              const characterNumber =
                characterURL.match(/\/people\/(\d+)\/$/)?.[1];
              const foundCharacter = allCharacters.find((character) =>
                character.url.includes(`/people/${characterNumber}/`)
              );
              let characterIndex =
                foundCharacter.url.match(/\/people\/(\d+)\/$/)?.[1];
              if (characterIndex > 15) {
                characterIndex--;
              }
              
              return (
                <Link key={index} to={`/characters/${characterIndex - 1}`}>
                  <div className={classes.characterContainer}>
                    
                    <img className={classes.characterContainerImageImg}
                      src={images[characterIndex - 1] ? images[characterIndex - 1] : images[37]}
                      alt={foundCharacter.name}
                    />
                    
                    <p key={index}>{foundCharacter.name}</p>
                  </div>
                </Link>
              );
            })}
            </div>
          </>
        )}
      </article>
    </>
  );
}

export default FilmItem;
