/** @type {import('tailwindcss').Config} */
export default {
  content: ['*', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        Cinzel: ['Cinzel', 'serif'],
        'Cinzel-Decorative': ['Cinzel Decorative', 'cursive']
      },
      colors: {
        primaryDark: '#AB0086',
        primaryLight: '#FFDCe5',
        secondaryDark: '#F09FDF',
        secondaryLight: '#EBE4D4',
        link: '#646cff',
        hoverLink: '#535bf2',
        customGradient: {
          start: '#F19FDF',
          middle: '#EBE4D4',
          end: '#FFDDE5'
        }
      },
      lineHeight: {
        tighter: '1.1'
      },
      fontSize: {
        '3xl': '3.2em'
      },
      borderWidth: {
        DEFAULT: '1px'
      },
      borderRadius: {
        DEFAULT: '8px'
      },
      padding: {
        2.5: '0.6em 1.2em'
      },
      minWidth: {
        320: '320px'
      },
      minHeight: {
        'screen-vh': '100vh'
      },
      height: {
        100: '800px'
      },
      animation: {
        rotate: 'rotateCounterClockwise 30s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite'
      },
      keyframes: {
        rotateCounterClockwise: {
          from: {
            transform: 'rotate(0deg)'
          },
          to: {
            transform: 'rotate(-360deg)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' }
        }
      },
      extend: {
        screens: {
          'light-mode': { raw: '(prefers-color-scheme: light)' }
        }
      }
    }
  },
  plugins: []
}
