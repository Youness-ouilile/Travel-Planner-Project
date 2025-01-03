import axios from 'axios';


const fetchLocationData = async (keyword) => {
  const apiKey = process.env.REACT_APP_AMADEUS_API_KEY;
  const url = `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${keyword}&subType=CITY`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.data;
};

const fetchFlightOffers = async (origin, destination, departureDate, adults) => {
  const apiKey = process.env.REACT_APP_AMADEUS_API_KEY;
  const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.data;
};
const fetchHotelOffers = async (cityCode) => {
  const apiKey = process.env.REACT_APP_AMADEUS_API_KEY;
  const url = `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${cityCode}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.data;
};
const fetchCityInfo = async (cityName) => {
  const apiKey = process.env.REACT_APP_AMADEUS_API_KEY;
  const url = `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${cityName}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.data;
};


export { fetchLocationData, fetchFlightOffers ,fetchHotelOffers ,fetchCityInfo};
