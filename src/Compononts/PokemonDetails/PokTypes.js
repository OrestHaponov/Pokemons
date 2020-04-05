import React from "react";

class PokTypes extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.pokTypes.map((value,index)=>{
                    return(
                        <li key={index}>{value.type.name}</li>
                        )
                     })}
            </ul>
        );
    }
}

export default PokTypes;
