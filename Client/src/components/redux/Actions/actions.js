import axios from "axios";
export const ADD_FAVORITE = 'ADD_FAV';
export const REMOVED_FAVORITE = 'REMOVE_FAV';
export const FILTER= "FILTER";
export const ORDER= "ORDER";


export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
      try {
          let response = await axios.post(endpoint, character);
          dispatch({
              type: ADD_FAVORITE,
              payload: response.data,
          });
      } catch (error) {
          console.log(error.message);
      }
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
      try {
          await axios.delete(endpoint);
          dispatch({
              type: REMOVED_FAVORITE,
              payload: id,
          });
      } catch (error) {
          console.log(error.message);
      }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
}

export const orderCards = (orden) => {
  return { type: ORDER, payload: orden };
}