import React, { Component, Fragment } from 'react';
import '../App.css';
// import AllCountries from "./AllCountries";

class Search extends Component {
  // constructor(props) {
  //   super(props); // need this keyword for state !!!!!!!!!!
    state = {
      values: [],
      names:[],
      confirmed: null,
      recovered:null,
      deaths:null,
      test:{},
      currentCountry: "",
      lastUpdate:""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  // }



  // ComponentDidMount
  componentDidMount = () =>{
    fetch(`https://covid19.mathdro.id/api/countries/`)
    .then(response => response.json())
    .then(data => {
      console.log("Countries", data.countries);

      // {
      //   countryName: iso3,
      // }
      this.setState({test: data.countries})




      // console.log(data.countries.Jordan);
      // console.log("TEST NOOOW", this.state);    
      // console.log("countryName", Object.keys(data.countries.Jordan));
      



      let iso3Array = [];

      let iso3 = Object.keys(data.iso3);
      iso3.map(key => {
        iso3Array.push(key);
      });
      let namesOfCountries = Object.keys(data.countries);
      let optionsArray = [];
      namesOfCountries.map(key => {
        optionsArray.push(key);
      });
      this.setState({names: optionsArray, value:iso3Array});
    });
  }


  // HandleChange
  handleChange = (event) => {
    let val = event.target.value;
    
    console.log("State from HandleChange", this.state.values);
    // this.state.value
    fetch( `https://covid19.mathdro.id/api/countries/${val}`)
    .then(response => response.json())
    .then(data => {
      console.log("morning",val);
      
      let confirmed = data.confirmed.value;
      let recovered = data.recovered.value;
      let deaths = data.deaths.value;
      let lastUpdate = data.lastUpdate
      let currentCountry = val
      this.setState({confirmed, recovered, deaths, currentCountry, lastUpdate})
    });
      // console.log("state inside change",this.state);
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
      
      // console.log("State Inside render", values);
      // console.log("State Inside render", confirmed);
      // console.log("State Inside render", recovered);
      // console.log("State Inside render", deaths);
      // console.log("LAST UPDATED", lastUpdate);


      for (let key in test) {
        let value = test[key];
      }
      // console.log(value);
      
      const renderName = names.map((el,index) => {
        // console.log("el", el);
        
        return(
          <Fragment key={index}>
            <option className="items-options" value={el} >{el}</option>
          </Fragment>
        )
      });


// End of render



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

      <br></br>
      <br></br>
      <div style={{"fontSize":"10px", "color":"white"}}>{ lastUpdate && (<div>Updated: {new Date(lastUpdate).toLocaleString()}</div>)}</div>
    </div>


    )}
    </div>
  </div>
  
);
  }
}

export default Search;