import React from 'react';
import {Link} from 'react-router';


class LoginForm extends React.Component {


  render() {
    return (
      <div className="login">
      <div className="login-wrapper">
        <div className="login-container bg-white">
          <div className="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
            <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"/>
            <p className="p-t-35">Sign into your pages account</p>
            <form id="form-login" className="p-t-15" role="form" action="index.html">
              <div className="form-group form-group-default">
                <label>Login</label>
                <div className="controls">
                  <input type="text" name="username" placeholder="User Name" className="form-control" required ref={(ref) => this.usernameRef = ref}/>
                </div>
              </div>
              <div className="form-group form-group-default">
                <label>Password</label>
                <div className="controls">
                  <input type="password" className="form-control" name="password" placeholder="Credentials" required ref={(ref) => this.passwordRef = ref}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 no-padding">
                  <div className="checkbox ">
                    <input type="checkbox" value="1" id="checkbox1"/>
                    <label for="checkbox1">Keep Me Signed in</label>
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <a href="register.html" class="text-info small">Don't have an account? Register</a>
                </div>
              </div>
              <Link to={`home`}>
                <button className="btn btn-primary btn-cons m-t-10 log_in" type="submit">Sign in</button>
              </Link>
            </form>
            <div className="pull-bottom sm-pull-bottom">
              <div className="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
                <div className="col-sm-9 no-padding m-t-10">
                  <p>
                    <small>
                    Create a pages account. If you have a facebook account, log into it for this
                    process. Sign in with <a href="#" className="text-info">Facebook</a> or <a href="#" className="text-info">Google</a>
                  </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }

}

export default LoginForm
