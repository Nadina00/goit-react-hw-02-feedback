import React from 'react';
import styled from "styled-components"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>{
    const Item = styled.ul`
    display: block;
  `;   
  const List = styled.li`
  list-style: none;
  font-size: 25px;
`; 
   
        return (
            <div>
            
        <Item>
        <List> Good: {good} </List>
        <List> Neutral: {neutral}: </List>
        <List> Bad: {bad} </List>
        <List> Total: {total()} </List>
        <List> PositivePercentage: {positivePercentage()}% </List></Item> 
       
       
        </div>
        )
       
    
    }  

