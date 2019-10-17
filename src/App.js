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
      isLoading: false,
      data: {
        movies: [],
        error: '',
        totalResults: 0,
        searched: '',
      },
    }
  }

  searchBoxChanged = (event, value='') => {
    const searchValue = value ? value : event.target.value;
    this.setState({isLoading: true});
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchValue}&page=${this.state.currentPage}`)
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
          console.log('end');
          this.setState({isLoading: false, data: { totalResults: data.totalResults, searched: searchValue, movies, error }});
        })
  };

  pageChanged = (event) => {
    const newPage = parseInt(event.target.innerHTML);
    if (this.state.currentPage !== newPage) {
      this.setState({currentPage: newPage});
      this.searchBoxChanged(event, this.state.data.searched);
    }
  }

  render() {
    return (
      <div className="main">
        <Header searchBoxChanged={this.searchBoxChanged}/>
        <Page key="page" data={this.state.data} isLoading={this.state.isLoading} pageChanged={this.pageChanged}/>
      </div>
    );
  }
}

export default App;
