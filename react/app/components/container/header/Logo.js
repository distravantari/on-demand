import React from 'react';

class Logo extends React.Component {
  render() {
    return(
      <div className="logo-header">
        <div className="header-inner">
          <div className="brand inline">
            <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Logo
