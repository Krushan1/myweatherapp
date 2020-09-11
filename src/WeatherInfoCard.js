import React from 'react';
import { Card, CardContent } from '@material-ui/core';
const WeatherInfoCard = (props) => {
    console.log(props);
    const weatherInfo = Object.assign({}, props.weatherInfo);
    const temp = weatherInfo.main.temp;
    const weatherIcon = weatherInfo.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    console.log(weatherInfo);
    return (
            <section className="card-list">
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                <article className="card">
                    <header className="card-header">
                    {props.city}
                   <h2> {temp}</h2>
                 <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
                    </header>
                </article>
                
            </section>
            // <Card className="weather-container">
            //     <CardContent>

            //         {props.city}
            //         <article> {temp}</article>
            //         <img style={{height:'200px'}}src={iconURL} alt="Temperature check"/>
            //     </CardContent>


            // </Card>
       


    )
}

export default WeatherInfoCard;