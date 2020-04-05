import React from "react";

class PokName extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h3>{this.props.pokName}</h3>
        );
    }
}

export default PokName;
