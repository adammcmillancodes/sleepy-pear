/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg``;

export const CloseIcon = React.forwardRef(({ className, onClick, color }, ref) => (
  <StyledSvg
    onClick={onClick}
    className={className}
    ref={ref}
    fill="none"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8227 0.177473C14.586 -0.0591577 14.2024 -0.0591577 13.9658 0.177473L0.177595 13.9656C-0.0590356 14.2022 -0.0590356 14.5859 0.177595 14.8225C0.295896 14.9409 0.450994 15 0.606062 15C0.76113 15 0.916199 14.9408 1.03453 14.8225L14.8227 1.03435C15.0593 0.797746 15.0593 0.414104 14.8227 0.177473Z"
      fill={color}
    />
    <path
      d="M14.8228 13.9659L1.03459 0.177717C0.797991 -0.0589136 0.414319 -0.0589136 0.177717 0.177717C-0.0589136 0.414319 -0.0589136 0.797961 0.177717 1.03459L13.9659 14.8228C14.0842 14.9411 14.2393 15.0002 14.3943 15.0002C14.5494 15.0002 14.7045 14.9411 14.8228 14.8228C15.0594 14.5861 15.0594 14.2025 14.8228 13.9659Z"
      fill={color}
    />
  </StyledSvg>
));

export default CloseIcon;
