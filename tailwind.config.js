module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  plugins: [require("daisyui")],
  
  theme: {
    extend: {
      colors: {
        blue: '#008cea',
        teal: "#008cea",
        cyan: "#0089ff",
        pink: '#ff49db',
        purple: '#8e73ff',
        green: '#34eb3d',
        white: '#ffffff',
        yellow: '#fff620',
        rose: '#87547a',
        magenta: '#ff49db',
        mint:'#c6fcec'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(200, 100, 0, 0.2)',
      }
    },
  }
};
