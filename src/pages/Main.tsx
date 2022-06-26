import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Card, { CardProps } from '../components/Card';
import { RecommendCardProps } from '../components/RecommendCard';
import Slider from '../components/Slider';
import RecommendSlider from '../components/RecommendSlider';
import BottomNavigation from '../components/BottomNavigation';
import LoadingButton from '../components/LoadingButton';

const StWrapper = styled.div``;

const StEntireActivity = styled.div`
  padding: 0px 24px;
  padding-bottom: 36px;

  h2:first-child {
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.6px;
    margin: 0px;
    padding: 0px;
    color: inherit;
  }
`;

const StGridWrapper = styled.div`
  width: 100%;
  margin-bottom: 36px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 16px;
`;

const StButton = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0;
  position: relative;

  text-align: center;
  text-decoration: none;
  border-color: black;
  width: auto;
  touch-action: manipulation;

  font-family: 'Circular', -apple-system, 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue',
    sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  padding: 14px 24px;
  border: none;
  background: #222222;
  color: #ffffff;
  contain: paint;
`;

const StButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;

const StNavigationWrapper = styled.div<{ hide: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  transition: 0.4s ease;
  transform: ${(props) => props.hide && 'translateY(60px)'};
`;

const StSliderWrapper = styled.div`
  margin-bottom: 36px;
`;

const StMainTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #ffffff;
  color: #222222;

  h1 {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-align: center;
    align-self: center;

    font-weight: 600;
    font-size: 22px;
    line-height: 26px;

    margin-bottom: 0;
    padding: 16px 44px;
  }
`;

const StMainContentWrapper = styled.div<{ url: string }>`
  height: 530px;
  margin-bottom: 36px;

  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StRecommendSliderWrapper = styled.div`
  position: relative;
  bottom: -400px;
`;

const StDescription = styled.div`
  margin-right: 8px;
  margin-bottom: 36px;
  padding: 0px 24px;

  font-size: 14px;
  line-height: 18px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-weight: 400;
  color: #222222;

  a {
    color: #222222;
    text-decoration: none;
    outline: none;
    span {
      padding-left: 5px;
      text-decoration: underline;
    }
  }
`;

const dummyCardInfo = {
  desc: '완벽한 뉴욕 휴가 계획하기',
  reviewCount: 139,
  reviewRating: 4.99,
  price: 11688,
  nation: '미국',
  thumbnail:
    'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg',
};

const dummyCardInfoList: CardProps[] = Array(10).fill(dummyCardInfo);
const dummyList: RecommendCardProps[] = [
  {
    desc: '완벽한 뉴욕 휴가 계획하기',
    reviewCount: 139,
    reviewRating: 4.99,
    hostName: 'David',
    thumbnail:
      'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg',
    isLiked: false,
  },
  {
    desc: '완벽한 뉴욕 휴가 계획하기',
    reviewCount: 139,
    reviewRating: 4.99,
    hostName: 'David',
    thumbnail: 'https://a0.muscache.com/im/pictures/87c3668d-f128-4ff3-87a0-f8362280c986.jpg',
    isLiked: false,
  },
];

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const [pageY, setPageY] = useState<number>(0);
  const [cardList, setCardList] = useState<CardProps[]>([]);
  const [recommendIdx, setRecommendIdx] = useState<number>(0);

  const documentRef = useRef(document);

  useEffect(() => {
    setCardList(dummyCardInfoList);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      const deltaY = pageYOffset - pageY;
      const isHide = pageYOffset !== 0 && deltaY >= 0;
      setHide(isHide);
      setPageY(pageYOffset);
    };

    documentRef.current.addEventListener('scroll', handleScroll);
  }, [pageY]);

  const handleClickButton = () => {
    // api 붙이면서 로직 수정 할 것!
    setIsLoading(true);
    setTimeout(() => {
      setCardList([...cardList, ...dummyCardInfoList]);
      setIsLoading(false);
    }, 1000);
  };

  const handleRecommendIdx = (index: number) => {
    setRecommendIdx(index);
  };

  return (
    <StWrapper>
      <StMainTitle>
        <h1>현지인이 호스팅하는 잊지 못할 액티비티</h1>
      </StMainTitle>
      <StMainContentWrapper url={dummyList[recommendIdx].thumbnail}>
        <StRecommendSliderWrapper>
          <RecommendSlider cardList={dummyList} onChangeIdx={handleRecommendIdx} />
        </StRecommendSliderWrapper>
      </StMainContentWrapper>
      <StDescription>
        예약하기 전에 코로나19 관련 여행 저한 사항을
        <br /> 확인하세요.
        <a href="https://www.airbnb.co.kr/help/topic/1418">
          <span>자세히 알아보기</span>
        </a>
      </StDescription>
      <StSliderWrapper>
        <Slider label="오늘 진행되는 체험" cardList={dummyCardInfoList} />
      </StSliderWrapper>
      <StSliderWrapper>
        <Slider label="독특한 개성으로 높은 평점을 받은 체험" cardList={dummyCardInfoList} />
      </StSliderWrapper>
      <StEntireActivity>
        <h2>모든 체험</h2>
        <StGridWrapper>
          {cardList.map((cardInfo) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Card {...cardInfo} />
          ))}
        </StGridWrapper>
        <StButtonWrapper>
          {isLoading ? <LoadingButton /> : <StButton onClick={handleClickButton}>더 보기</StButton>}
        </StButtonWrapper>
      </StEntireActivity>
      <StNavigationWrapper hide={hide}>
        <BottomNavigation />
      </StNavigationWrapper>
    </StWrapper>
  );
}
