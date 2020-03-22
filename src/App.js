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
import styled from 'styled-components'


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
          <DivToday>{today}</DivToday>
          <H5>Made by <a href="http://codings.io">codings.io</a></H5>
          <Search/>
          <Global/>
          <Jo/>
          <Kw/>
          <UAE/>
          <KSA/>
          <LB/>
          <EG/>
          <br></br>
          <H5footer>Made by <a href="http://codings.io">codings.io</a>@ 2020</H5footer>
          <br></br>
          <Pfooter> Api by <a href="http://https://github.com/mathdroid/covid-19-api">mathdroid</a> </Pfooter>
        </div>
      </div>
     
    );
  }
}

export default App;

const DivToday = styled.div`
  text-align: center;
  margin: 10px;
  background-color: #5B86E5;
  width: 100px;
  border-radius: 3px;
`
const H5 = styled.h5`
  font-size: 8px;
  text-align: left;
  margin-left: 10px;
`
const H5footer = styled.h5`
  font-size: 12px;
  text-align: center;
`
const Pfooter = styled.p`
  font-size: 8px;
  text-align: right;
`
