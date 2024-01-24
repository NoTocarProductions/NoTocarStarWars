import { useSelector } from "react-redux";
import { Link, useRouteLoaderData } from "react-router-dom";
import FilmsList from "../components/FilmsList";
import LoginButton from "../components/buttons/LoginButton";

function FilmsPage() {
  const token = useRouteLoaderData("root");
  const films = useSelector((state) => state.films.data);

  return (
    <div>
      {!token && (
        <>
          <p className="loginText">
            Please, <br /> Login to become one with the force and gain infinite
            knowledge about the star wars universe. <br />
            Did you really think just anybody could gain this knowledge?{" "}
          </p>{" "}
          <Link to="/auth" className="linkToLogin">
            <LoginButton />
          </Link>{" "}
        </>
      )}
      {films && token && <FilmsList films={films} />}
    </div>
  );
}
export default FilmsPage;
