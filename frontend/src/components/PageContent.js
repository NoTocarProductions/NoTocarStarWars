import classes from "./PageContent.module.css";
import { extraImagesLoader } from "../util/ImageLoader";

function PageContent({ title, children }) {
  const images = extraImagesLoader();

  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      <div className={classes.anakinSad}>
        <img src={images[2]} alt="anakinSad" />
      </div>
      {children}
    </div>
  );
}

export default PageContent;
