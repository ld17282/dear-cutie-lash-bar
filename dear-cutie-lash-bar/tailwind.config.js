/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: 'rgba(255, 255, 255, 0.87)',
        link: '#646cff',
        hoverLink: '#535bf2',
        customGradient: {
          'start': '#F19FDF',
          'middle': '#EBE4D4',
          'end': '#FFDDE5',
        },
      },
      lineHeight: {
        tighter: '1.1',
      },
      fontSize: {
        '3xl': '3.2em',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      padding: {
        '2.5': '0.6em 1.2em',
      },
      minWidth: {
        '320': '320px',
      },
      minHeight: {
        'screen-vh': '100vh',
      },
      extend: {
        screens: {
          'light-mode': { raw: '(prefers-color-scheme: light)' },
        },
      },
    },
  },
  plugins: [],
}



