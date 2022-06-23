/* eslint-disable react/jsx-props-no-spreading */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import Card from './Card';

const cardInfo = {
  desc: '완벽한 뉴욕 휴가 계획하기',
  reviewCount: 139,
  reviewRating: 4.99,
  price: 11688,
  nation: '미국',
  thumbnail:
    'https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-poster/original/e6de8fae-018d-4411-b0a3-81bbb6e4e5c3.jpeg',
};

const slideStyle = {
  flexShrink: 'unset',
};

function Slider() {
  return (
    <div style={{ padding: 20 }}>
      <Swiper
        slidesPerView={2}
        modules={[Scrollbar]}
        scrollbar={{ draggable: true, el: null }}
        spaceBetween={12}
      >
        {[1, 2, 3, 4].map(() => (
          <SwiperSlide style={slideStyle}>
            <Card {...cardInfo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
