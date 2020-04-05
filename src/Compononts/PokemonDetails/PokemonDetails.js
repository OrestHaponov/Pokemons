import React from "react";
import "./PokemonDetails.scss";
import PokImg from "./PokImg";
import PokName from "./PokName";
import PokTypes from "./PokTypes";
import PokStats from "./PokStats";

class PokemonDetails extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="pokdetails">
                {this.props.pokDetails.map((value,index)=>{
                    return(
                        <div className="pokdetails__inner" key={index}>
                            <PokName pokName={value.name} pokStatsHp={value.stats}/>
                            <PokTypes pokTypes={value.types}/>
                            <PokImg pokImg={this.props.pokImg}/>
                            <PokStats pokStats={value.stats}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PokemonDetails;
