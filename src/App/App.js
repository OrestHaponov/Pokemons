   
import React from "react";
import "./app.scss";
import "../fonts/fonts.scss";
import back from "./back.png";
import PokemonList from "../Compononts/PokemonList/PokemonList";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="app"
            style={{backgroundImage: "url(" + back + ")"}}
            >
              <PokemonList />
            </div>
        );
    }
}

export default App;
