import React from 'react';

import DayList from './dayList.js';

const ForecastPage = props => {
  return (
    <>
      {props.forecastData ?
        <DayList forecastData={props.forecastData}/>
          : <div>Loading</div>
      }
    </>
  )
}

export default ForecastPage;
