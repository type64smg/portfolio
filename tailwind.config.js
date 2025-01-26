module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enables dark mode via a 'dark' class
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212', // Custom dark background color
        'dark-text': '#E0E0E0', // Lighter text for dark mode
        'dark-primary': '#FFB74D', // Accent color for highlights (a golden color)
        'dark-border': '#444444', // Custom border color for dark mode
        'dark-card': '#1F1F1F', // Background color for cards or containers in dark mode
        'light-bg': '#FFFFFF', // Light background for light mode
        'light-text': '#333333', // Dark text for light mode
        'light-primary': '#FFB74D', // Accent color for highlights (golden)
        'light-border': '#DDDDDD', // Border color for light mode
      },
      // Add transition for background and text color changes
      transitionProperty: {
        'background-color': 'background-color',
        'color': 'color',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
