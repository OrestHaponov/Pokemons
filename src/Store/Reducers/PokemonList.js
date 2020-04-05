import { ADD_POKEMONS, HANDLE_PAGE_CHANGE } from "../Action/actionTypes";

const initialState ={
    pokemonList: [],
    pokemonImgTemplate: "https://pokeres.bastionbot.org/images/pokemon/{id}.png",
    activePage: 1
}

export default function listPokemons(state = initialState, action){
    switch(action.type){
        case ADD_POKEMONS:
            return { 
                ...state, pokemonList: [...state.pokemonList, action.listEachPokemon] 
            }
        case HANDLE_PAGE_CHANGE:
            return { 
                ...state, activePage: action.pageNumber
            }
        default:
            return state
    }
}