export const ADD_FAVORITE = 'ADD_FAV';
export const REMOVED_FAVORITE = 'REMOVE_FAV';
export const FILTER= "FILTER";
export const ORDER= "ORDER";

export function addFav(char){
    return{
        type: ADD_FAVORITE,
        payload:char
    }
}

export function removeFav(id){
    return{
        type: REMOVED_FAVORITE,
        payload:id
    }
}
export const filterCards= (gender)=>{

    return (
        {type: FILTER, payload: gender }

    )
}


export const orderCards= (orden)=>{

    return ({
        type: ORDER, payload: orden
    }

    )
}