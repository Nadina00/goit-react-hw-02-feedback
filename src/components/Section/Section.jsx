import styled from "styled-components"
export const Section = ({title})=> {

    const Title = styled.h2`
    font-size: 50px;
    margin-left: 30px;

  `;

    return (
    <div>
           
        <Title>{title}</Title>
        
       </div>
)}