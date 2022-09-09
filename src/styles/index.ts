import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  getCssText,
  globalCss,
  keyframes,
  createTheme,
  theme,
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6',

      white: '#f0f2f5',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    sm: '(max-width:411px)',
    md: '(max-width:869px)',
    lg: '(max-width:1024px)',
    xl: '(max-width:1440px)',
  },
})

export const showup = keyframes({
	'0%': { opacity:0 },
	'100%': { opacity: 1}
})
