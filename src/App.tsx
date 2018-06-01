import * as React from 'react';

import CheckItemComponent from './CheckItemComponent'

class App extends React.Component {

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
            <fieldset id="favorite_movies" className="bn pa0">
              <CheckItemComponent name="Grow a fabulous mustache" />
              <div className="flex items-center mb2">
                <input className="mr2" type="checkbox" id="go-to-japan" defaultValue="go-to-japan" />
                <label htmlFor="go-to-japan" className="lh-copy">Go to Japan</label>
              </div>
              <div className="flex items-center mb2">
                <input className="mr2" type="checkbox" id="cycle-lakes" defaultValue="cycle-lakes" />
                <label htmlFor="cycle-lakes" className="lh-copy">Cycling sea to sea across Lake District</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="surf-wave" defaultValue="surf-wave" />
                  <label htmlFor="surf-wave" className="lh-copy">Surf a wave</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="run-london-or-triathlon" defaultValue="run-london-or-triathlon" />
                  <label htmlFor="run-london-or-triathlon" className="lh-copy">Run London marathon or do a triathlon</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="house-party" defaultValue="house-party" />
                  <label htmlFor="house-party" className="lh-copy">Throw an old school house party</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="how-to-sushi" defaultValue="how-to-sushi" />
                  <label htmlFor="how-to-sushi" className="lh-copy">Learn how to make sushi</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="get-dog" defaultValue="get-dog" />
                  <label htmlFor="get-dog" className="lh-copy">Get a dog</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="grow-facial-hair" defaultValue="grow-facial-hair" />
                  <label htmlFor="grow-facial-hair" className="lh-copy">Grow some facial hair</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="veg-garden" defaultValue="veg-garden" />
                  <label htmlFor="veg-garden" className="lh-copy">Start a vegetable garden</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="buy-something-outrageous" defaultValue="buy-something-outrageous" />
                  <label htmlFor="buy-something-outrageous" className="lh-copy">Buy something outrageous I've always wanted</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="public-speaking" defaultValue="public-speaking" />
                  <label htmlFor="public-speaking" className="lh-copy">Do a public speaking engagement</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="learn-instrument" defaultValue="learn-instrument" />
                  <label htmlFor="learn-instrument" className="lh-copy">Learn an instrument</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="reconnect-friend" defaultValue="reconnect-friend" />
                  <label htmlFor="reconnect-friend" className="lh-copy">Reconnect with an old friend</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="dj-gig" defaultValue="dj-gig" />
                  <label htmlFor="dj-gig" className="lh-copy">Play a DJ gig</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="print-stickers" defaultValue="print-stickers" />
                  <label htmlFor="print-stickers" className="lh-copy">Print my own stickers</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="trip-alone" defaultValue="trip-alone" />
                  <label htmlFor="trip-alone" className="lh-copy">Go on a trip alone</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="make-pizza" defaultValue="make-pizza" />
                  <label htmlFor="make-pizza" className="lh-copy">Make pizza from scratch</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="time-capsule" defaultValue="time-capsule" />
                  <label htmlFor="time-capsule" className="lh-copy">Bury a time capsule</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="new-language" defaultValue="new-language" />
                  <label htmlFor="new-language" className="lh-copy">Start to learn a new language, go to country and use it</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="camper-trip" defaultValue="camper-trip" />
                  <label htmlFor="camper-trip" className="lh-copy">Do a camper van trip</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="anfield-game" defaultValue="anfield-game" />
                  <label htmlFor="anfield-game" className="lh-copy">Go to a game at Anfield</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="t-shirt" defaultValue="t-shirt" />
                  <label htmlFor="t-shirt" className="lh-copy">Print own T-shirt</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="badger-watching" defaultValue="badger-watching" />
                  <label htmlFor="badger-watching" className="lh-copy">Go badger watching</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="climb-mountain" defaultValue="climb-mountain" />
                  <label htmlFor="climb-mountain" className="lh-copy">Climb a mountain</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="plant-tree" defaultValue="plant-tree" />
                  <label htmlFor="plant-tree" className="lh-copy">Plant a tree</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="classic-book" defaultValue="classic-book" />
                  <label htmlFor="classic-book" className="lh-copy">Read a classic book</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="geocaching" defaultValue="geocaching" />
                  <label htmlFor="geocaching" className="lh-copy">Go geocaching</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="cake" defaultValue="cake" />
                  <label htmlFor="cake" className="lh-copy">Bake a cake for someone special</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="visit-volcano" defaultValue="visit-volcano" />
                  <label htmlFor="visit-volcano" className="lh-copy">Visit a volcano</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="rubik-cube" defaultValue="rubik-cube" />
                  <label htmlFor="rubik-cube" className="lh-copy">Solve a Rubik’s Cube</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="crypto-currency" defaultValue="crypto-currency" />
                  <label htmlFor="crypto-currency" className="lh-copy">Invest in Crypto currency</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="oyster" defaultValue="oyster" />
                  <label htmlFor="oyster" className="lh-copy">Eat a raw oyster</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="down-pint" defaultValue="down-pint" />
                  <label htmlFor="down-pint" className="lh-copy">Down a pint</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="go-bombing" defaultValue="go-bombing" />
                  <label htmlFor="go-bombing" className="lh-copy">Go bombing</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="gluten-free-month" defaultValue="gluten-free-month" />
                  <label htmlFor="gluten-free-month" className="lh-copy">Go gluten-free for a month</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="gamble-casino" defaultValue="gamble-casino" />
                  <label htmlFor="gamble-casino" className="lh-copy">Gamble at a casino</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="lille-flee-market" defaultValue="lille-flee-market" />
                  <label htmlFor="lille-flee-market" className="lh-copy">Go to Lille flee market</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="sleep-next-to-campfire" defaultValue="sleep-next-to-campfire" />
                  <label htmlFor="sleep-next-to-campfire" className="lh-copy">Sleep next to a campfire</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="pier-swim" defaultValue="pier-swim" />
                  <label htmlFor="pier-swim" className="lh-copy">Swim round a pier</label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
