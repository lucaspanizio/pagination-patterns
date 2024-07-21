import { createGlobalStyle, css } from 'styled-components'

const ResetCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  * {
    margin: 0;
    padding: 0;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    overflow-wrap: break-word;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    max-width: 100%;
    /* vertical-align: middle; */
  }

  img,
  video {
    height: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    font-size: 16px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`

const GlobalStyle = createGlobalStyle`
  ${ResetCSS}
  
  body {
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: 'Jet Brains', Arial, Helvetica, sans-serif;
  }  
`

export default GlobalStyle
