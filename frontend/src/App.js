import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import FilmsPage from "./pages/FilmsPage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import FilmDetailPage from "./pages/FilmDetailPage";
import ErrorPage from "./pages/Error";
import AuthenticationPage, {action as authenticationAction} from "./pages/Authentication";
import {action as logoutAction} from './pages/Logout';
import { tokenLoader } from "./util/auth";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      {
        path: "",
        errorElement: <ErrorPage />,
        element: <HomePage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: "/characters/:index",
        element: <CharacterDetailPage />,
      },
      {
        path: "/films",
        element: <FilmsPage />,
      },
      {
        path: "/films/:index",
        element: <FilmDetailPage />,
      },
      {
        path: "/auth",
        element: <AuthenticationPage />,
        action: authenticationAction,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    const unlisten = router.subscribe(({ location }) => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
