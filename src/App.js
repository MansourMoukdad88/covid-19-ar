import React, { Component } from 'react';
import './App.css';
import Global from "./Global";
import Jo from "./Jo";
import Kw from "./Kw";
import UAE from "./UAE"
import KSA from "./KSA"
import EG from "./EG"


class App extends Component {
  
  state = {
    data: null
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api/countries/[country]/confirmed")
    .then(response => response.json())
    .then(data => {
      console.log("App", data);
      
      let entireData = data.map((el, index) => {
        if(el.provinceState !== null ) {
        return (
          <div className="entireData-items" key={index}>            
              <h3><strong>{el.countryRegion}, {el.provinceState}:</strong></h3>
              <div className="global-item">
                <p style={{"color": "orange", "fontWeight":"bold"}}> {el.confirmed} </p>
                <label  style={{"color": "orange"}}>مؤكد</label>
              </div>
              <div className="global-item">
                <p style={{"color": "green", "fontWeight":"bold"}}> {el.recovered}</p>
                <label style={{"color": "green"}}>متعافي</label>
              </div>
              <div className="global-item">
                <p style={{"color": "red", "fontWeight":"bold"}}> {el.deaths}</p>
                <label style={{"color": "red"}}>وفاة</label>
              </div>
          </div>
        )
        } else {
          return (
            <div className="entireData-items" key={index}>            
                <h3><strong>{el.countryRegion}</strong></h3>
                <div className="global-item">
                  <p style={{"color": "orange", "fontWeight":"bold"}}> {el.confirmed} </p>
                  <label  style={{"color": "orange"}}>مؤكد</label>
                </div>
                <div className="global-item">
                  <p style={{"color": "green", "fontWeight":"bold"}}> {el.recovered}</p>
                  <label style={{"color": "green"}}>متعافي</label>
                </div>

                <div className="global-item">
                  <p style={{"color": "red", "fontWeight":"bold"}}> {el.deaths}</p>
                  <label style={{"color": "red"}}>وفاة</label>
                </div>
            </div>
          )
        }
    })
      this.setState({data: entireData})
      // console.log(data);
    });
  }


  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Covid-19  --  كورونا</h1>
          <h5 style={{"fontSize": "8px", "textAlign":"center"}}>Made by <a href="http://codings.io">codings.io</a></h5>
          <br></br>
          <Global/>
          <Jo/>
          <Kw/>
          <UAE/>
          <KSA/>
          <EG/>
          <h1>تفاصيل كل دولة</h1>
          <div className="dataContainer" >{this.state.data}</div>
          <h5 style={{"fontSize": "12px", "textAlign":"center"}}>Made by <a href="http://codings.io">codings.io</a>@ 2020</h5>
          <br></br>
          <p style={{"fontSize": "8px", "textAlign":"center"}}> Api by <a href="http://https://github.com/mathdroid/covid-19-api">mathdroid</a> </p>
        </div>
      </div>
     
    );
  }
}

export default App;



              // provinceState: "Hubei"
              // countryRegion: "China"
              // lastUpdate: 1584504796000
              // lat: 30.9756403482891
              // long: 112.270692167452
              // confirmed: 67800
              // recovered: 56886
              // deaths: 3122
              // active: 7792
              // admin2: null
              // fips: null
              // combinedKey: null
              // iso2: "CN"
              // iso3: "CHN"
  //       console.log("Country Name:...", countryName)
        // console.log("Confirmed:...", confirmed)

  //     })
  //   })
  // }