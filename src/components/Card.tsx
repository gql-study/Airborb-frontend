/* eslint-disable react/require-default-props */
import styled from 'styled-components';
import { useState } from 'react';
import Heart from '../assets/svgIcons/Heart';
import Star from '../assets/svgIcons/Star';

const StFlexbox = styled.div`
  display: flex;
  gap: 2px;
`;

const StCard = styled.a`
  width: 157px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: 'Cereal';
`;

const StImageBox = styled.div<{ url: string }>`
  position: relative;
  width: 100%;
  height: 210px;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  border-radius: 18px;
`;

const StLikeButton = styled.button<{ isLiked: boolean }>`
  position: absolute;
  top: 3px;
  right: 3px;

  background-color: transparent;
  border: none;

  & > svg {
    fill: ${(props) => (props.isLiked ? '#FF385C' : 'rgba(0, 0, 0, 0.5)')};
  }
`;
const StStar = styled(Star)`
  display: flex;
`;

const StInformation = styled(StFlexbox)`
  flex-direction: column;
  gap: 8px;
`;

const StReviewRating = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

const StReviewCount = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.foggy};
`;

const StNation = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.foggy};
  &::before {
    content: ' · ';
  }
`;

const StCardDesc = styled.p`
  display: -webkit-box;
  font-size: 14px;
  line-height: 1.2em;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-wrap: break-word;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const StPrice = styled.p`
  font-size: 14px;
  font-weight: bolder;
  &::after {
    content: '/인';
    font-weight: 300;
  }
`;

export interface CardProps {
  desc: string;
  reviewCount: number;
  reviewRating: number;
  price: number;
  nation: string;
  thumbnail: string;
  isLiked: boolean;
}

function Card(props: CardProps) {
  const {
    desc,
    reviewCount,
    reviewRating,
    price,
    nation,
    thumbnail,
    isLiked: isDefaultLiked,
  } = props;
  const [isLiked, setIsLiked] = useState(isDefaultLiked);

  const handleClickLike = () => {
    setIsLiked((prevLikeState) => !prevLikeState);
  };

  return (
    <StCard>
      <StImageBox url={thumbnail}>
        <StLikeButton isLiked={isLiked} onClick={handleClickLike}>
          <Heart width="24px" height="24px" stroke="white" />
        </StLikeButton>
      </StImageBox>
      <StInformation>
        <StFlexbox style={{ alignItems: 'center' }}>
          <StStar />
          <StReviewRating>{reviewRating}</StReviewRating>
          <StReviewCount>({reviewCount})</StReviewCount>
          <StNation>{nation}</StNation>
        </StFlexbox>
        <StCardDesc>{desc}</StCardDesc>
        <StPrice>₩{price.toLocaleString()}~</StPrice>
      </StInformation>
    </StCard>
  );
}

export default Card;
