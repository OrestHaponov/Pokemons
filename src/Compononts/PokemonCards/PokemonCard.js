import React from "react";
import PokemonImage from "./PokemonImage";
import PokemonName from "./PokemonName";
import PokemonTypes from "./PokemonTypes";
import pokCardBg from "./pokCardBg.jpg";

class PokemonCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="pokemons__card" 
            style={{backgroundImage: "url(" + pokCardBg + ")"}}
            onClick={()=>this.props.getPokDetails(this.props.pokDetails,this.props.pokImg)}
            >
                <PokemonImage pokImg={this.props.pokImg}/>
                <PokemonName  pokName={this.props.pokName}/>
                <PokemonTypes  pokTypes={this.props.pokTypes}/>
            </div>
        );
    }
}

export default PokemonCard;
