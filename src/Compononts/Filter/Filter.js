import React from "react";
import "./Filter.scss";

class Filter extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="filter__inner">
                <div className="filter__staff">
                    <h3>Find pokemon by type</h3>
                    <input type="text" value={this.props.value} onChange={this.props.handleChange}/>
                    <button onClick={()=>this.props.filterByTypes(this.props.value,this.props.pokemonList)}>Push</button>
                </div>
                <div className="filter__all">
                    <button onClick={this.props.fetchPokemons}>Show All</button>  
                </div>
             </div>
        );
    }
}

export default Filter;
