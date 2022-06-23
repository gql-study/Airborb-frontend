import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Medium from '../assets/fonts/AirbnbCereal_W_Md.otf';
import Bold from '../assets/fonts/AirbnbCereal_W_Bd.otf';
import Light from '../assets/fonts/AirbnbCereal_W_Lt.otf';

const GlobalStyle = createGlobalStyle`
	${reset}

  @font-face {
    font-family: 'Cereal';
    src: url(${Medium}) format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Cereal';
    src: url(${Bold}) format('opentype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Cereal';
    src: url(${Light}) format('opentype');
    font-weight: 300;
  }

  #root, body, html {
    width: 375px;
    height: 100%;
    margin: 0 auto;
  }
  * {
    box-sizing: border-box;
    ::-webkit-scrollbar{ display:none; }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
	}
  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
