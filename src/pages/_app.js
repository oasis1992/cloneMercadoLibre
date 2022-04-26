import { createGlobalStyle, ThemeProvider } from 'styled-components'
import pxToRem from 'utils/pxToRem'

const DMSans = '/fonts/Roboto-Light.ttf'

export const theme = {
    colors: {
        primary: '#FFE600',
        background: '#EEEEEE',
        darkGray: '#333333',
        primaryButton: '#3483FA',
        primaryButtonHover: '#2E61B3',
        textLightGray: '#999999',
        textDarkGray: '#666666',
    },
    baseSpace: 8,
    rems: pxToRem,
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  html, body {
    min-height: 100vh;
    background: ${theme.colors.background};
  }
`

export const FontStyle = createGlobalStyle`  
  @font-face {
    font-family: 'Roboto';
    src: url(${DMSans}) format('truetype');
    font-display: swap;
  }
`

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <FontStyle />
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
)

export default App
