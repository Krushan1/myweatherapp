import React from 'react';
import {Button, Container, TextField } from '@material-ui/core';
// import {SearchIcon} from '@material-ui/icons/Search';
import {Client} from "@googlemaps/google-maps-services-js";
import SearchCard  from "./SearchCard";
import './App.css';
import { resolve } from 'url';
class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    value: '',
    backgroundImage: ''
  };
  this.autocompleteInput = React.createRef();
}
onButtonClick() {
  alert(this.state.value);
  
}
handleChange(event){
  console.log(event.target.value);
this.setState({value: event.target.value});
}
activatePlacesSearch(e){
  var input = document.getElementById('autocomplete');
  console.log(this.autocompleteInput);
  const client = new Client({})
  const autocomplete = client.placeAutocomplete({
    params: {
      input: input.value,
      key: 'AIzaSyDTx6eGpE_7xpbZUAtY9rMMk2HMHi5LpD0'
    },
    timeout: 1000 // milliseconds
  })
  .then(r => {
    input.addEventListener({autocomplete});
    console.log(r);
  })
  .catch(e => {
    console.log(e);
  });
  console.log(autocomplete);
  //autocomplete.event.addListener('place_changed');

  // const fillInAddress = () => {
  //   var place = autocomplete.getPlace();
  // }

  //var autocomplete = client.placeAutocomplete(input, {});
  // var autocomplete = new google.maps.places.Autocomplete(input);
}

render(){
  return (
    <div className="App">
      <header className="App-header">
      {/* <img src={"https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/12-512.png"} className="App-logo" alt="logo" /> */}
        <Container fixed maxWidth="md" className="weather-container">
          <div>
            Weather.io
          </div>
          <div>
            <span>
              
              <input ref={this.autocompleteInput}  id="autocomplete" type="text" onChange={(e) => this.activatePlacesSearch(e)}></input>
             <SearchCard/>
              
            {/* <input  id="outlined-basic" onChange={(e) => this.handleChange(e)}/> */}
            </span>
            <span>
            <Button size="small" variant="contained" color="primary" onClick={() => this.onButtonClick()}> Search </Button>
            </span>
          </div>
        </Container>
      </header>
      {/* <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8uw96Dlu7BR3s7MZbhZkxt3NW431LlwY&libraries=places&callback=${activatePlacesSearch}"></script> */}
    </div>
  );
}  
}

export default App;
