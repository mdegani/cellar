import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Client from "./Client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    };
  }
  componentDidMount() {
    Client.getNames(names => {
      this.setState({
        names
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.names.map(name => <p key={name.id}>{name.name}</p>)}
      </div>
    );
  }
}

export default App;
