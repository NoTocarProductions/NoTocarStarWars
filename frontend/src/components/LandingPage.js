import { Link } from "react-router-dom";
import {ImageLoader} from "../util/ImageLoader";
import {filmLoader} from "../util/filmLoader";
import classes from './LandingPage.module.css';

export default function LandingPage() {
  const images = ImageLoader();
  const films = filmLoader();

  return (
    <>
      <div className={classes.containerBox}>
        
        <div className={classes.containerBox__div}>
            <Link to='/characters'>
          <h2>Characters</h2>
          <div className={classes.containerBox__div__img}>
          <img src={images[37]} alt="random characters" />
          </div>
          </Link>
        </div>
        <div className={classes.containerBox__div}>
            <Link to='/films'>
          <h2>Films</h2>
          <div className={classes.containerBox__div__img}>
          <img src={films[1]} alt="random film" />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}
