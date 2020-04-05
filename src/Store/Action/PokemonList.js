import {ADD_POKEMONS, HANDLE_PAGE_CHANGE} from "./actionTypes";

export function getPokemons(listEachPokemon){
    return{
        type: ADD_POKEMONS,
        listEachPokemon
    }
}

export function handlePageChange(pageNumber){
    return{
        type: HANDLE_PAGE_CHANGE,
        pageNumber
    }
}

export function fetchPokemons(pageNumber){
    return (dispatch) =>{
        dispatch(handlePageChange(pageNumber))
        let pokeToLoad = pageNumber * 12;
        let pokeUrl = "https://pokeapi.co/api/v2/pokemon?offset=currentPage&limit=pokeCount";
        let pokeLoad = pokeUrl.replace("pokeCount",pokeToLoad);
        fetch(pokeLoad)
        .then((response) => {
            return response.json();
        })
        .then((listPokemons)=>{
        listPokemons.results.forEach((aboutPokemon) => {
            let aboutPokemonUrl = aboutPokemon.url;
            fetch(aboutPokemonUrl)
            .then((response) => {
                return response.json();
            })
            .then((listEachPokemon) => {
                dispatch(getPokemons(listEachPokemon))
            })
         })
    })
    }
}


