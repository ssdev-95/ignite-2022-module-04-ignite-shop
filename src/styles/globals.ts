import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
		scrollBehavior: 'smooth'
  },
  a: {
    color: '$gray100',
    textDecoration: 'none',
  },

	'a, button': {
		cursor: 'pointer'
	}
})
