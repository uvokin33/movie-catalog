import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchBox extends Component {

    render() {
        return (
            <div className="search-box">
                <input className="input" placeholder="Enter movie title" onChange={this.props.searchBoxChanged}></input>
            </div>
        );
    }
}

SearchBox.propTypes = {
    searchBoxChanged: PropTypes.func.isRequired,
};

export default SearchBox;