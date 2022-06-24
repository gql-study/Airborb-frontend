import { useCallback, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import GallerySliderIcons from '../assets/svgIcons/GallerySliderIcons';
import MOCK_IMAGE_LIST from '../assets/svgIcons/images/GalleryImages';

const StGalleryWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 500px;
`;

const StImagesWrapper = styled.div`
  position: relative;
  overflow-x: scroll;
  display: flex;
  height: 100%;
`;

const StImage = styled.img`
  position: absolute;
  left: 0;

  width: 100%;
  height: 100%;
`;

const StSpareImage = styled(StImage)<{ direction: 'next' | 'prev' }>`
  visibility: hidden;

  ${({ direction }) =>
    direction === 'prev'
      ? css`
          left: -375px;
        `
      : css`
          right: -375px;
        `}
`;

const StCarouseDotWrapper = styled.nav`
  position: absolute;
  bottom: 5px;

  display: flex;
  justify-content: space-between;

  padding: 0 15px;
  width: 100%;
`;

const StCarouselDot = styled.button<{ isactive: boolean }>`
  border: none;
  background-color: ${({ isactive }) => (isactive ? 'white' : '#FFFFFF66')};
  width: 25px;
  height: 2px;
`;

export default function GallerySlider() {
  const GalleryMaxIndex = MOCK_IMAGE_LIST.length - 1;
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const getGalleryIndex = useCallback(
    (current: number, direction: 'next' | 'prev') => {
      if (direction === 'prev') {
        if (current === 0) return GalleryMaxIndex;
        return current - 1;
      }
      if (current === GalleryMaxIndex) return 0;
      return current + 1;
    },
    [GalleryMaxIndex],
  );

  const handleGalleryIndex = (direction: 'next' | 'prev') => {
    setGalleryIndex((current) => getGalleryIndex(current, direction));
  };

  const prevGalleryIndex = useMemo(() => {
    return getGalleryIndex(galleryIndex, 'prev');
  }, [galleryIndex, getGalleryIndex]);

  const nextGalleryIndex = useMemo(() => {
    return getGalleryIndex(galleryIndex, 'next');
  }, [galleryIndex, getGalleryIndex]);

  const arrow = (direction: 'prev' | 'next') => {
    return (
      <GallerySliderIcons.IconArrow direction={direction} onGalleryIndex={handleGalleryIndex} />
    );
  };

  useEffect(() => {
    const carouselTimer = setTimeout(() => {
      setGalleryIndex((current) => getGalleryIndex(current, 'next'));
    }, 5000);

    return () => {
      clearTimeout(carouselTimer);
    };
  }, [getGalleryIndex, galleryIndex]);

  return (
    <StGalleryWrapper>
      {arrow('prev')}

      <StImagesWrapper>
        <StSpareImage
          direction="prev"
          src={MOCK_IMAGE_LIST[prevGalleryIndex].url}
          alt={MOCK_IMAGE_LIST[prevGalleryIndex].alt}
        />
        <StImage src={MOCK_IMAGE_LIST[galleryIndex].url} alt={MOCK_IMAGE_LIST[galleryIndex].alt} />
        <StSpareImage
          direction="next"
          src={MOCK_IMAGE_LIST[nextGalleryIndex].url}
          alt={MOCK_IMAGE_LIST[nextGalleryIndex].alt}
        />
      </StImagesWrapper>
      {arrow('next')}

      {/* 슬라이더 하단 점박이들 */}
      <StCarouseDotWrapper>
        {MOCK_IMAGE_LIST.map((image, idx) => (
          <StCarouselDot
            isactive={galleryIndex === idx}
            key={image.alt}
            onClick={() => setGalleryIndex(idx)}
          />
        ))}
      </StCarouseDotWrapper>
    </StGalleryWrapper>
  );
}
