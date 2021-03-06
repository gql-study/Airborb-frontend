import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import client from './apollo/client';
import theme from './styles/theme';
import Slider from './components/Slider';

const dummyCardInfo = {
  desc: '완벽한 뉴욕 휴가 계획하기',
  reviewCount: 139,
  reviewRating: 4.99,
  price: 11688,
  nation: '미국',
  thumbnail:
    'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg',
};

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Slider
          label="전 세계 현지 호스트의 도움을 받아 여행을 계획해보세요"
          cardList={Array(10).fill(dummyCardInfo)}
        />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
