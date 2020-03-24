import React, { Component } from 'react'
import {Confirmed, ConfirmedLabel, Recovered, RecoveredLabel, Deaths, DeathsLabel, DivUpdate} from './styled'

class UAE extends Component {
  state = {
    global: "mansour"
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api/countries/ae")
    .then(response => response.json())
    .then(data => {      
      let globalConfirmed = data.confirmed.value;
      let globalRecovered = data.recovered.value;
      let globalDeaths = data.deaths.value;
      let update = data.lastUpdate;
      let global = [globalConfirmed, globalRecovered, globalDeaths, update];
      this.setState({ global:global })
    });
  }

  render() {
    let som = this.state;
    let renderState = som.global;
    let update = som.global[3];
    let toUpdate = (update && (<div>Updated: {new Date(update).toLocaleString()}</div>))
    return (
      <div className="entireData-items">
        <h1> Emiraties UAE</h1>
        <div className="global-item">
          <Confirmed> {renderState[0]} </Confirmed>
          <ConfirmedLabel>confirmed</ConfirmedLabel>
        </div>
        <div className="global-item">
          <Recovered> {renderState[1]}</Recovered>
          <RecoveredLabel>recovered</RecoveredLabel>
        </div>
        <div className="global-item">
          <Deaths> {renderState[2]}</Deaths>
          <DeathsLabel>deaths</DeathsLabel>
        </div>
          <br></br><br></br>
        <DivUpdate>{toUpdate}</DivUpdate>
      </div>
    )
  }
}

export default UAE;
