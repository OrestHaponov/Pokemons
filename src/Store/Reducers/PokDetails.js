import { GET_POKEMON_DETAILS } from "../Action/actionTypes";

const initialState ={
    pokDetails: [],
    pokImg: "",
}

export default function listPokemons(state = initialState, action){
    switch(action.type){
        case GET_POKEMON_DETAILS:
            return { 
                pokDetails: [action.pokDetails],
                pokImg: action.pokImg,
            }
        default:
            return state
    }
}