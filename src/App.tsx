import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import client from './apollo/client';
import theme from './styles/theme';
import Router from './pages/Router';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
