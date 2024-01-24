import { Link } from "react-router-dom";
import classes from "./CharactersList.module.css";
import {ImageLoader} from "../util/ImageLoader";
import { useEffect, useState } from "react";
import PageButton from "./buttons/PageButton";

function CharactersList({ characters }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCharacters, setPageCharacters] = useState([
    characters.slice(0, 10),
  ]);

  useEffect(() => {
    function fetchPageCharacters() {
      setPageCharacters(
        characters.slice((pageNumber - 1) * 10, pageNumber * 10)
      );
    }
    console.log(pageNumber);
    fetchPageCharacters();
  }, [pageNumber, characters]);

  function onPageClick(page) {
    setPageNumber((prevPage) => page);
    console.log(page);
  }

  const images = ImageLoader();
  console.log(characters);

  return (
    <div className={classes.events}>
      <h1 className={classes.listTitle}>CHARACTERS</h1>
      <ul className={classes.list}>
        {pageCharacters.map((char, index) => (
          <li key={index} className={classes.item}>
            <Link to={`/characters/${[index + (pageNumber - 1) * 10]}`}>
              <div className={classes.characterImgContainer}>
              <img
                src={
                  pageNumber <= 5
                    ? images[index + (pageNumber - 1) * 10]
                    : images[37]
                }
                alt={[index + (pageNumber - 1) * 10 + 1]}
              />
              </div>
              <div className={classes.content}>
                <h2>{char.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <menu>
        <button className={classes.plusminusButton}
          onClick={() => setPageNumber((prevPage) => prevPage - 1)}
          disabled={pageNumber === 1}
        >
          {" "}
          Prev{" "}
        </button>
        <PageButton
          number={1}
          onClick={onPageClick}
          isActive={pageNumber === 1}
        />
        <PageButton
          number={2}
          onClick={onPageClick}
          isActive={pageNumber === 2}
        />
        <PageButton
          number={3}
          onClick={onPageClick}
          isActive={pageNumber === 3}
        />
        <PageButton
          number={4}
          onClick={onPageClick}
          isActive={pageNumber === 4}
        />
        <PageButton
          number={5}
          onClick={onPageClick}
          isActive={pageNumber === 5}
        />
        <PageButton
          number={6}
          onClick={onPageClick}
          isActive={pageNumber === 6}
        />
        <PageButton
          number={7}
          onClick={onPageClick}
          isActive={pageNumber === 7}
        />
        <PageButton
          number={8}
          onClick={onPageClick}
          isActive={pageNumber === 8}
        />
        <PageButton
          number={9}
          onClick={onPageClick}
          isActive={pageNumber === 9}
        />
        <button className={classes.plusminusButton}
          onClick={() => setPageNumber((prevPage) => prevPage + 1)}
          disabled={pageNumber === 9}
        >
          {" "}
          Next{" "}
        </button>
      </menu>
    </div>
  );
}

export default CharactersList;
