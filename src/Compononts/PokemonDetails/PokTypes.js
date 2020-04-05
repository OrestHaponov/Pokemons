import React from "react";

class PokTypes extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="pokdetails__types">
                {this.props.pokTypes.map((value,index)=>{
                    return(
                        <li className={value.type.name} key={index}>{value.type.name}</li>
                        )
                     })}
            </ul>
        );
    }
}

export default PokTypes;
