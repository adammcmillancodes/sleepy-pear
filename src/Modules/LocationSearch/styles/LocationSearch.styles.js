import styled, { css } from 'styled-components';

export const LocationBar = styled.div.attrs({className: 'LocationBar'})`
  width: 100%;
  background: black;
  padding: 60px 0;
`;

export const Wrapper = styled.div.attrs({className: 'Wrapper'})`
  width: 80%;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.p.attrs({className: 'Subtitle'})`
  color: #fff;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 18px;
    margin-bottom: 5px;
    color: #b3b3b3;

`;

export const Location = styled.p.attrs({className: 'Location'})`
  font-family: sans-serif;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  margin-right: 60px;
`;

export const LocationToggle = styled.button.attrs({className: 'LocationToggle'})`
  border: none;
  background: transparent;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
`;

export const ClearButton = styled.button.attrs({className: 'ClearButton'})`
  border: none;
  background: transparent;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  margin-left: 20px;
  line-height: 26px;
`;

export const InputClear = styled.button.attrs({className: 'InputClear'})`
  border: none;
  color: black;
  background: transparent;
  font-family: sans-serif;
  font-weight: bold;
  cursor: pointer;
  svg {
    width: 11px;
    height: 11px;
    path {
      fill: #000;
    }
  }
`;

export const Overlay = styled.div.attrs({className: 'Overlay'})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #454545;
  height: 100vh;
  padding: 4% 20px 0 20px;
  z-index: 1000;
`;

export const ModalContainer = styled.div.attrs({className: 'ModalContainer'})`
  position: relative;
  width: 90%;
  max-width: 1300px;
  margin: auto;
  display: flex;
  border: 1px solid white;
  height: 80%;
  flex-direction: row;
`;

export const SearchBox = styled.div.attrs({className: 'SearchBox'})`
  flex: 1 1 337px;
  background: #f2f2f2;
  padding: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LocationForm = styled.form.attrs({className: 'LocationForm'})`
  width: 100%;
  background: transparent;
  padding: 50px 25px 0 25px;
`;

export const LocationInput = styled.input.attrs({className: 'LocationInput'})`
  background: transparent;
  border: none;
  width: 100%;
  display: inline-block;
  padding: 10px;
  font-size: 16px;
  line-height: 18px;
  font-family: sans-serif;
  &::placeholder {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const InputWrap = styled.div.attrs({className: 'InputWrap'})`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const IconWrap = styled.button.attrs({className: 'IconWrap'})`
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const InputLabel = styled.label.attrs({className: 'InputLabel'})`
  text-align: center;
  color: #999;
  display: none;
`;

export const PlaceholderContainer = styled.div.attrs({className: 'PlaceholderContainer'})`
  flex: 1 1 75%;
  position: relative;
  height: 100%;
  width: 75%;
`;

export const Placeholder = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CloseModal = styled.button.attrs({className: 'CloseModal'})`
  border: none;
  display: inline-block;
  cursor: pointer;
  z-index: 10;
  width: 48px;
  height: 48px;
  background: #000;
  top: 12px;
  right: 12px;
  position: absolute;
  svg {
    width: 11px;
    height: 11px;
    path {
      fill: #fff;
    }
  }
`;

export const ResultsContainer = styled.div.attrs({className: 'ResultsContainer'})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: auto;
  height: calc(100% - 95px);
  flex-shrink: 1;
`;

export const ListWrap = styled.div.attrs({className: 'ListWrap'})`
  background: #fff;
  z-index: 10;
  height: auto;
  margin-top: 20px;
  height: 100%;
  flex-grow: 1;
  overflow: auto;
  min-width: 337px;
  overflow: auto;
  ${(props) => {
    if (props.children.props.children.length === 0) {
      return css`
        display: none;
      `;
    }
  }};
    ${(props) => {
      if (props.children.props.children.length === 0) {
        return css`
          display: block;
        `;
      }
    }};
`;

export const CityList = styled.ul.attrs({className: 'CityList'})`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 200px;
  max-height: 100%;
  overflow-y: auto;
  height: 100%;
`;

export const ButtonContainer = styled.div.attrs({className: 'ButtonContainer'})`
  padding: 40px 25px 28px 25px;
`;

export const SaveButton = styled.button.attrs({className: 'SaveButton'})`
  border: none;
  font-family: sans-serif;
  font-size: 16px;
  color: #fff;
  padding: 6px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  text-align: center;
  ${(props) => {
    if (props.disabled)
      return css`
        color: #d9d9d9;
        background: #b3b3b3;
      `;
  }}
`;