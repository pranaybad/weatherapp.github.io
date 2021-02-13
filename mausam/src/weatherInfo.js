import React from 'react'

import ReactAnimatedWeather from 'react-animated-weather';
const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 100,
    animate: true
};

function WeatherInfo(props) {
    return ( < React.Fragment >
        <
        div className = "col-4 side-bg text-center py-3" >
        <
        ReactAnimatedWeather icon = { defaults.icon }
        color = { defaults.color }
        size = { defaults.size }
        animate = { defaults.animate }
        /> 

        <
        h2 className = "text-white py-2" > { props.weathername } < /h2>

        <
        div className = "d-flex flex-wrap " >
        <
        div className = "d-flex  col-12 py-1" >
        <
        div className = "text-white" > < strong > Humidity < /strong></div >
        <
        div className = "text-white ml-auto" > { props.humidity } % < /div> <
        /div>


        <
        div className = "d-flex  col-12 py-1" >
        <
        div className = "text-white" > < strong > Visiblity < /strong></div >
        <
        div className = "text-white ml-auto" > { props.visiblity } % < /div> <
        /div>


        <
        div className = "d-flex  col-12 py-1" >
        <
        div className = "text-white" > < strong > Wind Speed < /strong></div >
        <
        div className = "text-white ml-auto" > { props.windspped } % < /div> <
        /div>



        <
        div className = "d-flex  col-12 py-1" >
        <
        div className = "text-white" > < strong > Feels Like < /strong></div >
        <
        div className = "text-white ml-auto" > { props.feelilike } < /div> <
        /div>


        <
        div className = "d-flex  col-12 py-1" >
        <
        div className = "text-white" > < strong > Max temp < /strong></div >
        <
        div className = "text-white ml-auto" > { props.maxtemp } % < /div> <
        /div> <
        /div>

        <
        /div>




        <
        /React.Fragment>



    );
}
export default WeatherInfo;