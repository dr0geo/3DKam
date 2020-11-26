import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}