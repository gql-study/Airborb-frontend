/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import RecommendCard, { RecommendCardProps } from './RecommendCard';

const StContainer = styled.div`
  .swiper-slide:first-child {
    padding-left: 24px;
  }
`;

interface RecommendSliderProps {
  cardList: RecommendCardProps[];
  onChangeIdx: (index: number) => void;
}

function RecommendSlider(props: RecommendSliderProps) {
  const { cardList, onChangeIdx } = props;

  return (
    <StContainer>
      <Swiper
        slidesPerView="auto"
        modules={[Scrollbar]}
        scrollbar={{ draggable: true, el: null }}
        spaceBetween={12}
        onSlideChange={(e) => onChangeIdx(e.activeIndex)}
      >
        {cardList.map((cardInfo) => (
          <SwiperSlide style={{ flexShrink: 'unset' }}>
            <RecommendCard {...cardInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StContainer>
  );
}

export default RecommendSlider;
