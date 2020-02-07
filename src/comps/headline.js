/** @jsx jsx */

import React from 'react';
import format from 'date-fns/format';
import add from 'date-fns/add'
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled'

const Headline = props => {
  const startDate = format(add(new Date(),{days: 1}), "MMM-do-y");
  const endDate = format(add(new Date(),{days: 5}), "MMM-do-y");
  const HeadContent = styled('div')`
    width: 100%;
    padding: 5px;
    font-weight: bold;
  `
  return (
    <div 
      css={css`
      display: flex;
      justify-content: center;
      margin: 15px;
      width: 80%;
        `}
    >
      <div
        css={css`
        display: block;
        width: 40%;
        text-align: right;
        margin-right: 15px;
        `
        }
      >
        <HeadContent>Week Of:</HeadContent>
        <HeadContent>Conditions:</HeadContent>
        <HeadContent>At A Glance:</HeadContent>
      </div>
      <div
        css={css`
        display: block;
        width: 60%;
        text-align: left;
        `
        }
      >
        <HeadContent>{startDate} --- {endDate}</HeadContent>
        <HeadContent>{props.headlineData.Category}</HeadContent>
        <HeadContent>{props.headlineData.Text}</HeadContent>
      </div>
    </div>
  )
}

export default Headline
