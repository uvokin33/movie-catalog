import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SearchBox from './SearchBox';
import User from './User';
import '../styles/Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Movie Catalog</h1>
                <SearchBox searchBoxChanged={this.props.searchBoxChanged}/>
                <User />
            </div>
        );
    }
}

SearchBox.propTypes = {
    searchBoxChanged: PropTypes.func.isRequired,
};

export default Header;