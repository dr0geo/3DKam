import styled from 'styled-components';

const PageTitle = styled.div`
  background-image: url(${props => props.url});
  background-position: top -88px center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-bottom: -88px;
  padding: 0 40px;
  & > h1 {
    margin-top: -88px;
  }
`;

export default PageTitle;