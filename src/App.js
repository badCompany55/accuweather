import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./comps/navBar.js";
import HomePage from "./comps/homePage.js"
import ForecastPage from './comps/forecastPage.js';
import {Route} from 'react-router-dom';

function App() {
  const [forecastData, setForecastData] = useState(null)
  const [cityState, setCityState] = useState(null);
  const navSetData = (weather, location) => {
    setForecastData(weather);
    setCityState(location)
  }
  return (
    <div className="App">
      <Route path="/"
        render={props => (<NavBar {...props} navSetData={navSetData} setCityState={setCityState}/>)}
      />
      <Route exact path="/"
        render={props => (<HomePage {...props}/>)}
      />
      <Route exact path="/fiveDayforecast"
        render={props => (<ForecastPage {...props} forecastData={forecastData} cityState={cityState}/>)}
      />
    </div>
  );
}

export default App;
