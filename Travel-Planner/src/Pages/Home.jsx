import React from 'react';
import { useNavigate } from 'react-router-dom';
import newYearTravel from '../assets/images/new-year-travel.jpg'; 
import Footer from './Footer';
import image1 from '../assets/images/traveller-destination-marketing-1.77.jpg';
import image2 from '../assets/images/travel-promo-vector-design-tour-260nw-2172252889.webp';
import image3 from '../assets/images/Forest_Lodge-0148-103721-min_1896958863.jpg';
import image4 from '../assets/images/istockphoto-922762614-612x612.jpg';

function Home() {
  const navigate = useNavigate();
  document.addEventListener('DOMContentLoaded' , function(){

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(fram){

        fram.preventDefault();


       
        const email = document.getElementById('email').Value.trim();
        const password = document.getElementById('password').Value.trim();
        var isValid = true ;
        const messages = [];
        
        if(!email.include('@')||!email.include('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }
        if(password.length < 8 ) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }
        feedbackDiv.style.display = "block";
        if(isValid){
            feedbackDiv.textContent("Registration successful!");
            feedbackDiv.style.color = "#28a745";
        }else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }


    });
    
    
});
const handleCreatePlannerClick = () => {
  navigate('./Search'); 
};
  return (
    <div>
      
      <section className="relative bg-blue-200 h-screen flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${newYearTravel})` }}></div>
        <div className="relative z-10 text-white p-6 max-w-xl">
        <h1 className="text-5xl font-bold mb-6  top-1/4 left-1/4 transform -translate-x-30 -translate-y-31 text-black">
  Travel made simpler, every step of the way.
</h1>
<p className="text-2xl leading-relaxed  mb-8  transform -translate-x-32 -translate-y-33">
  Imagine a single place to plan, track, and enhance your journey. With real-time updates and personalized recommendations, 
  <strong className="text-3xl font-kalam mt-4 text-customOrange"> Way</strong>
  <strong className="text-3xl font-kalam mt-4 text-custbleu">ToGo </strong> 
  makes every trip smoother, so you can focus on the adventure. Ready to go? Your next destination is waiting.
</p>
          <button  onClick={handleCreatePlannerClick} className="bg-red-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition">
            Create My Planner
          </button>
        </div>
      </section>

      
      <section className="p-6 bg-white">
  <h1 className='text-5xl font-bold mb-6 leading-relaxed top-1/4 left-1/4 transform translate-x-35 text-black'>
    What <strong className="font-kalam mt-4 text-customOrange"> Way</strong>
    <strong className="font-kalam mt-4 text-custbleu">ToGo</strong> Can Do for You:
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
   
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:translate-y-3 hover:shadow-xl">
      <img src={image1} alt="Traveller Destination Marketing" className="w-full h-40 object-cover mb-4 rounded-md" />
      <h1 className="text-2xl font-bold mb-2">Search for Destinations</h1>
      <p className="text-lg leading-relaxed text-bleuWite">
        Explore top destinations by city or country. Find the perfect place to visit, whether it's a hidden gem or a well-known hotspot.
      </p>
    </div>

   
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:translate-y-3 hover:shadow-xl">
      <img src={image2} alt="Travel Promo" className="w-full h-40 object-cover mb-4 rounded-md" />
      <h1 className="text-2xl font-bold mb-2">Fetch Flight Offers</h1>
      <p className="text-lg leading-relaxed text-bleuWite">
        Get the best flight deals instantly. Compare prices, select your dates, and book with ease.
      </p>
    </div>

    
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:translate-y-3 hover:shadow-xl">
      <img src={image3} alt="Hotel Accommodations" className="w-full h-40 object-cover mb-4 rounded-md" />
      <h1 className="text-2xl font-bold mb-2">Fetch Hotel Accommodations</h1>
      <p className="text-lg leading-relaxed text-bleuWite">
        Discover a wide range of hotel options. From luxury stays to budget-friendly choices, find accommodations that suit your style and needs.
      </p>
    </div>

   
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:translate-y-3 hover:shadow-xl">
      <img src={image4} alt="City Information" className="w-full h-40 object-cover mb-4 rounded-md" />
      <h1 className="text-2xl font-bold mb-2">Get City Information</h1>
      <p className="text-lg leading-relaxed text-bleuWite">
        Explore detailed information about cities. Get to know local attractions, culture, weather, and more.
      </p>
    </div>

  </div>
</section>

      <section className='bg-newbleu'>
        
        <h1 className='text-5xl font-bold mb-6  leading-relaxed top-1/4 left-1/4 transform translate-x-35 text-black'>Welcome Back to <strong className=" font-kalam mt-4 text-customOrange"> Way</strong>
        <strong className=" font-kalam mt-4 text-custbleu">ToGo</strong> !</h1>
        <p className=' font-bold mb-6 leading-relaxed  top-1/4 left-1/4 transform translate-x-36 text-black'>Sign in to access your personalized travel plans, manage bookings, and get tailored recommendations.</p>
        <form 
  id="registration-form" 
  className="bg-white p-6 rounded-lg shadow-lg mx-auto mt-16 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3"
>
  <div className="flex flex-col space-y-4">
    <div className="flex flex-col">
      <label htmlFor="email" className="text-gray-700">Email:</label>
      <input 
        type="email" 
        id="email" 
        required 
        className="border border-gray-300 p-2 rounded-lg"
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="password" className="text-gray-700">Password:</label>
      <input 
        type="password" 
        id="password" 
        required 
        className="border border-gray-300 p-2 rounded-lg"
      />
    </div>

    <button 
      type="submit" 
      className="bg-red-500 text-white py-2 px-4 rounded-lg mx-auto"
    >
      Sign In
    </button>
  </div>
  <div id="form-feedback" className="mt-4"></div>
</form>
<h3 className='font-bold mb-6 leading-relaxed  top-1/4 left-1/4 transform translate-x-36 text-black'>Don’t have an account? [Create one now] and start planning your next adventure!</h3>
</section>
<section>
<Footer />
</section>

    </div>
  );
}

export default Home;

