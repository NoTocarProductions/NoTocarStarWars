// FilmDetailPage.js
import FilmItem from "../components/FilmItem";
import { useSelector } from "react-redux";
import { useParams, useRouteLoaderData } from "react-router-dom";

function FilmDetailPage() {
  const films = useSelector((state) => state.films.data);
  const { index } = useParams();
  const filmNumber = Number(index);

  // Find the film based on filmNumber
  const film = films.find((film) => film.episode_id === parseInt(filmNumber));
  const token = useRouteLoaderData('root');
  
  return (
    <>
      {token &&<FilmItem episode_id={film.episode_id} />}
    </>
  );
}

export default FilmDetailPage;

