module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  plugins: [require("daisyui")],
  
  theme: {
    extend: {
      colors: {
        blue: '#008cea',
        teal: "#15e6e6",
        cyan: "#0089ff",
        pink: '#f525d2',
        purple: '#8e73ff',
        green: '#54ed18',
        white: '#ffffff',
        yellow: '#fff620',
        rose: '#87547a',
        magenta: '#bf05ed',
        mint:'#14e0b4'
        
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(200, 100, 0, 0.2)',
      },
      backgroundImage: {
        "hero-bg": "url('./images/coke_casette.jpg')",
      },
      spacing: {
        'half': '20rem',
      }
      


  }
}
};
