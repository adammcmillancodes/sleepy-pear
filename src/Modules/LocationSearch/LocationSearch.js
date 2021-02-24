/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import CityCard from './Components/CityCard';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import placeholderImage from '../../assets/images/placeholderImage.jpg';
import cities from '../../dataSet';
import {
  LocationBar,
  Location,
  LocationToggle,
  Wrapper,
  Overlay,
  ModalContainer,
  SearchBox,
  LocationForm,
  InputWrap,
  LocationInput,
  IconWrap,
  InputLabel,
  PlaceholderContainer,
  Placeholder,
  ListWrap,
  CityList,
  ButtonContainer,
  SaveButton,
  ResultsContainer,
  CloseModal
} from './styles/LocationSearch.styles';

const LocationSearch = () => {
  const [userInput, setUserInput] = useState();
  const [userLocation, setUserLocation] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [allCities, setAllCities] = useState([]);


  useEffect(()=> {
    if(userLocation){
      setAllCities(cities)
    }
  },[userLocation, allCities])

  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    const enteredCity = userInput;
    setUserLocation(enteredCity);
    setAllCities(cities)
  };

  const handleDealerSelect = (e, city) => {
    e.preventDefault();
    e.persist();
    setSelectedCities(
      !selectedCities.includes(city)
        ? [...selectedCities, city]
        : selectedCities.filter((city) => city.name !== city.name)
    );
  };

  const closeModal = () => {
    modalToggle();
    setUserInput('');
  };

  const openModal = () => {
    setUserLocation('');
    modalToggle();
    setUserInput('');
  };

  const handleCityConfirm = (e) => {
    e.preventDefault();
    e.persist();
    modalToggle();
  };

  return (
    <>
      {!modalOpen && (
        <LocationBar>
          <Wrapper>
            <LocationToggle onClick={openModal}>
              Click To Search
            </LocationToggle>
            {selectedCities?.length === 0 && (
              <Location>No location set</Location> 
            )}
            {selectedCities?.length === 1 && (
              <Location>{selectedCities[0].name}</Location>
            )}
            {selectedCities?.length > 1 && (
              <Location>Multiple Locations Set</Location>
            )}
          </Wrapper>
        </LocationBar>
      )}
      {modalOpen && (
        <Overlay>
          <ModalContainer>
            <SearchBox>
              <LocationForm onSubmit={handleSubmit}>
                <InputWrap>
                  <IconWrap
                    type="submit"
                    value="Submit"
                    aria-label="Click to search for a list of Audi Citys near you"
                  >
                    <SearchIcon />
                  </IconWrap>
                  <LocationInput
                    type="text"
                    id="locationSearch"
                    onChange={handleChange}
                    placeholder="Location Search"
                    value={userInput}
                  />
                </InputWrap>
                <InputLabel htmlFor="locationSearch" aria-hidden="false" className="sr-only">
                  "Enter Location here"
                </InputLabel>
              </LocationForm>
              <ResultsContainer>
                {allCities?.length >=1 && (
                  <ListWrap>
                    <CityList>
                      {allCities?.map((city) => (
                        <CityCard city={city} onClick={handleDealerSelect} key={city.areaCode} />
                      ))}
                    </CityList>
                  </ListWrap>
                )}
                <ButtonContainer>
                  <SaveButton disabled={selectedCities.length === 0} onClick={handleCityConfirm}>
                    Save Location(s)
                  </SaveButton>
                </ButtonContainer>
              </ResultsContainer>
            </SearchBox>
            <PlaceholderContainer>
              <Placeholder src={placeholderImage} alt="placeholder image"/>
            </PlaceholderContainer>
            <CloseModal onClick={closeModal}>
              <CloseIcon aria-label="close" />
            </CloseModal>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default LocationSearch;
