import React from 'react';

function SignIn() {
  return <div>
    <section>
    <h1 className='text-6xl font-bold mb-6  leading-relaxed top-1/4 left-1/4 flex justify-center  m-auto text-black'>
          <strong className="text-9xl font-kalam text-center mt-10 text-customOrange">Way</strong>
          <strong className="text-9xl font-kalam text-center mt-10 text-custbleu">ToGo</strong>
        </h1>
    </section>
    <section className='flex justify-center  m-auto'>
    <form 
  id="registration-form" 
  className="bg-white p-6 rounded-lg shadow-lg mx-auto mt-16 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 "
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


    </section>
  </div>;
}

export default SignIn;