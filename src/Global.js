import React, { Component } from 'react'
import './App.css';
import {Confirmed, ConfirmedLabel, Recovered, RecoveredLabel, Deaths, DeathsLabel, DivUpdate} from './styled'


class Global extends Component {
  state = {
    global: "mansour"
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api")
    .then(response => response.json())
    .then(data => {
      let globalConfirmed = data.confirmed.value;
      let globalRecovered = data.recovered.value;
      let globalDeaths = data.deaths.value;
      let update = data.lastUpdate;
      let global = [globalConfirmed, globalRecovered, globalDeaths, update];      this.setState({ global:global })
    });
  }

  render() {
    let som = this.state;
    let renderState = som.global;
    let update = som.global[3];
    let toUpdate = (update && (<div> {new Date(update).toLocaleString()}</div>))
    return (
      <div className="entireData-items">
        <h1>جميع دول العالم</h1>
        <div className="global-item">
          <Confirmed style={{'fontSize':'25px'}}> {renderState[0]} </Confirmed>
          <ConfirmedLabel>المصابون</ConfirmedLabel>
        </div>
        <div className="global-item">
          <Recovered style={{'fontSize':'25px'}}> {renderState[1]}</Recovered>
          <RecoveredLabel>المتعافون</RecoveredLabel>
        </div>
        <div className="global-item">
          <Deaths style={{'fontSize':'25px'}}> {renderState[2]}</Deaths>
          <DeathsLabel>الوفيات</DeathsLabel>
        </div>
          <br></br><br></br>
      </div>
    )
  }
}

export default Global;