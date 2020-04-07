import { ADD_POKEMONS, HANDLE_PAGE_CHANGE,VALUE_CHANGE,GET_VALUE,FILTERED_POKES,REWRITE,CLEAR_INPUT } from "../Action/actionTypes";

const initialState ={
    pokemonList: [],
    pokemonImgTemplate: "https://pokeres.bastionbot.org/images/pokemon/{id}.png",
    activePage: 1,
    value: "",
    searchValue: "",
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
        case VALUE_CHANGE:
            return{
                ...state, value: action.event.target.value
            }
        case GET_VALUE:
            return{
                ...state, searchValue: state.value
            }
        case FILTERED_POKES:
            return{
                ...state, pokemonList: [...state.pokemonList, action.types] 
            }
        case REWRITE:
            return{
                ...state, pokemonList: []
            }
        case CLEAR_INPUT:
            return{
                ...state, value: ""
            }
        default:
            return state
    }
}