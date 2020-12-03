import styled from 'styled-components';

const PageTitle = styled.div`
  background-image: linear-gradient(hsla(0deg, 0%, 0%, 0.6), hsla(0deg, 0%, 0%, 0.6)), url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-bottom: -100px;
  padding: 0 40px;
  & > h1 {
    margin-top: -100px;
  }
  & > p {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
  }
  @media only screen and (min-width: 900px) {
    & > h1 {
      font-size: 3.7rem;
    }
    & > p {
      font-size: 1.5rem;
    }
  }
`;

export default PageTitle;