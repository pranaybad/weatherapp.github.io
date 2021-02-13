import React, { Component } from 'react'
import Clock from 'react-live-clock';
// import weatherInfo from './weatherinfo'
import WeatherInfo from './weatherInfo'
import ReactAnimatedWeather from 'react-animated-weather';
import './App.css';

class App extends React.Component {
    state = {
        latitude: null,
        longitude: null,
        temp: null,
        locationName: null,
        country: null,
        humidity: null,
        visiblity: null,
        windspped: null,
        feelilike: null,
        maxtemp: null,
        weathername: null
    }
    componentDidMount() {
        this.getPostions()
            .then((position) => {
                console.log(position.coords.latitude);
                // this.setState({ latitude: position.coords.latitude });
                this.getWeather(position.coords.latitude, position.coords.longitude)
            })
    }
    getPostions = () => {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    }
    getWeather = async(latitude, longitude) => {
        const api = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=ffa823344c1d4e7ee5d67b4d6a6bdedc`
        );
        const data = await api.json();
        console.log(data);
        this.setState({
            temp: Math.round(data.main.temp),
            locationName: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            visiblity: data.visibility,
            windspped: data.wind.speed,
            feelilike: data.main.feels_like,
            maxtemp: data.main.temp_max,
            weathername: data.weather[0].main
        })
    }
    render() {
        return ( <
            React.Fragment >
            <
            div className = "col-8 d-flex justify-content-center py-5 " >
            <
            div className = "col-6 app-bg d-flex flex-wrap py-3" >
            <
            div className = "col-12" >
            <
            h2 className = "text-white m-0" > {
                (this.state.locationName) } < /h2> <
            p className = "text-white" > {
                (this.state.country) } < /p>


            <
            /div>

            <
            div className = "col-12 mt-auto d-flex" >
            <
            div className = "my-auto" >
            <
            h2 className = "text-white m-0" >
            <
            Clock format = { 'HH:mm:ss' }
            ticking = { true }
            /> <
            /h2> <
            p className = "text-white m-0" >
            <
            Clock format = { 'dddd,MMMM DD,YYYY' }
            date = { '' }
            /> <
            /p>

            <
            /div>

            <
            div className = "ml-auto" >
            <
            h1 className = "text-white" > {
                (this.state.temp) }°
            C < /h1> <
            /div>

            <
            /div>

            <
            /div> <
            WeatherInfo humidity = { this.state.humidity }
            visiblity = { this.state.visiblity }
            windspped = { this.state.windspped }
            feelilike = { this.state.feelilike }
            maxtemp = { this.state.maxtemp }
            weathername = { this.state.weathername }
            /> <
            /div> <
            /React.Fragment>
        );
    }
}

export default App;