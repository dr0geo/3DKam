import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: block;
    font-family: 'Tajawal';
    font-weight: 400;
    src: 
      url("/fonts/Tajawal-Regular.woff2") format("woff2"),
      url("/fonts/Tajawal-Regular.woff") format("woff");
  }

  @font-face {
    font-display: block;
    font-family: 'Tajawal';
    font-weight: 300;
    src: 
      url("/fonts/Tajawal-Light.woff2") format("woff2"),
      url("/fonts/Tajawal-Light.woff") format("woff");
  }

  @font-face {
    font-display: block;
    font-family: 'Tajawal';
    font-weight: 700;
    src: 
      url("/fonts/Tajawal-Bold.woff2") format("woff2"),
      url("/fonts/Tajawal-Bold.woff") format("woff");
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Tajawal', sans-serif;
    margin: auto;
  }

  header {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    padding: 15px 10px;
    position: sticky;
    & > a:first-of-type {
        border-bottom: 1px solid transparent;
    }
    & > nav {
      display: flex;
      justify-content: space-evenly;
      width: 80%;
    }
  }

  a {
    border-bottom: 1px solid transparent;
    color: black;
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}