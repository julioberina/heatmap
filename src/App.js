import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      x: 0,
      y: 0
    };

    this.heat = this.heat.bind(this);
    this.reset = this.reset.bind(this);

    for (let i = 0; i < 52; ++i) {
      this.state.data.push({"days": [0, 0, 0, 0, 0, 0, 0]})
    }
  }

  heat(e) {
    e.preventDefault();
    console.log('clicked submit');
  }

  reset(e) {
    e.preventDefault();
    console.log('clicked reset');
    let newdata = [];

    for (let i = 0; i < 52; ++i) {
      newdata.push({"days": [0, 0, 0, 0, 0, 0, 0]})
    }

    this.setState({ data: newdata });
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
          <button className="resetInfo" onClick={this.reset}>Reset</button>
        </div>

        <br />

        <div align="center" className="heatmap">
          <h3>2018 Heatmap</h3>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
