import React, { Component, Fragment } from 'react';
import '../App.css';

class Search extends Component {

    state = {
      values: [],
      names:[],
      confirmed: null,
      recovered:null,
      deaths:null,
      currentCountry: "",
      lastUpdate:""
    };

  // ComponentDidMount
  componentDidMount = () =>{
    fetch(`https://covid19.mathdro.id/api/countries/`)
    .then(response => response.json())
    .then(data => {
      let arrayOfNames = [];
      data.countries.map((country) => {
        arrayOfNames.push(country.name);
      })
      this.setState({ names:arrayOfNames});
    });
  }


  // HandleChange
  handleChange = (event) => {
    let val = event.target.value;
    fetch( `https://covid19.mathdro.id/api/countries/${val}`)
    .then(response => response.json())
    .then(data => {
      let confirmed = data.confirmed.value;
      let recovered = data.recovered.value;
      let deaths = data.deaths.value;
      let lastUpdate = data.lastUpdate
      let currentCountry = val
      this.setState({confirmed, recovered, deaths, currentCountry, lastUpdate})
    });
  };

  // HandleSubmit
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    console.log("Submitted");
  }


// Render function 
  render() {
    const { names, values, confirmed, recovered, deaths, test, currentCountry, lastUpdate } = this.state;
    for (let key in test) {
      let value = test[key];
    }      
    const renderName = names.map((el,index) => { 
      return(
        <Fragment key={index}>
          <option className="items-options" value={el} >{el}</option>
        </Fragment>
      )
    });

  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label className="search-form">
          <select className="select-item" value={currentCountry} onChange={this.handleChange}>
            {renderName}
          </select>
        </label>
      </form>
      <div>
      {recovered === null ? "" : (
      <div className="entireData-items">
        <h1>{currentCountry}</h1>
        <div className="global-item">
          <p style={{"color": "orange", "fontWeight":"bold", "fontSize":"30px"}}> {confirmed} </p>
          <label  style={{"color": "orange", "fontSize":"16px", "fontWeight":"bold"}}>confirmed</label>
        </div>
        <div className="global-item">
          <p style={{"color": "green", "fontWeight":"bold", "fontSize":"30px"}}> {recovered}</p>
          <label style={{"color": "green", "fontSize":"16px", "fontWeight":"bold"}}>recovered</label>
        </div>
        <div className="global-item">
          <p style={{"color": "red", "fontWeight":"bold", "fontSize":"30px"}}> {deaths}</p>
          <label style={{"color": "red", "fontSize":"16px", "fontWeight":"bold"}}>deaths</label>
        </div>
        <br></br> <br></br>
        <div style={{"fontSize":"10px", "color":"white"}}>{ lastUpdate && (<div>Updated: {new Date(lastUpdate).toLocaleString()}</div>)}</div>
      </div>
      )}
      </div>
    </div>
  );
  }
}

export default Search;