// src/Components/NetlifyAuth.js

import * as React from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import login from '../css/login.css';

class NetlifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleLogInClick() {
    netlifyIdentity.open('login');
  }

  handleLogOutClick() {
    netlifyIdentity.logout();
  }

  afterLogIn() {
    netlifyIdentity.close();
    this.props.login(true);
  }

  afterLogOut() {
    this.props.login(false);
  }

  componentDidMount() {
    netlifyIdentity.on("login", () => this.afterLogIn());
    netlifyIdentity.on("logout", () => this.afterLogOut());
  }

  render() {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      return (
        <a 
          className="login-link f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-light-gray"
          href="#"
          onClick={ this.handleLogInClick }>
            Log in
        </a>
      );
    }
    return (
      <a 
        className="login-link f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-light-gray"
        href="#"
        onClick={ this.handleLogOutClick }>
          Log out {user.user_metadata.full_name}
      </a>
    );
  }
}

export default NetlifyAuth;