import React from 'react';
import styled from "styled-components"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  if (options.length === 0) return null;

  const Item = styled.ul`
  display: flex;
`;  
  const List = styled.li`
    list-style: none;
  `;
    const Btn = styled.button`
  color: palevioletred;
  font-size: 30px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;

  :hover {
    color: red;
    font-size: 40px;

  }
  `;
  return (
    <Item >
          {options.map(option => {          
        return (
          <List key={option}>
            <Btn
              type="button"
              onClick={() => { onLeaveFeedback(option); }}
            >
              {option}
            </Btn>
          </List>
        );
      })}
    </Item>
  );
}
    



      
