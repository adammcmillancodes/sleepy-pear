import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg``;

export const SearchIcon = React.forwardRef(({ className, onClick }, ref) => (
  <StyledSvg
    onClick={onClick}
    className={className}
    ref={ref}
    fill="none"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="6.5" stroke="black" />
    <line x1="11.3536" y1="11.6464" x2="19.3536" y2="19.6464" stroke="black" />
  </StyledSvg>
));

export default SearchIcon;
