import React from "react";
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
            <div className="test">
                <PokImg pokImg={this.props.pokImg}/>
                {this.props.pokDetails.map((value,index)=>{
                    console.log(value)
                    return(
                        <div className="desc" key={index}>
                            <PokName pokName={value.name}/>
                            <PokTypes pokTypes={value.types}/>
                            <PokWeight pokWeight={value.weight}/>
                            <PokTotalMoves pokTotalMoves={value.moves.length}/>
                            <PokStats pokStats={value.stats}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default PokemonDetails;
