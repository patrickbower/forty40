import React, { Component } from 'react';
import './index.css';
import './css/login.css';

import TrelloAuth from './components/TrelloAuth';
import CheckItemComponent from './components/CheckItemComponent';

import Ajax from "./utils/ajax";
import * as Trello from "./utils/trello";


class App extends Component {

  constructor(props){
    super(props);

    this.state = ({
      userLoggedIn: false,
      data: {}
    })

    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    const token = window.localStorage.trello_token;
    if (token) {
      this.getData();
    }
  }

  async getData() {
    try {
      let member = await Ajax(Trello.query(Trello.member()));
      let boardData = await Ajax(Trello.query(Trello.boards(member.id)));
      const board = boardData.find(board => board.name = Trello.boardName)
      let cards = await Ajax(Trello.query(Trello.cards(board.id)));
      this.handleLoad(true, cards);
    } catch (err) {
      console.error(err)
    }
  }

  createCheckItems() {
    const {data} = this.state;
    return data.map(item => {
      return <CheckItemComponent name={item.name} key={item.id} />
    })
  }

  handleLogin(currentState) {
    this.setState({
      userLoggedIn: currentState
    });
  }

  handleData(dataSet) {
    this.setState({
      data: dataSet
    });
  }

  handleLoad(currentState, dataSet) {
    this.setState({
      userLoggedIn: currentState,
      data: dataSet
    });
  }

  renderList(){
    return (
      <div className="black-70 grid-container">
        <div className="pt5 bg-moon-gray">
          <h1 className="f-headline b lh-solid mt0 tr white">40</h1>
        </div>
        <div className="pt5">
          <h1 className="f-headline b lh-solid mt0 mb3">Forty</h1>
          <p className="f3 w-60 lh-copy mt0 mb4 mb5-ns">
            Take care of the minutes, and the days will take care of themselves
          </p>
          <form>
            <fieldset className="bn pa0 checklist">
              {this.createCheckItems()}
            </fieldset>
          </form>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.state)
    return (
      <div className = {"App sans-serif " + (this.state.userLoggedIn ? "logged-in" : "logged-out")}>
        {this.state.userLoggedIn ? 
          this.renderList() 
          : 
          <TrelloAuth 
            load = {(currentState, dataSet) => this.handleLoad(currentState, dataSet)}
          />
        }
      </div>
    );
  }
}

export default App;
