import React, { Component } from 'react'

class Sy extends Component {
  state = {
    global: "mansour"
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api/countries/Syria")
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
    let som = this.state
    let update = som.global[3]
    return (
      <div className="entireData-items">
        <h1>سوريا</h1>
        <div className="global-item">
          <p style={{"color": "orange", "fontWeight":"bold", "fontSize":"30px"}}> {som.global[0]} </p>
          <label  style={{"color": "orange", "fontSize":"16px", "fontWeight":"bold",}}>المصابون</label>
        </div>
        <div className="global-item">
          <p style={{"color": "green", "fontWeight":"bold", "fontSize":"30px"}}> {som.global[1]}</p>
          <label style={{"color": "green", "fontSize":"16px", "fontWeight":"bold",}}>المتعافون</label>
        </div>
        <div className="global-item">
          <p style={{"color": "rgba(216, 48, 34", "fontWeight":"bold", "fontSize":"30px"}}> {som.global[2]}</p>
          <label style={{"color": "rgba(216, 48, 34", "fontSize":"16px", "fontWeight":"bold",}}>الوفيات</label>
        </div>

        <br></br><br></br>
        <div style={{"fontSize":"12px", "color":"white"}}>آخر تحديث{ update && (<div> {new Date(update).toLocaleString()}</div>)}</div>
      </div>
    )
  }
}

export default Sy;