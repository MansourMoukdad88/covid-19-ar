import React, { Component } from 'react'

class Kw extends Component {
  state = {
    global: "mansour"
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api/countries/Kuwait")
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
        <h2>الكويت</h2>
        <div className="global-item">
          <p style={{"color": "orange", "fontWeight":"bold"}}> {som.global[0]} </p>
          <label  style={{"color": "orange"}}>مؤكد</label>
        </div>
        <div className="global-item">
          <p style={{"color": "green", "fontWeight":"bold"}}> {som.global[1]}</p>
          <label style={{"color": "green"}}>متعافي</label>
        </div>
        <div className="global-item">
          <p style={{"color": "red", "fontWeight":"bold"}}> {som.global[2]}</p>
          <label style={{"color": "red"}}>وفاة</label>
        </div>
        <br></br>
        <br></br>
        <div style={{"fontSize":"10px", "color":"white"}}>{ update && (<div>Updated: {new Date(update).toLocaleString()}</div>)}</div>

      </div>
    )
  }
}

export default Kw;