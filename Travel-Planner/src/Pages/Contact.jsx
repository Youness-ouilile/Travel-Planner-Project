import React from 'react';
import Footer from './Footer';

function Contact() {
  return <div>
    <section className='bg-newbleu'>
      <h1 className='text-6xl font-bold mb-6  leading-relaxed top-1/4 left-1/4 flex justify-center  m-auto text-black'>
          <strong className="text-9xl font-kalam text-center mt-10 text-customOrange">Way</strong>
          <strong className="text-9xl font-kalam text-center mt-10 text-custbleu">ToGo</strong>
        </h1>
      <p className="text-3xl leading-relaxed  mb-8  ">Have a Question? We’re Here to Help!</p>
      <h4 className='text-5xl font-bold mb-6  leading-relaxed top-1/4 left-1/4 transform translate-x-35 text-customOrange'>Contact Information Section</h4>
      <div className='bg-newbleu p-8 rounded-lg shadow-lg  mx-auto mt-16'>
      <h5 className='text-3xl font-bold mb-6'>Here, you’ll display the primary ways users can reach you.</h5>
      <h6 className='text-2xl font-bold mb-6'>1. Email Contact :</h6>
      <p className="text-xl leading-relaxed mb-6">For general inquiries or support :</p>
      <p className="text-xl leading-relaxed mb-6">-Email us a : ouilileyouness@gamil.com</p>
      <h6 className='text-2xl  font-bold mb-6'>2. Phone Contact :</h6>
      <p className="text-xl leading-relaxed mb-6">Customer Service Line :</p>
      <p className="text-xl leading-relaxed mb-6">-Call us at : +1-800-123-4567(Available Monday to Friday, 9 AM - 5 PM)</p>
      <h6 className='text-2xl font-bold mb-6'>3. Address :</h6>
      <p className="text-xl leading-relaxed mb-6"> <strong className="text-3xl font-kalam text-center mt-10 text-customOrange">Way</strong>
      <strong className="text-3xl font-kalam text-center mt-10 text-custbleu">ToGo</strong> Headquarters :</p>
      <p className="text-xl leading-relaxed mb-6">-123 Adventure St., Suite 200</p>
      <p className="text-xl leading-relaxed mb-6">-Travel City, 98765, Country</p>
      </div>
      </section>
      <section>
        <Footer/>
      </section>
  </div>;
}

export default Contact;