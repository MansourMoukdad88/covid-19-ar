import React, { Component } from 'react';
import '../App.css';

class AllCountries extends Component {
  
  state = {
    data: null
  };

  componentDidMount(){
    fetch("https://covid19.mathdro.id/api/countries/[country]/confirmed")
    .then(response => response.json())
    .then(data => {
      // console.log("App", data);
      
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
                <br></br>
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
    var today = new Date().toLocaleDateString('en-GB', {
      day : 'numeric',
      month : 'short',
      year : 'numeric'
      }).split(' ').join('-');
    return (
      <div className="app">
        <div className="container">
          <h1>Covid-19  |  كورونا</h1>
          <div style={{"textAlign":"center","margin":"10px", "backgroundColor":"#5B86E5", "width": "100px", "borderRadius":"3px"}}>{today}</div>
          <h5 style={{"fontSize": "8px", "textAlign":"left", "marginLeft":"10px"}}>Made by <a href="http://codings.io">codings.io</a></h5>
       
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

export default AllCountries;