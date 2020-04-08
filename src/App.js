import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Global from "./Global";
import Jo from "./Jo";
import Kw from "./Kw";
import UAE from "./UAE";
import KSA from "./KSA";
import EG from "./EG";
import LB from "./LB";
import Sy from "./Sy";
import Search from "./components/Search";
import InstructionTicker from "./components/InstructionTicker";
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
          <InstructionTicker/>
          <h1 className="app-heading">Covid-19  <img src={logo} className="App-logo" alt="logo" />  كورونا</h1>
          <div style={{"textAlign":"center","margin":"10px 0 0 5px", "backgroundColor":"#5B86E5", "width": "100px", "borderRadius":"3px"}}>{today}</div>
          <h5 style={{"fontSize": "8px", "textAlign":"left", "marginLeft":"16px"}}>Made by <a href="http://codings.io">codings.io</a></h5>
          <Search/>
          <Global/>
          <Jo/>
          <Kw/>
          <Sy/>
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
