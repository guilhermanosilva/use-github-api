import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #666666;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1c2128;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: #999999;
  }

  ul {
    list-style: none;
  }
`;
