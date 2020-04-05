import {GET_POKEMON_DETAILS} from "./actionTypes";

export function getPokDetails(pokDetails,pokImg){
    return{
        type: GET_POKEMON_DETAILS,
        pokDetails,pokImg
    }
} 

