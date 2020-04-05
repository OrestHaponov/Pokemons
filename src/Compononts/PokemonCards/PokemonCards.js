import React from "react";
import PokemonCard from "./PokemonCard";

class PokemonList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        let pokList = this.props.pokemonList.slice(-12);
        return (
            <div className="pokemons__cards">
                    {pokList.map((value,index)=>{
                        let pokemonImgTemplate = this.props.pokemonImgTemplate;
                        let pokemonId = value.id;
                        let pockemonImg = pokemonImgTemplate.replace('{id}',pokemonId);
                        return(
                            <PokemonCard 
                                key={index}
                                pokDetails={value}
                                getPokDetails={this.props.getPokDetails}
                                pokName={value.name}
                                pokImg={pockemonImg}
                                pokTypes={value.types}
                            />
                        )
                    })}
            </div>
        );
    }
}

export default PokemonList;
