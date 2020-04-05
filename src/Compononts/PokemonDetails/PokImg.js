import React from "react";
import fon from "./fon.jpg";

class PokImg extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="img">
                <img src={fon} alt=""/>
                <img src={this.props.pokImg} alt=""/>
            </div>
        );
    }
}

export default PokImg;
