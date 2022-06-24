import styled, { css } from 'styled-components';

interface IconArrowProps {
  direction: 'next' | 'prev';
  onGalleryIndex: (direction: 'next' | 'prev') => void;
}

const StSvg = styled.svg<{ direction: 'next' | 'prev' }>`
  position: absolute;
  z-index: 5;

  top: 250px;
  ${({ direction }) =>
    direction === 'prev'
      ? css`
          left: 5px;
        `
      : css`
          right: 5px;
        `}
  display: block;

  height: 19px;
  width: 19px;
  fill: rgb(255, 255, 255);
`;

function IconArrow(props: IconArrowProps) {
  const { direction, onGalleryIndex } = props;
  const arrow =
    direction === 'next' ? (
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    ) : (
      <path
        d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
        fillRule="evenodd"
      />
    );

  return (
    <StSvg
      onClick={() => onGalleryIndex(direction)}
      viewBox="0 0 18 18"
      role="img"
      aria-hidden="false"
      aria-label={direction}
      focusable="false"
      direction={direction}
    >
      {arrow}
    </StSvg>
  );
}

export default { IconArrow };
