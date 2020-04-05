import React from "react";

class PokWeight extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <span>{this.props.pokWeight}</span>
        );
    }
}

export default PokWeight;
