import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieItem.scss';

const EMPTY_IMAGE = 'http://www.shonephotography.com/wp-content/themes/trend/assets/img/empty/424x500.png';

class MovieItem extends Component {
    render() {
        const { item } = this.props;
        const poster = item.Poster === 'N/A' ? EMPTY_IMAGE : item.Poster;
        return (
            <div className="movie-item">
                <img src={poster} alt={item.Title}/>
                <p><span className="bold">Name: </span>{item.Title}</p>
                <p><span className="bold">Year: </span>{item.Year}</p>
                <p><span className="bold">imdbID: </span>{item.imdbID}</p>
                <p><span className="bold">Type: </span>{item.Type}</p>
            </div>
        );
    }
}

MovieItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MovieItem;