import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieItem extends Component {
    render() {
        const { item } = this.props;
        const poster = item.Poster === 'N/A' ? 'http://www.shonephotography.com/wp-content/themes/trend/assets/img/empty/424x500.png' : item.Poster;
        return (
            <div className="movie-item">
                <img src={poster} alt={item.Title}/>
                <h3>{`Title: ${item.Title}`}</h3>
                <p>{`Year: ${item.Year}`}</p>
                <p>{`imdbID: ${item.imdbID}`}</p>
                <p>{`Type: ${item.Type}`}</p>
            </div>
        );
    }
}

MovieItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default MovieItem;