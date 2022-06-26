import styled, { keyframes } from 'styled-components';

const StIndicatorButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  text-decoration: none;
  border-color: black;
  width: 93.48px;
  height: 48px;
  touch-action: manipulation;
  font-family: 'Circular', -apple-system, 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue',
    sans-serif;

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;

  border: none;
  background: #dddddd;
`;

const loader10g = keyframes`
    0% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 1);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.2);
    }
`;

const loader10m = keyframes`
    0% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    50% {
      background-color: rgba(255, 255, 255, 1);
    }
    75% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.2);
    }`;

const loader10d = keyframes`
    0% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    25% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    50% {
      background-color: rgba(255, 255, 255, 0.2);
    }
    75% {
      background-color: rgba(255, 255, 255, 1);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.2);
    }`;

const StIndicator = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  animation: ${loader10m} 1.2s ease-in-out infinite;

  ::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -20px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    animation: ${loader10g} 1.2s ease-in-out infinite;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 20px;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    animation: ${loader10d} 1.2s ease-in-out infinite;
  }
`;

function LoadingButton() {
  return (
    <StIndicatorButton>
      <StIndicator />
    </StIndicatorButton>
  );
}

export default LoadingButton;
