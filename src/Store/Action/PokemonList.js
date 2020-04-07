import {ADD_POKEMONS,HANDLE_PAGE_CHANGE,VALUE_CHANGE,FILTERED_POKES,GET_VALUE,REWRITE,CLEAR_INPUT} from "./actionTypes";

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


export function handleChange(event){
    return{
        type: VALUE_CHANGE,
        event
    }
}

export function getValue(searchValue){
    return{
        type: GET_VALUE,
        searchValue
    }
}

export function filteredPokes(types){
    return{
        type: FILTERED_POKES,
        types
    }
}

export function rewrite(){
    return{
        type: REWRITE
    }
}

export function clearInputValue(){
    return{
        type: CLEAR_INPUT
    }
}

export function filterByTypes(searchValue,pokList){
    return (dispatch) =>{
        dispatch(rewrite());
        dispatch(getValue(searchValue));
        pokList.map((types)=>
        types.types.map((name)=>{
            if (searchValue == name.type.name){
                dispatch(filteredPokes(types));
            }})
        );
        dispatch(clearInputValue());
    }
}
