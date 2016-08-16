import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import User from './User';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="col-md-3">
          <Logo/>
        </div>
        <div className="col-md-7">
          <SearchBar />
        </div>
        <div className="col-md-2">
          <User />
        </div>
      </div>
    )
  }
}

export default Header
