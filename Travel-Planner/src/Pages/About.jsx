import React from 'react';
import Footer from './Footer';

function About() {
  return <div>
    <section className='bg-newbleu'>
      <h1 className='text-6xl font-bold mb-6  leading-relaxed top-1/4 flex justify-center  m-auto text-black'>
          <strong className="text-9xl font-kalam text-center mt-10 text-customOrange">Way</strong>
          <strong className="text-9xl font-kalam text-center mt-10 text-custbleu">ToGo</strong>
        </h1>
      <p className="text-2xl leading-relaxed  mb-8  "><strong className="text-3xl font-kalam text-center mt-10 text-customOrange">Way</strong>
      <strong className="text-3xl font-kalam text-center mt-10 text-custbleu">ToGo</strong> is your ultimate travel companion. Plan your dream trip, discover amazing destinations, find the best flights, and book your stay—all in one app. Whether you’re looking for adventure, relaxation, or a mix of both, <strong className="text-3xl font-kalam text-center mt-10 text-customOrange">Way</strong>
      <strong className="text-3xl font-kalam text-center mt-10 text-custbleu">ToGo</strong> helps you plan every detail with ease.</p>
      <div className='bg-newbleu p-8 rounded-lg shadow-lg  mx-auto mt-16'>
        <h4 className='text-6xl font-bold mb-6  leading-relaxed top-1/4 left-1/4 transform translate-x-35 text-customOrange'>What can do for you :</h4>
      <h6 className='text-2xl font-bold mb-6'>1.Search Destinations</h6>
      <p className="text-xl leading-relaxed mb-6">Easily search for destinations based on city names, vacation types, or popular landmarks.</p>
      <h6 className='text-2xl  font-bold mb-6'>2.Flight & Hotel Offers</h6>
      <p className="text-xl leading-relaxed mb-6">Find the best flight deals and top-rated hotel accommodations tailored to your trip.</p>
      <h6 className='text-2xl font-bold mb-6'>3.Itinerary Planner</h6>
      <p className="text-xl leading-relaxed mb-6">Create personalized itineraries, including activities, destinations, and bookings</p>
      <h6 className='text-2xl font-bold mb-6'>4.Weather Updates</h6>
      <p className="text-xl leading-relaxed ">Check the latest weather updates for your chosen destinations, ensuring you're always prepared.</p>
      </div>
    </section>
   <section>
    <Footer/>
   </section>
      
    
  </div>;
}

export default About;