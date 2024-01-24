import { setCharactersData } from '../store/charactersSlice';
import { setFilmsData } from '../store/filmsSlice';

export const fetchStarWarsData = () => {
  return async (dispatch) => {
    console.log('Fetching Star Wars data...');

    const fetchData = async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }

        return await response.json();
      } catch (error) {
        console.error('Error in fetchData:', error);
        throw error; // Re-throw the error to be caught in the outer catch block
      }
    };

    try {
      let allCharacters = [];
      let nextPage = 'https://swapi.dev/api/people/';

      while (nextPage) {
        const dataChars = await fetchData(nextPage);
        allCharacters = [...allCharacters, ...dataChars.results];
        nextPage = dataChars.next;
      }

      const dataFilms = await fetchData('https://swapi.dev/api/films/');

      dispatch(setCharactersData(allCharacters));
      dispatch(setFilmsData(dataFilms.results));
      console.log('Data fetched successfully:', dataFilms, allCharacters);
      return null;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
      // Re-throw the error to be caught where the action is dispatched
    }
  };
};

// export const fetchStarWarsData = () => {
//   return async (dispatch) => {
//     console.log('Fetching Star Wars data...');

//     const fetchData = async (url) => {
//       try {
//         const response = await fetch(url);

//         if (!response.ok) {
//           console.error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
//           throw new Error(`Failed to fetch data from ${url}`);
//         }

//         return await response.json();
//       } catch (error) {
//         console.error('Error in fetchData:', error);
//         throw error;
//       }
//     };

//     try {
//       let allCharacters = [];
//       let nextPage = 'https://swapi.dev/api/peoplee/';

//       while (nextPage) {
//         const dataChars = await fetchData(nextPage);
//         allCharacters = [...allCharacters, ...dataChars.results];
//         nextPage = dataChars.next;
//       }

//       const dataFilms = await fetchData('https://swapi.dev/api/films/');

//       dispatch(setCharactersData(allCharacters));
//       dispatch(setFilmsData(dataFilms.results));
//       console.log('Data fetched successfully:', dataFilms, allCharacters);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//       // Assuming you have access to the `navigate` function
//     }
//   };
// };
