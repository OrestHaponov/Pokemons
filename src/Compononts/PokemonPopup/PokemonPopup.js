import React from "react";
import PokemonCards from "../PokemonCards/PokemonCards"
import Popup from "reactjs-popup";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import {getPokDetails} from "../../Store/Action/PokDetails";
import {connect} from "react-redux";

class PokemonPopup extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Popup
            trigger={
            <div className="wrapper">
                <PokemonCards 
                    pokemonList={this.props.pokemonList}
                    pokemonImgTemplate={this.props.pokemonImgTemplate}
                    getPokDetails={this.props.getPokDetails}
                />
                </div>
            }
            modal
            closeOnDocumentClick
        >
            <PokemonDetails 
                pokDetails={this.props.pokDetails}
                pokImg={this.props.pokImg}
            />
        </Popup>   
        );
    }
}

function mapStateToProps(state){
    return{
        pokDetails: state.PokDetails.pokDetails,
        pokImg: state.PokDetails.pokImg,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getPokDetails: (pokDetails,pokImg)=>dispatch(getPokDetails(pokDetails,pokImg)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(PokemonPopup);
