module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Ubuntu, sans-serif',
      ],
    },
    fontSize: {
      sm: '.875rem',
      '2xl': '1.5rem',
      '4xl': '2.25rem',
      '8xl': '6rem',
      'icon-small': '2.25rem',
      'icon-big': '10rem',
    },
    extend: {
      colors: {
        bgDark: "#18558c",
        bgLight: "#e4e4e4",
        primary: "#517daa",
        secondary: "#898989",
      },
    },
  },
  variants: {
    extend: {},
  },
};
