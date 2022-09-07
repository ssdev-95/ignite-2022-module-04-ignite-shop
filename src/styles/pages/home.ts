import { styled } from '../'

export const HomeContainer = styled('main', {
	width: '100%',
	maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
	minHeight: '656px',
	display: 'flex',
	gap: '3rem',
	marginLeft: 'auto',
	overflowY: 'hidden'
})

export const Product = styled('a', {
	background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
	padding: '0.25rem',
	cursor: 'pointer',
	borderRadius: 8,
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flex: 'none',

	img: {
		objectFit: 'cover'
	},

	footer: {
		position: 'absolute',
		bottom: '0.25rem',
		left: '0.25rem',
		right: '0.25rem',

		padding: '2rem',
		borderRadius: 6,
		overflow: 'hidden',
	
		backgroundColor: 'rgba(0,0,0,0.6)',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		transform: 'translateY(112%)',
		opacity: 0,
		
		transition: 'all 0.25s cubic-bezier(0.7,0.7,0.7,0.7)',

		strong: {
			fontSize: '$lg'
		},

		span: {
			fontSize: '$xl',
			fobtWeight: 'bold',
			color: '$green300'
		}
	},

	'&:hover': {
		footer: {
			transform: 'translateY(0%)',
			opacity: 1
		}
	}
})
