import React from "react";

class PokemonName extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <h1>{this.props.pokName}</h1>
        );
    }
}

export default PokemonName;
