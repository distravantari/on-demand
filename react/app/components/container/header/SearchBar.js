import React from 'react';

class SearchBar extends React.Component {
  render() {
    return(
      <div className="header-inner searchBar">
        <a href="#" className="search-link"><i className="fa fa-search" aria-hidden="true"></i> Type anywhere to <span className="bold">search</span></a>
      </div>
    )
  }
}

export default SearchBar
