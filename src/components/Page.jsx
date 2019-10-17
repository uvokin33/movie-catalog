import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import PageIndex from './PageIndex';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        const { data } = this.props;
        let title;
        if (data.error) {
            return (
                <div className="page">
                    <h1>{data.error}</h1>
                </div>
            );
        }
        if (data.movies.length) {
            title = <h1>{`You seached for: ${data.searched}, ${data.totalResults} results found`}</h1>;
        }
        return (
            <div className="page">
                {title}
                <div className="page-content">
                    {data.movies.map(item => <MovieItem item={item} />)}
                </div>
                <PageIndex key="page-index" data={data} pageChanged={this.props.pageChanged}/>
            </div>
        );
    }
}

Page.propTypes = {
    data: PropTypes.object.isRequired,
    pageChanged: PropTypes.func.isRequired,
};

export default Page;