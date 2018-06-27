// src/Components/NetlifyAuth.js

import * as React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

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
  }

  componentDidMount() {
    netlifyIdentity.on("login", () => this.afterLogIn());
    netlifyIdentity.on("logout", () => this.setState({ loggedIn: false }));
  }

  render() {
    const user = netlifyIdentity.currentUser();
    console.log(user, this.state)
    if (!user) {
      return (
        <a href="#" onClick={ this.handleLogInClick }>Log in</a>
      );
    }
    return (
      <a href="#" onClick={ this.handleLogOutClick }>Log out { user.email }</a>
    );
  }
}

export default NetlifyAuth;