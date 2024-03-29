/* istanbul ignore file */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }
`

export default GlobalStyles
