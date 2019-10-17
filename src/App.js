import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header'
import Page from './components/Page'
import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      lastPage: 1,
      isLoading: false,
      data: {
        movies: [],
        error: '',
        totalResults: 0,
        searched: '',
      },
    }
  }

  searchBoxChanged = (event) => {
    this.updateData(event.target.value, this.state.currentPage);
  };

  updateData = (searchValue, pageIndex) => {
    this.setState({ isLoading: true });
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchValue}&page=${pageIndex}`)
      .then(response => {
        let movies = [];
        let error = '';
        const data = response.data;
        if (data.Search) {
          movies = data.Search;
        } else if (data.Error) {
          error = data.Error;
        } else {
          error = 'Undefined error';
        }
        this.setState({
          currentPage: 1,
          lastPage: pageIndex,
          isLoading: false,
          data: {
            totalResults: data.totalResults,
            searched: searchValue,
            movies,
            error
          }
        });
      });
  };

  pageChanged = (pageIndex) => {
    const { lastPage, data } = this.state;
    if (lastPage !== pageIndex) {
      this.updateData(data.searched, pageIndex);
    }
  }

  render() {
    return (
      <div className="main">
        <Header searchBoxChanged={this.searchBoxChanged} />
        <Page key="page" data={this.state.data} isLoading={this.state.isLoading} pageChanged={this.pageChanged} />
      </div>
    );
  }
}

export default App;
