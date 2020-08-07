import React from 'react';
import './App.css';
import WeatherInfoCard from './WeatherInfoCard';
class WeatherCard extends React.Component{
    //_isMounted = false;
    constructor(props) {
        super(props)
        //this.state = this.initialState()
        this.state = {weatherData : "" }
        this.getWeatherData = this.getWeatherData.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    
    componentDidUpdate(prevProps){
       
        console.log(this.props.city, prevProps.city);
        if((this.props.city !== prevProps.city)){
          
            this.getWeatherData();
            
        }
         
    }
    componentWillMount(){
        //this._isMounted = true;
        //api.openweathermap.org/data/2.5/forecast/daily?q=Atlanta,GA&cnt={cnt}&appid=524589f12ff60e2a150e470595208862
     
         const weatherData =   this.getWeatherData();
         this.setState({weatherData: weatherData});
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    getWeatherData(){
        const city = this.props.city;
        new Promise((resolve, reject) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=de47ba0b4dc23ae5927e45d246037f4d&units=imperial`).then(data => data.json()).then(body => {
                console.log(body);    
                
                this.setState({weatherData: body})
                return body;
                //resolve(body);
            })

        })
    }
    render(){
        console.log(this.state);
        return(
            <>

           {this.state.weatherData ? <WeatherInfoCard city={this.props.city} weatherInfo={this.state.weatherData}/> : false } 

           
                

{/* <Card className="weather-container">
<CardContent>
     <h6>{this.props.city}</h6>


     <div className="auto-complete-form">
         <TextField id="autocomplete"
             className="input-field"
             ref="input"
             type="text" />
         <Button className="search-button" variant="contained" color="primary" onClick={this.handleSubmit}>
         {this.props.city}
         </Button>
     </div>

</CardContent>


</Card>

<Card className="weather-container">
                       <CardContent>
                            <h6>{this.props.city}</h6>


                            <div className="auto-complete-form">
                                <TextField id="autocomplete"
                                    className="input-field"
                                    ref="input"
                                    type="text" />
                                <Button className="search-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                                {this.props.city}
                                </Button>
                            </div>

                      </CardContent>


                    </Card>
                
                    <Card className="weather-container">
                       <CardContent>
                            <h6>{this.props.city}</h6>


                            <div className="auto-complete-form">
                                <TextField id="autocomplete"
                                    className="input-field"
                                    ref="input"
                                    type="text" />
                                <Button className="search-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                                {this.props.city}
                                </Button>
                            </div>

                      </CardContent>


                    </Card>

                    <Card className="weather-container">
                       <CardContent>
                            <h6>{this.props.city}</h6>


                            <div className="auto-complete-form">
                                <TextField id="autocomplete"
                                    className="input-field"
                                    ref="input"
                                    type="text" />
                                <Button className="search-button" variant="contained" color="primary" onClick={this.handleSubmit}>
                                {this.props.city}
                                </Button>
                            </div>

                      </CardContent>


                    </Card> */}
            </>
        )
    }
}
export default WeatherCard;