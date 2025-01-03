import React, { useState } from 'react';
import { fetchLocationData, fetchFlightOffers, fetchHotelOffers, fetchCityInfo } from '../services/amadeusService';
import Footer from './Footer';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [flightOffers, setFlightOffers] = useState(null);
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [errorFlights, setErrorFlights] = useState(null);

  const [cityCode, setCityCode] = useState('');
  const [hotelOffers, setHotelOffers] = useState(null);
  const [loadingHotels, setLoadingHotels] = useState(false);
  const [errorHotels, setErrorHotels] = useState(null);

  const [cityName, setCityName] = useState('');
  const [cityInfo, setCityInfo] = useState(null);
  const [loadingCityInfo, setLoadingCityInfo] = useState(false);
  const [errorCityInfo, setErrorCityInfo] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchLocationData(keyword);
      setLocationData(data);
    } catch (err) {
      setError('Sorry, we couldn’t find any locations.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleFlightSearch = async () => {
    setLoadingFlights(true);
    setErrorFlights(null);
    try {
      const data = await fetchFlightOffers(origin, destination, departureDate, adults);
      setFlightOffers(data);
    } catch (err) {
      setErrorFlights('Sorry, we couldn’t find any flight offers.');
    } finally {
      setLoadingFlights(false);
    }
  };

  const handleHotelSearch = async () => {
    setLoadingHotels(true);
    setErrorHotels(null);
    try {
      const data = await fetchHotelOffers(cityCode);
      setHotelOffers(data);
    } catch (err) {
      setErrorHotels('Sorry, we couldn’t find any hotel offers.');
    } finally {
      setLoadingHotels(false);
    }
  };

  const handleCityInfoSearch = async () => {
    setLoadingCityInfo(true);
    setErrorCityInfo(null);
    try {
      const data = await fetchCityInfo(cityName);
      setCityInfo(data);
    } catch (err) {
      setErrorCityInfo('Sorry, we couldn’t find city information.');
    } finally {
      setLoadingCityInfo(false);
    }
  };

  return (
    <div>
      <section>
        <div className='ml-8 p-6'>
          <h1 className='ml-8 flex justify-center  m-auto text-3xl font-kalam'>
            Explore our wide range of destinations and find the perfect place to visit for your next adventure!
          </h1>
        </div>
      </section>
      
    
      <section className='bg-white p-6 rounded-lg shadow-lg mx-auto mt-16 mb-12 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3'>
        <h2 className='text-xl font-semibold text-center mb-4 text-gray-800'>Location Search</h2>
        <div className='flex justify-center items-center'>
          <input
            type="text"
            placeholder="Enter Location (e.g., Paris)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border p-2 rounded-lg mr-2"
          />
          <button onClick={handleSearch} className='bg-red-500 text-white py-2 px-4 rounded-lg'>
            Search
          </button>
        </div>
        
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {locationData && (
          <div>
            <h3>Results for "{keyword}":</h3>
            <ul>
              {locationData.data.map((location, index) => (
                <li key={index}>
                  <strong>{location.name}</strong>
                  <p>{location.city_name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

     
      <section className='bg-gray-100 p-6 rounded-lg shadow-md mx-auto mt-12 mb-12 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3'>
        <h2 className='text-xl font-semibold text-center mb-4 text-gray-800'>Flight Search</h2>
        <div className='flex justify-center items-center'>
          <input
            type="text"
            placeholder="Origin Location Code (e.g., LON)"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border p-2 rounded-lg mr-2"
          />
          <input
            type="text"
            placeholder="Destination Location Code (e.g., PAR)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border p-2 rounded-lg mr-2"
          />
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="border p-2 rounded-lg mr-2"
          />
          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="border p-2 rounded-lg mr-2"
          />
        </div>
        <button onClick={handleFlightSearch} className='bg-red-500 text-white py-2 px-4 rounded-lg mt-4'>
          Search Flights
        </button>

        {loadingFlights && <p className="mt-4">Loading Flights...</p>}
        {errorFlights && <p className="mt-4 text-red-500">{errorFlights}</p>}

        {flightOffers && (
          <div>
            <h3>Flight Offers:</h3>
            <ul>
              {flightOffers.data.map((offer, index) => (
                <li key={index}>
                  <p><strong>Price: </strong> {offer.price.grandTotal} {offer.price.currency}</p>
                  <p><strong>Departure: </strong> {offer.itineraries[0].segments[0].departure.at}</p>
                  <p><strong>Arrival: </strong> {offer.itineraries[0].segments[0].arrival.at}</p>
                  <p><strong>Airline: </strong> {offer.itineraries[0].segments[0].carrierCode}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      
      <section className='bg-white p-6 rounded-lg shadow-md mx-auto mt-12 mb-12 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3'>
        <h2 className='text-xl font-semibold text-center mb-4 text-gray-800'>Hotel Search</h2>
        <div className='flex justify-center items-center'>
          <input
            type="text"
            className="border p-2 rounded-lg mr-2"
            placeholder="Enter City Code (e.g., PAR)"
            value={cityCode}
            onChange={(e) => setCityCode(e.target.value)}
          />
        </div>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg mt-4' onClick={handleHotelSearch}>
          Search Hotels
        </button>

        {loadingHotels && <p className="mt-4">Loading Hotels...</p>}
        {errorHotels && <p className="mt-4 text-red-500">{errorHotels}</p>}

        {hotelOffers && (
          <div>
            <h3>Hotel Offers:</h3>
            <ul>
              {hotelOffers.data.map((hotel, index) => (
                <li key={index}>
                  <p><strong>Hotel: </strong>{hotel.hotel.name}</p>
                  <p><strong>Address: </strong>{hotel.hotel.address.lines.join(', ')}</p>
                  <p><strong>Price: </strong>{hotel.offers[0].price.total} {hotel.offers[0].price.currency}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

     
      <section className='bg-gray-200 p-6 rounded-lg shadow-md mx-auto mt-12 mb-12 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3'>
        <h2 className='text-xl font-semibold text-center mb-4 text-gray-800'>City Information</h2>
        <div className='flex justify-center items-center'>
          <input
            type="text"
            className="border p-2 rounded-lg mr-2"
            placeholder="Enter City (e.g., Paris)"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg mt-4' onClick={handleCityInfoSearch}>
          Search City Info
        </button>

        {loadingCityInfo && <p className="mt-4">Loading City Info...</p>}
        {errorCityInfo && <p className="mt-4 text-red-500">{errorCityInfo}</p>}

        {cityInfo && (
          <div>
            <h3>City Information for "{cityName}":</h3>
            <ul>
              {cityInfo.data.map((city, index) => (
                <li key={index}>
                  <p><strong>City: </strong>{city.name}</p>
                  <p><strong>Country: </strong>{city.country}</p>
                  <p><strong>Latitude: </strong>{city.location.latitude}</p>
                  <p><strong>Longitude: </strong>{city.location.longitude}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      
      <Footer />
    </div>
  );
};

export default Search;


