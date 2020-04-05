import React from "react";

class PokName extends React.Component {
    constructor(props){
        super(props);
    }



    render() {
        let getHp = this.props.pokStatsHp;
        if(getHp.length > 1){
            getHp = this.props.pokStatsHp.filter(pokHp => pokHp.stat.name == "hp")
        }
        return (
            <div className="pokdetails__title">
                <h3>{this.props.pokName}</h3>
                {getHp.map((value,index)=>{
                    return(
                        <p key={index}>{value.stat.name} <span>{value.base_stat}</span></p>
                    )
                })}
            </div>
        );
    }
}

export default PokName;
