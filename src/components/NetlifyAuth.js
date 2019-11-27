// src/Components/NetlifyAuth.js

import netlifyIdentity from 'netlify-identity-widget';
import * as React from 'react';

class NetlifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.state = { loggedIn: false };
  }

  handleLogInClick() {
    netlifyIdentity.open('login');
  }

  handleLogOutClick() {
    netlifyIdentity.logout();
  }

  afterLogIn() {
    netlifyIdentity.close();
    this.setState({ loggedIn: true });
    this.props.login(true);
  }

  afterLogOut() {
    this.setState({ loggedIn: false })
    this.props.login(false);
  }

  componentDidMount() {
    netlifyIdentity.on("login", () => this.afterLogIn());
    netlifyIdentity.on("logout", () => this.afterLogOut());
    netlifyIdentity.currentUser()? this.props.login(true) : this.props.login(false);
  }

  render() {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      return (
        <button type="button"
          className="login-link f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-light-gray"
          onClick={ this.handleLogInClick }>
            Log in
        </button>
      );
    }
    return (
      <button type="button" 
        className="login-link f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-light-gray"
        onClick={ this.handleLogOutClick }>
          Log out {user.user_metadata.full_name}
      </button>
    );
  }
}

export default NetlifyAuth;