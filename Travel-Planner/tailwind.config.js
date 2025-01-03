module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '200': '1200px', 
        '12':'1500px',
        '13':'1300px',
        '14':'1400px',
        '30':'300px',
        '32':'300px',
        '35': '550px',
        '36':'500px',
        '40':'620px',
        '41':'650px',
        '45':'250px',
        '46':'100px',
        

        '100': '-70px',
        '101': '-23px',
        '102': '-0px',
        '103': '-46px',
        '55': '-16px',
        '31':'80px',
        '33':'60px',
        '50':'15px',
      },
      colors: {
        customOrange: '#F86222', 
        custbleu: '#1F727A',
        bleuWite: '#1F727A',
        newbleu: '#ADEDFF'
      },
      fontFamily: {
        kalam: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
};