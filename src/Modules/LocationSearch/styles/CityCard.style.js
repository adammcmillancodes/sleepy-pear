import styled, { css } from 'styled-components';

export const CityDetails = styled.li.attrs({className: 'CityDetails'})`
  padding: 0;
  background: transparent;
  font-family: sans-serif;
  font-size: 13px;
  line-height: 18px;
  border-bottom: 0.5px solid black;
  &:hover {
    background: #fff;
    p,
    span {
      font-weight: bold;
    }
  }

`;

export const CitySelect = styled.button.attrs({className: 'CitySelect'})`
  width: 100%;
  border: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 25px;
  ${(props) => {
    if (props.selected)
      return css`
        background: #fff;
        p,
        span {
          font-weight: bold;
        }
      `;
  }}
`;

export const CityName = styled.span.attrs({className: 'CityName'})``;

export const ProvinceName = styled.span.attrs({className: 'ProvinceName'})``;
