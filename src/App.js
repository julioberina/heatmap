import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  heat(e) {
    e.preventDefault();
    console.log('clicked submit');
  }

  render() {
    return (
      <div>
        <div align="center" className="top">
          <h1>Github Repo Heatmap</h1>
        </div>

        <div align="center" className="container">
          <input id="username" type="text" placeholder="Enter Github Username" />
          <input id="reponame" type="text" placeholder="Enter Github Repository Name" />
        </div>

        <br />

        <div align="center">
          <button type="submit" className="submitInfo" onClick={this.heat}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
