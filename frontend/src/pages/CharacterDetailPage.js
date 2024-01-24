import CharacterItem from "../components/CharacterItem";
import { useSelector } from "react-redux";
import { useParams, useRouteLoaderData } from "react-router-dom";

function CharacterDetailPage() {
  const characters = useSelector((state) => state.characters.data);

  const { index } = useParams();
  const charNumber = Number(index);

  const characterFilmUrls = characters[charNumber].films;
  const filmIds = characterFilmUrls.map((filmURL) => filmURL.match(/\d+/)[0]); // Extract the film ID from the URL
  const token = useRouteLoaderData('root');

  return (
    <>
    {token && 
    <CharacterItem
        character={characters[charNumber]}
        characterId={charNumber}
        filmIds={filmIds}
      />
    }
      
    </>
  );
}

export default CharacterDetailPage;
