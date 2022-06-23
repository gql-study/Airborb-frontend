import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import client from './apollo/client';
import theme from './styles/theme';
import Slider from './components/Slider';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Slider />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
