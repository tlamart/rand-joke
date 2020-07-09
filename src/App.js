import React from 'react';
import './App.css';
import Setup from './Setup';
import Delivery from './Delivery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: {},
    }
  }

  componentDidMount() {
    fetch("https://sv443.net/jokeapi/v2/joke/Any?type=twopart")
      .then((resp) => resp.json())
      .then((joke) => this.setState({joke: joke}))
  }

  hideNSeek() {
    document.getElementById("delivery").classList.toggle('hide');
    document.getElementById("btn-ans").classList.toggle('hide');
    document.getElementById("btn-new").classList.toggle('hide');
  }

  showDelivery = (event) => {
    this.hideNSeek();
  }

  refresh = (event) => {
    fetch("https://sv443.net/jokeapi/v2/joke/Any?type=twopart")
      .then((resp) => resp.json())
      .then((joke) => this.setState({joke: joke}))
      .then(() => {this.hideNSeek()})
  }

  render() {
    const { setup, delivery } = this.state.joke
    return (
      <div className="App">
        <Setup setup={setup}/>
        <button id="btn-ans" onClick={this.showDelivery}>Show punchline</button>
        <Delivery delivery={delivery}/>
        <button id="btn-new" className="hide" onClick={this.refresh}>An other !</button>
      </div>
    );
  }
}

export default App;
