import React from "react";
import "./PokemonDetails.scss";
import PokImg from "./PokImg";
import PokName from "./PokName";
import PokTypes from "./PokTypes";
import PokWeight from "./pokWeight";
import PokTotalMoves from "./PokTotalMoves";
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
                            {/* <PokWeight pokWeight={value.weight}/>
                            <PokTotalMoves pokTotalMoves={value.moves.length}/> */}
                            <PokStats pokStats={value.stats}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PokemonDetails;
