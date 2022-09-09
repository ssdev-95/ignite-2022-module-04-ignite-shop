import { styled, showup } from '../../styles'

export const Product = styled('a', {
  background: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',
  cursor: 'pointer',
  borderRadius: 8,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',

  img: {
    objectFit: 'cover',
		transition: 'opacity 0.25s cubic-bezier(0.7,0.7,0.7,0.7)',
		animation: `${showup} 750ms 1 cubic-bezier(0.7,0.7,0.7,0.7)`
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    padding: '1.5rem 2rem',
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
      fontSize: '$md',
    },

    span: {
      fontSize: '$2xl',
      fobtWeight: 'bold',
      color: '$green300',
      display: 'block',
      marginTop: 4,
    },

    div: {
      padding: 8,
      borderRadius: 4,
      backgroundColor: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
