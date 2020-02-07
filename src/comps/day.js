/** @jsx jsx */
import React from 'react';

import format from 'date-fns/format';
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled';

const Card = props => {

  const CardCont = styled('div')`
    width: 200px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
  `
  const getPic = (imageNumber) => {
    return <img src={`./pics/${imageNumber}-s.png`} alt="Day Weather Pic"/>
  } 

  const Rainbox = styled('p')`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49%;
  `

  return (
    <CardCont>
      <div>
        {props.dayOfWeek}
      </div>
        {getPic(props.imageNumber)}
        <div css={css`display: flex`}>
          <div
            css={css`
            display: flex;
            justify: center;
            align-items: center;
            width: 49%;
              `}
          >
            <p>
              High: {props.high} F
            </p>
            <p>
              Low: {props.low} F
            </p>
          </div>
          {props.hasRain ?
          <Rainbox>Rain: Yes </Rainbox>
              : <Rainbox>Rain: No </Rainbox>
          }
      </div>
    </CardCont>
  )
}

export default Card;
