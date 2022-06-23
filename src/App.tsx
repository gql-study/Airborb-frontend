/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import client from './apollo/client';
import theme from './styles/theme';
import Card from './components/Card';

function App() {
  const cardInfo = {
    desc: '완벽한 뉴욕 휴가 계획하기',
    reviewCount: 139,
    reviewRating: 4.99,
    price: 11688,
    nation: '미국',
    thumbnail:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg',
  };
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Card {...cardInfo} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
