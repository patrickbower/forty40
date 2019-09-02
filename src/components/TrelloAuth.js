import * as React from 'react';
import * as Trello from "../utils/trello";

class TrelloAuth extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.authenticationSuccess = this.authenticationSuccess.bind(this);
  }

  handleLogInClick() {
    window.Trello.authorize({
      type: 'popup',
      name: 'Forty40',
      scope: {
        read: 'true',
        write: 'true'
      },
      expiration: 'never',
      success: this.authenticationSuccess,
      error: this.authenticationFailure
    });
  }

  async authenticationSuccess() {
    try {
      let boardData = await window.Trello.get(Trello.boards());
      const board = boardData.find(board => board.id = Trello.boardNameId)
      window.localStorage.board_id = board.id;
      let cardsData = await window.Trello.get(Trello.cards(board.id));
      this.returnData(cardsData);
    } catch(err) {
      console.error(err)
    }
  }

  authenticationFailure() {
    console.error('Authentication failure')
  }

  returnData(data) {
    this.props.load(true, data)
  }

  render() {
    return (
      <a 
        className="login-link f6 no-underline br-pill ph3 pv2 mb2 dib black bg-light-gray"
        href="#"
        onClick={ this.handleLogInClick }>
          Log in
      </a>
    );
  }
}

export default TrelloAuth;