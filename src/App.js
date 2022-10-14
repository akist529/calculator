import React from 'react';
import Desktop from './desktop.js';
import Calculator from './calculator.js';
import './App.css';
import '@react95/icons/icons.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { styleReset } from 'react95'
// pick a theme of your choice
import original from 'react95/dist/themes/original'
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
  }
`

function App() {
  let date = new Date().toLocaleTimeString().split(/:| /)
  date.splice(2, 1)
  date.splice(1, 0, ':')
  date.splice(3, 0, ' ')
  date = date.join('')

  const [time, setTime] = React.useState(date)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(() => {
        let date = new Date().toLocaleTimeString().split(/:| /)
        date.splice(2, 1)
        date.splice(1, 0, ':')
        date.splice(3, 0, ' ')
        date = date.join('')

        return date
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Desktop time={time} />
        <Calculator />
      </ThemeProvider>
    </div>
  );
}

export default App;
