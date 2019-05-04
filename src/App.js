import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.heat = this.heat.bind(this);
    this.reset = this.reset.bind(this);
    this.displayHeat = this.displayHeat.bind(this);

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

  displayHeat(day) {
    let i = 0;

    return (
      <tbody>
        <tr>
        {
          this.state.data.map((obj) => {
            return (<td className="uncommitted" key={day*52+(i++)}></td>)
          })
        }
        </tr>
      </tbody>
    )
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
            {this.displayHeat(0)}
            {this.displayHeat(1)}
            {this.displayHeat(2)}
            {this.displayHeat(3)}
            {this.displayHeat(4)}
            {this.displayHeat(5)}
            {this.displayHeat(6)}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
