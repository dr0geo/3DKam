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

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
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
    padding: 20px 10px;
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

  h2 {
    font-size: 1.8rem;
    text-align: center;
  }

  p {
    line-height: 1.5rem;
    text-align: center;
  }

  input, textarea {
    background-color: #2a2a2a;
    border: 2px solid white;
    border-radius: 5px;
    display: block;
    margin: 10px auto;
    max-width: 800px;
    padding: 15px 20px;
    transition: border 0.2s ease-in-out;
    width: 100%;
    &:focus {
      border: 2px solid #ebd6d3;
    }
    &::placeholder {
      color: white;
      font-family: sans-serif;
      font-size: 0.8rem;
    }
  }

  textarea {
    min-height: 250px;
    resize: none;
  }

  button {
    background-color: #ebd6d3;
    border: 2px solid #ebd6d3;
    border-radius: 5px;
    color: #2a2a2a;
    display: block;
    margin: 20px auto;
    min-width: 140px;
    padding: 10px 20px;
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