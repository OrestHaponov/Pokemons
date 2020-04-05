import React from "react";

class PokStats extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const pokStats = this.props.pokStats;
        return (
            <ul className="pokdetails__stats">
                {pokStats.map((value,index)=>{
                    return(
                        <li key={index}>{value.stat.name}<span>{value.base_stat}</span></li>
                        )
                     })}
            </ul>
        );
    }
}

export default PokStats;
