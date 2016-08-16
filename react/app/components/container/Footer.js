import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright sm-text-center">
          <p className="small no-margin pull-left sm-pull-reset">
            <span className="hint-text">Copyright &copy; 2016 </span>
            <span className="font-montserrat">PAGES</span>.
            <span className="hint-text">All rights reserved. </span>
          </p>
          <p className="small no-margin pull-right sm-pull-reset">
            <a href="#">Hand-crafted</a> <span className="hint-text">&amp; Made with Love ®</span>
          </p>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

export default Footer
