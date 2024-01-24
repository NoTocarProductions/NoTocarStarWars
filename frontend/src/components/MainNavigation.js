import { useRouteLoaderData, NavLink, Form } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {ImageLoader} from "../util/ImageLoader";
import LoginButton from "./buttons/LoginButton";

function MainNavigation() {
  const token = useRouteLoaderData("root");
  const images = ImageLoader();
  return (
    <header className={classes.header}>
      <nav>
      <div className={classes.logoContainer}>
            <NavLink to=""><img src={images[50]} alt="logo" /></NavLink>
          </div>
        <ul className={classes.list}>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/films"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Films
            </NavLink>
          </li>
          {!token && <li>
            <NavLink
              to="/auth?mode=login"
              
            >
              <LoginButton />
            </NavLink>
          </li>}
          {token && <li>
            <Form action='/logout' method='post'>
            <button>Logout</button>
            </Form>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
