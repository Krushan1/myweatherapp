import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import WeatherCard from './WeatherCard';
createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
class SearchCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState()
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.autocomplete = null
    }

    componentDidMount() {
        const google = (window).google;
        const options = { types: ['(cities)'] }
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options)

        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
    }

    initialState() {
        return {
            city: '',

        }
    }

    handleChange(event) {

        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        this.setState({ city: document.getElementById('autocomplete').value })
        //event.preventDefault()
        //alert(document.getElementById('autocomplete').value)
        //this.props.dispatch(addParlor(this.state))
        //this.clearForm()
    }

    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        console.log(addressObject);
        // let address = addressObject.address_components
        // this.setState({

        //     city: address[0].long_name,

        // })
    }

    render() {
        return (

            <div>

                <div className="search-content">
                    <div>
                        <h1>Search weather by entering any location</h1>


                        <div className="auto-complete-form">
                            <TextField id="autocomplete"
                                className="input-field"
                                ref="input"
                                type="text" />
                            <Button className="search-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>

                <header className="App-header">

                    {/* <img src={"https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/12-512.png"} className="App-logo" alt="logo" /> */}

                    {this.state.city ? <WeatherCard city={this.state.city} /> : false}
                </header>

            </div >
        )
    }

}

export default SearchCard