import { useState } from 'react';
import styled from 'styled-components';
import Star from '../assets/svgIcons/Star';
import RecommendHeart from '../assets/svgIcons/RecommendHeart';

const StWrapper = styled.div`
  width: 320px;
  height: 105px;

  display: flex;
  overflow: hidden;
  background-color: #ffffff;

  border-style: solid;
  border-color: transparent;
  border-radius: 12px;
  border: 1px solid #dddddd;
`;

const StFlexbox = styled.div`
  display: flex;
  margin-bottom: 3px;
  justify-content: space-between;
`;

const StImageBox = styled.div`
  width: 64px;
  margin: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 8px;
  }
`;

const StLikeButton = styled.button<{ isLiked: boolean }>`
  background-color: transparent;
  border: none;

  & > svg {
    fill: ${(props) => (props.isLiked ? '#FF385C' : '#FFFFFF')};
  }
`;

const StStar = styled(Star)`
  display: flex;
`;

const StInformation = styled.div`
  width: calc(100% - 88px);

  display: flex;
  flex-direction: column;

  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const StReviewRating = styled.span`
  font-size: 12px;
  font-weight: 300;
`;

const StReviewCount = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.foggy};
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

const StHostName = styled.span`
  font-size: 12px;
  font-weight: 300;

  margin-top: 3px;
  margin-bottom: 2px;
`;

export interface RecommendCardProps {
  desc: string;
  reviewCount: number;
  reviewRating: number;
  thumbnail: string;
  hostName: string;
  isLiked: boolean;
}

function RecommendCard(props: RecommendCardProps) {
  const { desc, reviewCount, reviewRating, thumbnail, isLiked: isDefaultLiked, hostName } = props;
  const [isLiked, setIsLiked] = useState<boolean>(isDefaultLiked);

  const handleClickLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <StWrapper>
      <StImageBox>
        <img src={thumbnail} alt={desc} />
      </StImageBox>
      <StInformation>
        <StFlexbox style={{ alignItems: 'center' }}>
          <div>
            <StStar />
            <StReviewRating>{reviewRating}</StReviewRating>
            <StReviewCount>({reviewCount})</StReviewCount>
          </div>
          <StLikeButton isLiked={isLiked} onClick={handleClickLike}>
            <RecommendHeart />
          </StLikeButton>
        </StFlexbox>
        <StCardDesc>{desc}</StCardDesc>
        <StHostName>호스트:{hostName}</StHostName>
      </StInformation>
    </StWrapper>
  );
}

export default RecommendCard;
