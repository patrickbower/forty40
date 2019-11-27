import React, { Component } from "react";
import "./index.css";
import "./css/login.css";

import TrelloAuth from "./components/TrelloAuth";
import CheckItemComponent from "./components/CheckItemComponent";

import Ajax from "./utils/ajax";
import * as Trello from "./utils/trello";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
      data: {}
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const token = window.localStorage.trello_token;
    if (token) {
      this.getData();
    }
  }

  async getData() {
    try {
      let cards = await Ajax(
        Trello.query(Trello.cards(window.localStorage.board_id))
      );
      this.handleLoad(true, cards);
    } catch (err) {
      console.error(err);
    }
  }

  createCheckItems() {
    const { data } = this.state;
    return data.map((item, index) => {
      const done =
        item.labels.length && item.labels[0].name === "done" ? true : false;
      return (
        <CheckItemComponent
          name={item.name}
          key={item.id}
          done={done}
          link={item.url}
          number={index}
        />
      );
    });
  }

  handleLoad(currentState, dataSet) {
    this.setState({
      userLoggedIn: currentState,
      data: dataSet
    });
  }

  renderList() {
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="pt5 bg-black">
            <h1 className="f-headline b lh-solid mt0 tr white">40</h1>
          </div>
          <div className="pt5 pb5">
            <h1 className="f-headline b lh-solid mt0 mb3 black">Forty</h1>
            <p className="f2 b black">
              You miss 100% of the shots you don’t take
            </p>
          </div>
        </div>
        {this.createCheckItems()}
        <div className="grid-container">
          <div className="pt5 bg-black">
            <h1 className="f-headline b lh-solid mt0 tr white">40</h1>
          </div>
          <div className="pt5 pb5">
            <h1 className="f-headline b lh-solid mt0 mb3 black">Print a book</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div
        className={
          "App sans-serif " +
          (this.state.userLoggedIn ? "logged-in" : "logged-out")
        }
      >
        {this.state.userLoggedIn ? (
          this.renderList()
        ) : (
          <TrelloAuth
            load={(currentState, dataSet) =>
              this.handleLoad(currentState, dataSet)
            }
          />
        )}
      </div>
    );
  }
}

export default App;
