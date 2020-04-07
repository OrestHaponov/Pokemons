import React from "react";
import pokDetailBackground from "./pokDetailBackground.jpg";

class PokImg extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="pokdetails__image">
                <div className="pokdetails__image-background">
                    <img src={pokDetailBackground} alt=""/>
                </div>
                <div className="pokdetails__image-pokemon">
                    <img src={this.props.pokImg} alt=""/>
                </div>
            </div>
        );
    }
}

export default PokImg;
