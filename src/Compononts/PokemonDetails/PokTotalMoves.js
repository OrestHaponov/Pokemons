import React from "react";

class PokTotalMoves extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h4>{this.props.pokTotalMoves}</h4>
        );
    }
}

export default PokTotalMoves;
