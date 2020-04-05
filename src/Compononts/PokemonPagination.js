import React from "react";
import Pagination from 'react-js-pagination';

class PokemonPagination extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Pagination
                activePage={this.props.activePage}
                totalItemsCount={100}
                hideNavigation={false}
                hideFirstLastPages={true}
                activeLinkClass={"activelink"}
                onChange={this.props.fetchPokemons}
            />
        );
    }
}

export default PokemonPagination;
