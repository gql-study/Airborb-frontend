import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import client from './apollo/client';
import theme from './styles/theme';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
