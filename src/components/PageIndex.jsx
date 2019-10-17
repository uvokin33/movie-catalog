import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PageIndex extends Component {
    render() {
        const { data, pageChanged } = this.props;
        const totalPages_pre = (data.totalResults / 10) || 0;
        const totalPages = !(data.totalResults % 10) ? totalPages_pre : totalPages_pre + 1;
        return (
            <div className="page-index">
                &lt;
                {[...Array(parseInt(totalPages))].map((item, index) => {
                   const pageIndex = index + 1;
                   return (<button id={pageIndex} onClick={() => pageChanged(pageIndex)}>{pageIndex}</button>)
                })}
                &gt;
            </div>
        );
    }
}

PageIndex.propTypes = {
    data: PropTypes.object.isRequired,
    pageChanged: PropTypes.func.isRequired,
};

export default PageIndex;