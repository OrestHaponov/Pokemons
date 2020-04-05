import React from "react";

class PokStats extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.pokStats.map((value,index)=>{
                    return(
                        <li key={index}>{value.stat.name}<span>{value.base_stat}</span></li>
                        )
                     })}
            </ul>
        );
    }
}

export default PokStats;
