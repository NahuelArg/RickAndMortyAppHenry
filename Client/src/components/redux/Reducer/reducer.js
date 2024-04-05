import { ADD_FAVORITE, REMOVED_FAVORITE, FILTER, ORDER } from "../Actions/actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case ADD_FAVORITE:
      return { ...state,myFavorites: payload};

      case REMOVED_FAVORITE:
      return { ...state, myFavorites: payload };

        case FILTER:
            if (payload === "all") {
                return { ...state, myFavorites: [...state.allCharacters] }
            } else {
                const filteredCharacters = state.allCharacters.filter((char) => char.gender === payload);
                return { ...state, allCharacters: filteredCharacters }
            }

        case ORDER:
            const sortedCharacters = [...state.allCharacters]; // Crear una copia del array de todos los personajes
            if (payload === "A") {
                sortedCharacters.sort((a, b) => a.id - b.id);
            } else if (payload === "D") {
                sortedCharacters.sort((a, b) => b.id - a.id);
            }
            return { ...state, allCharacters: sortedCharacters };

        default:
            return { ...state };
    }
}

export default rootReducer;