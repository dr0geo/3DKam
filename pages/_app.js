import { useState } from 'react';
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
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 120px;
    padding: 40px 10px;
    text-align: center;
    transition: padding-bottom 0.3s ease-in-out;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    top: 170px;
    transform-origin: top center;
    transition: transform 0.3s ease-in-out;
  }

  a {
    border-bottom: 1px solid transparent;
    color: black;
    padding: 10px 0;
    text-decoration: none;
  }

  h1 {
    color: white;
    font-size: 2.8rem;
    text-align: center;
  }
`;

export default function App({ Component, pageProps }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(() => !isClicked);
  }

  return (
    <>
      <GlobalStyle />
      <Component 
        handleClick={handleClick} 
        isClicked={isClicked} 
        {...pageProps}
      />
    </>
  );
}