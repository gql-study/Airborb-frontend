/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import Card, { CardProps } from './Card';
import LinkArrow from '../assets/svgIcons/LinkArrow';

const StContainer = styled.div`
  .swiper-slide:first-child {
    padding-left: 24px;
  }
`;

const StLabel = styled.a`
  display: flex;
  align-items: baseline;

  font-size: 22px;
  line-height: 26px;
  font-family: 'Cereal';
  font-weight: 500;
  text-decoration: none;
  color: inherit;

  padding: 0 24px;
  margin-bottom: 16px;
  word-break: keep-all;
`;

interface SliderProps {
  label: string;
  cardList: CardProps[];
}

function Slider(props: SliderProps) {
  const { label, cardList } = props;

  return (
    <StContainer>
      <StLabel href="#exprience">
        <h2>{label}</h2>
        <LinkArrow />
      </StLabel>
      <Swiper
        slidesPerView="auto"
        modules={[Scrollbar]}
        scrollbar={{ draggable: true, el: null }}
        spaceBetween={12}
      >
        {cardList.map((cardInfo) => (
          <SwiperSlide style={{ flexShrink: 'unset' }}>
            <Card {...cardInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StContainer>
  );
}

export default Slider;
