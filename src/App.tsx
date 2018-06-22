import * as React from 'react';
import CheckItemComponent from './CheckItemComponent';

class App extends React.Component {

  public createCheckItems() {
    const Data = require('./data.json');
    return Data.list.map((item:string) => {
      return <CheckItemComponent name={item} key={item} />
    })
  }

  public render() {
    return (
      <div className="App sans-serif black-70 grid-container">
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
    );
  }
}

export default App;