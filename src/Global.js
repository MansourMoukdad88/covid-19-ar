import React, { Component } from 'react'
import './App.css';

class Global extends Component {
  state = {
    global: "mansour"
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api")
    .then(response => response.json())
    .then(data => {
      // console.log("GLOBAL", data);
      
      let globalConfirmed = data.confirmed.value;
      let globalRecovered = data.recovered.value;
      let globalDeaths = data.deaths.value;
      let update = data.lastUpdate;
      
      let global = [globalConfirmed, globalRecovered, globalDeaths, update];      this.setState({ global:global })
    });
  }

  render() {
    let som = this.state
    let update = som.global[3]

    return (
      <div className="entireData-items">
        <h1>All Cases</h1>
        <div className="global-item">
          <p style={{"color": "orange", "fontWeight":"bold", "fontSize":"24px"}}> {som.global[0]} </p>
          <label  style={{"color": "orange", "fontSize":"16px", "fontWeight":"bold",}}>confirmed</label>
        </div>
        <div className="global-item">
          <p style={{"color": "green", "fontWeight":"bold", "fontSize":"24px"}}> {som.global[1]}</p>
          <label style={{"color": "green", "fontSize":"16px", "fontWeight":"bold",}}>recovered</label>
        </div>
        <div className="global-item">
          <p style={{"color": "red", "fontWeight":"bold", "fontSize":"24px"}}> {som.global[2]}</p>
          <label style={{"color": "red", "fontSize":"16px", "fontWeight":"bold",}}>deaths</label>
        </div>

        <br></br>
        <br></br>
        <div style={{"fontSize":"10px", "color":"white"}}>{ update && (<div>Updated: {new Date(update).toLocaleString()}</div>)}</div>

      </div>
    )
  }
}

export default Global;