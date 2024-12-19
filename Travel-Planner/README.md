Travel Planner - Frontend Capstone Project
Project Overview
Travel Planner is a web application designed to help users plan their trips by searching for destinations, viewing detailed information, and organizing their travel itineraries. As a frontend developer, this project allows you to practice integrating external APIs, managing user input, and building a responsive and visually appealing user interface.

The application uses the Amadeus API to fetch travel data, including destination information, flight offers, and hotel accommodations. With features like itinerary planning, destination search, and weather details, this application aims to simplify the travel planning process for users.

Key Features
1. Fetch Destination Data
Use the Amadeus API to search for destinations based on user queries.
Display a list of matching destinations with:
City Name
Country
Representative Image
Top Attractions
2. Destination Details View
When a user clicks on a destination, display:
Top Attractions and activities in the destination.
Flight Offers including prices and airlines.
Hotel Accommodations including prices and amenities.
Weather Information (using the OpenWeatherMap API, if necessary).
3. Itinerary Planner
Users can create, save, and manage itineraries with:
Adding destinations, flights, and accommodations.
Specifying dates and times for activities and accommodations.
4. Search Functionality
Implement a search bar to search for destinations by name or keywords (e.g., "Paris" or "beach vacation").
Display a user-friendly message when no results are found.
5. Responsive UI Design
Use Tailwind CSS to create a mobile-friendly layout.
Ensure that the app is usable across different screen sizes (desktop, tablet, mobile).
6. Error Handling
Handle scenarios such as network issues, invalid API responses, and no search results.
Display user-friendly error messages and alerts.
Tech Stack
Frontend: React.js
CSS Framework: Tailwind CSS (optional, or use custom CSS)
APIs:
Amadeus API: For flight offers, hotel accommodations, and destination data.
OpenWeatherMap API: For weather data.
Optional: Teleport API for additional destination images.
API Integration
1. Fetch Destinations by City or Country
Endpoint: https://test.api.amadeus.com/v1/reference-data/locations?keyword=<destination>&subType=CITY
Returns a list of destinations that match the search query.
2. Fetch Flight Offers
Endpoint: https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=<origin>&destinationLocationCode=<destination>&departureDate=<date>&adults=1
Returns available flight offers including prices and airlines.
3. Fetch Hotel Accommodations
Endpoint: https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=<destination>
Returns a list of available hotels and accommodations.
4. Get City Information
Endpoint: https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=<destination>
Provides detailed information about the city, including geographical details and attractions.
Project Setup
Prerequisites
Node.js (version 14 or higher)
A code editor like VS Code

