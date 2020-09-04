module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#0c122c',
        'dark-blue': '#1e2c69',
        'grayish-blue': '#848794',
        'pale-blue': '#dddbff',
        'pink-gradient-start': '#ffa399',
        'pink-gradient-end': '#ff4d97'
      },
      borderRadius: {
        'xxl': '6rem'
      },
      width: {
        '80': '20rem'
      },
      screens: {
        'xs': '375px'
      },
      backgroundImage: theme => ({
        'mobile-bg': "url('./assets/bg-mobile.png')",
        'desktop-bg': "url('./assets/bg-desktop.png')",
      })
    },
  },
  variants: {},
  plugins: [],
}
