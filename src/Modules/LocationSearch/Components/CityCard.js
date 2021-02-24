import React, { useState } from 'react';
import { CityDetails, CitySelect, CityName, ProvinceName } from '../styles/CityCard.style';

const CityCard = (props) => {
  
  const { city, onClick } = props;
  const [selected, setSelected] = useState(false);

  const handleClick = (e) => {
    onClick(e, city);
    setSelected(!selected);
  };

  return (
    <>
      {city && (
        <CityDetails>
          <CitySelect onClick={handleClick} data-city={city.name} selected={selected}>
            <CityName>
              {city.name}
            </CityName>
            <ProvinceName>
              {city.province}
            </ProvinceName>
          </CitySelect>
        </CityDetails>
      )}
    </>
  );
};

export default CityCard;
