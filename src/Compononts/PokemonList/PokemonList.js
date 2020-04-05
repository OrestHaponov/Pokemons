import React from "react";
import {connect} from "react-redux";
import "./PokemonList.scss";
import {fetchPokemons} from "../../Store/Action/PokemonList";
import PokemonPagination from "../PokemonPagination";
import PokemonPopup from "../PokemonPopup/PokemonPopup";

class PokemonList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPokemons();
    }

    render() {
        return (
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
        );
    }
}

function mapStateToProps(state){
    return{
        pokemonList: state.PokemonList.pokemonList,
        pokemonImgTemplate: state.PokemonList.pokemonImgTemplate,
        activePage: state.PokemonList.activePage,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchPokemons: (pageNumber)=>dispatch(fetchPokemons(pageNumber)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonList);
