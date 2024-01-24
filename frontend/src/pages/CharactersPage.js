import { useSelector } from "react-redux";
import CharactersList from "../components/CharactersList";
import { Link, useRouteLoaderData } from "react-router-dom";
import LoginButton from "../components/buttons/LoginButton";

function CharactersPage() {
  const token = useRouteLoaderData("root");
  const characters = useSelector((state) => state.characters.data);

  return (
    <>
      {!token && (
        <>
          <p className="loginText">
            Please, <br /> Login to become one with the force and gain infinite
            knowledge about the star wars universe. <br />
            Did you really think just anybody could gain this knowledge?
          </p>
          <Link to="/auth">
            <LoginButton />
          </Link>
        </>
      )}
      {characters && token && <CharactersList characters={characters} />}
    </>
  );
}

export default CharactersPage;
