/** @jsx jsx */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {css, jsx} from '@emotion/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import data from '../us_cities.json';
import forcastData from '../tempdata.json';
import {faHome} from '@fortawesome/free-solid-svg-icons'

const NavBar = props => {
  let states = [];
  for (let [k, v] of Object.entries(data)) {
    states.push(k);
  }


  const [state, setState] = useState("Alaska");
  const [city, setCity] = useState(data[state]["cities"][0]);
  // const [show, setShow] = useState({showState: false, showCity: false});
  const findCities = data[state]["cities"];
  const key = "I8x3NISJGnGnxm1R9NuBQa5GrKGDUTGz"


  const getCityDataApi = async () => {
    const stateAbrv = data[state]["abrv"]
    try {
      let res = await fetch(`http://dataservice.accuweather.com/locations/v1/US/${stateAbrv}/search?apikey=%20${key}%20&q=${city}`);
      let returnData = await res.json();
      return returnData[0].Key;
    } catch(err) {
      console.log(err)
    }
  }

  const getFiveDayCityWeatherForecast = async (lockey) => {
    let res = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${lockey}?apikey=${key}`);
    let returnData = await res.json();
    return returnData;

  }

  const handleSubmit = async() => {
    const key = await getCityDataApi()
    const fiveDayForecast = await getFiveDayCityWeatherForecast(key);
    props.navSetData(fiveDayForecast);
    const location = {"city": city, "state": state}
    props.setCityState(location);
  }

  // const handleSubmit = () => {
    // const fiveDayForecast = forcastData;
    // props.navSetData(fiveDayForecast);
    // const location = {"city": city, "state": state};
    // props.setCityState(location);
  // }

  const linkHome = () => {
    props.history.push("/")
  }

  return (
    <>
      <FontAwesomeIcon css={css`font-size: 5rem; margin-top: 15px; &:hover {cursor: pointer}`} icon={faHome} onClick={linkHome}/>
      <div css={css`margin-top: 30px`}>
        <select>
          {states.map(s => {
            return <option key={s} value={s} onClick={(e) => {
              setState(e.target.value);
              setCity(data[state]["cities"][0]);
            }}>{s}</option>
          })}
        </select>
        <select>
          {findCities.map((c , i) => {
            return <option key={c + i} value={c}onClick={(e) => {
              setCity(e.target.value);
            }}>{c}</option>
          })}
        </select>
        <button onClick={handleSubmit}><Link css={css`text-decoration: none; color: black;`} to="/fiveDayForecast">Submit</Link></button>
      </div>
    </>
  )
}

export default NavBar;
