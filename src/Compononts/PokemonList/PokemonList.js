import React from "react";
import {connect} from "react-redux";
import "./PokemonList.scss";
import {fetchPokemons,handleChange,filterByTypes} from "../../Store/Action/PokemonList";
import PokemonPagination from "../PokemonPagination";
import PokemonPopup from "../PokemonPopup/PokemonPopup";
import Filter from "../Filter/Filter";

class PokemonList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPokemons();
    }

    render() {
        return (
            <div className="wrapper">
                <Filter 
                    value={this.props.value}
                    handleChange={this.props.handleChange}
                    filterByTypes={this.props.filterByTypes}
                    pokemonList={this.props.pokemonList}
                    fetchPokemons={this.props.fetchPokemons}
                />
                <div className="pokemons">
                    <PokemonPopup 
                        pokemonList={this.props.pokemonList}
                        pokemonImgTemplate={this.props.pokemonImgTemplate}
                    />
                    <PokemonPagination 
                        activePage={this.props.activePage}
                        fetchPokemons={this.props.fetchPokemons}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        pokemonList: state.PokemonList.pokemonList,
        pokemonImgTemplate: state.PokemonList.pokemonImgTemplate,
        activePage: state.PokemonList.activePage,
        value: state.PokemonList.value,
        searchValue: state.PokemonList.searchValue,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchPokemons: (pageNumber)=>dispatch(fetchPokemons(pageNumber)),
        handleChange: (value)=>dispatch(handleChange(value)),
        filterByTypes: (searchValue,pokList)=>dispatch(filterByTypes(searchValue,pokList)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonList);
