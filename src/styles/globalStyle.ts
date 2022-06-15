import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

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
