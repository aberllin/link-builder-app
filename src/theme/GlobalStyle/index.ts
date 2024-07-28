import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'InstrumentSans';
    src: url('InstrumentSans-Regular.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'InstrumentSans';
    src: url('InstrumentSans-SemiBold.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'InstrumentSans';
    src: url('InstrumentSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  *:focus { outline: none; }

  html {
    overflow-y: scroll;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'InstrumentSans', sans-serif;
  }
  
  button, input {
    margin: 0;
    line-height: 1.5;
  }

  optgroup, select, textarea  {
    margin: 0;
  }

  input, select, textarea, button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

`;
