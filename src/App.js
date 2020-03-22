import React, { Component } from 'react';
import './App.css';
import Global from "./Global";
import Jo from "./Jo";
import Kw from "./Kw";
import UAE from "./UAE"
import KSA from "./KSA"
import EG from "./EG"
import LB from "./LB"
import Search from "./components/Search";

class App extends Component {
  

  render() {
    var today = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      year : 'numeric'
      }).split(' ').join('-');
    return (
      <div className="app">
        <div className="container">
          <h1>Covid-19  |  Corona</h1>
          <div style={{"textAlign":"center","margin":"10px", "backgroundColor":"#5B86E5", "width": "100px", "borderRadius":"3px"}}>{today}</div>
          <h5 style={{"fontSize": "8px", "textAlign":"left", "marginLeft":"10px"}}>Made by <a href="http://codings.io">codings.io</a></h5>
          <Search/>
          <Global/>
          <Jo/>
          <Kw/>
          <UAE/>
          <KSA/>
          <LB/>
          <EG/>
          <br></br>
          <h5 style={{"fontSize": "12px", "textAlign":"center"}}>Made by <a href="http://codings.io">codings.io</a>@ 2020</h5>
          <br></br>
          <p style={{"fontSize": "8px", "textAlign":"right"}}> Api by <a href="http://https://github.com/mathdroid/covid-19-api">mathdroid</a> </p>
        </div>
      </div>
     
    );
  }
}

export default App;