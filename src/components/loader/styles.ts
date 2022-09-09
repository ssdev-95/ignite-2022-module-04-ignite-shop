import { styled, keyframes } from '../../styles'

const spin = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' }
})

export const LoaderWrapper = styled('div', {
	width: 48,
	height: 48,
	borderRadius: 56,
	position: 'relative',

	'&::after': {
		content: '',
		height: '100%',
		width: '100%',
		borderRadius: 'inherit',
		backgroundImage: 'linear-gradient(180deg, #f0f2f5, transparent)',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 10,
		animation: `${spin} 750ms infinite cubic-bezier(0.7,0.7,0.7,0.7)`
	},

	'&::before': {
		content: '',
		width: 'calc(100% - 4px)',
		height: 'calc(100% - 4px)',
		borderRadius: 'inherit',
		backgroundImage: 'linear-gradient(180deg,#1ea483 50%, #7465d4 100%)',
		zIndex: 33,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		mixBlendMode: 'overlay'
	}
})
