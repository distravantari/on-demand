import React from 'react';
import LoginForm from './Loginform'

class MainLogin extends React.Component {
  render() {
    return(
      <div className="main-login">
        <div className="col-md-4">

        </div>
        <div className="col-md-4">
          <LoginForm />
        </div>
        <div className="col-md-4">

        </div>
      </div>
    )
  }
}

export default MainLogin
