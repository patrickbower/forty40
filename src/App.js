import React, { Component } from 'react';
import './index.css';

import NetlifyAuth from './components/NetlifyAuth';
import CheckItemComponent from './components/CheckItemComponent';


class App extends Component {

  constructor(props){
    super(props);

    this.state = ({
      userLoggedIn: false
    })
  }

  createCheckItems() {
    const Data = require('./data/data.json');
    return Data.list.map(item => {
      return <CheckItemComponent name={item} key={item} />
    })
  }

  login(currentState){
    this.setState({userLoggedIn: currentState});
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
    return (
      <div className = {"App sans-serif " + (this.state.userLoggedIn ? "logged-in" : "logged-out")}>
        <NetlifyAuth login={(currentState) => this.login(currentState)} />
        {this.state.userLoggedIn? this.renderList() : ''}
      </div>
    );
  }
}

export default App;
