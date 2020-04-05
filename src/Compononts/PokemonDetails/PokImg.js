import React from "react";
import fon from "./fon.jpg";

class PokImg extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="pokdetails__image">
                <div className="pokdetails__image-background">
                    <img src={fon} alt=""/>
                </div>
                <div className="pokdetails__image-pokemon">
                    <img src={this.props.pokImg} alt=""/>
                </div>
            </div>
        );
    }
}

export default PokImg;
