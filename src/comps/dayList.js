/** @jsx jsx */
import React, {useState} from 'react';
import format from 'date-fns/format';
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';

import Card from './day.js';
import Headline from './headline.js';

const DayList = (props) => {

  const [clickedButton, setClickedButton] = useState({one: "1px solid black", two: "none", selected: "Day"});

  const dates = props.forecastData.DailyForecasts.map(d => {
    return format(new Date(d.Date), "eeee");
  })

  const DayButton = styled('button')`
    padding: 5px;
    margin: 3px;
    background: none;
    border: ${clickedButton.one};
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
  `
  const NightButton = styled('button')`
    padding: 5px;
    margin: 3px;
    background: none;
    border: ${clickedButton.two};
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }
  `

  return (
    <>
      <Headline headlineData={props.forecastData.Headline}/>
      <DayButton onClick={() => {
        setClickedButton({one: "1px solid black", two: "none", selected: "Day"})
      }}> Day</DayButton>
      <NightButton onClick={() => {
        setClickedButton({one: "none", two: "1px solid black", selected: "Night"})
      }}>Night</NightButton>
      <div
        css={css`
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        justify-content: center;
        margin: 0 auto;
        `}>
        {props.forecastData.DailyForecasts.map(d => {
          const date = format(new Date(d.Date), "eeee");
          return (<Card key={date} dayOfWeek={date} imageNumber={d[clickedButton.selected].Icon} high={d.Temperature.Maximum.Value} low={d.Temperature.Minimum.Value} hasRain={d[clickedButton.selected].HasPrecipitation}/>)
        })}
      </div>
    </>
  )
}

export default DayList;
