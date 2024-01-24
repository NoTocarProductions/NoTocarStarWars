import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStarWarsData } from "../store/starWarsActions";
import LoaderPage from "./LoaderPage";
import LandingPage from "../components/LandingPage";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function HomePage() {
  const characters = useSelector((state) => state.characters.data);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Access the navigate function
  

  useEffect(() => {
    const fetchData = async () => {
      try {
       await setTimeout(() => {
           dispatch(fetchStarWarsData());
        }, 15000);
      } catch (error) {
        console.log('Error:', error);
        navigate('/error', {  error  });
      }
    };

    if (!characters) {
      fetchData();
    }
  }, [dispatch, characters, navigate]);

  return (
    <>
      {characters === null || characters === undefined ? <LoaderPage /> : <LandingPage />}
    </>
  );
}

export default HomePage;




// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {fetchStarWarsData} from "../store/starWarsActions";
// import LoaderPage from "./LoaderPage";
// import LandingPage from "../components/LandingPage";
// import { useNavigate } from "react-router-dom";

// function HomePage() {
//     const characters = useSelector((state) => state.characters.data);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//   useEffect(() => {

//     if (!characters) {

//         const error = dispatch(fetchStarWarsData());
//         if (error) {
//           navigate('*', { state: { error } });
//         }

//     }
//   }, [dispatch, characters]);

//   return (
//     <>
//      {characters === null || characters === undefined ? <LoaderPage /> :  <LandingPage />} 
//     </>
//   );
// }

// export default HomePage;
