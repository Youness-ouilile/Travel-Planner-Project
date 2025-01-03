import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-white p-6 mt-10">
        <div> <h1 className="translate-y-3 translate-x-20">
          <strong className="text-4xl font-kalam text-center mt-10 text-customOrange">Way</strong>
          <strong className="text-4xl font-kalam text-center mt-10 text-custbleu">ToGo</strong>
        </h1></div>
      <div className=" mx-auto text-center text-black">
       

       
        <div className="mt-4 leading-relaxed">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-customOrange mx-4 "
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-customOrange mx-4"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-customOrange mx-4"
          >
            <i className="fab fa-twitter text-2xl mb-8 "></i>
          </a> 
          <p>&copy; {new Date().getFullYear()} 2006-2024, WayToGo Technologies, Inc. All rights reserved.WayToGo® is a registered trademark of WayToGo Technologies, Inc. Other trademarks held by their respective owners.[Cookie Preferences]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
