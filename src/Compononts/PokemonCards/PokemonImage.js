import React from "react";

class PokemonImage extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <img src={this.props.pokImg} alt=""/>  
        );
    }
}

export default PokemonImage;
