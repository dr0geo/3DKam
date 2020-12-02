import styled from 'styled-components';

export const PinkSection = styled.section`
  background-color: hsl(7deg, 38%, 88%);
  padding: 40px;
  & > a {
    background-color: #2a2a2a;
    border-radius: 5px; 
    color: #ebd6d3;
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 20px auto;
    padding: 12px 20px 5px 20px;
    text-align: center;
  }
`;

export const WhiteSection = styled.section`
  padding: 40px;
`;