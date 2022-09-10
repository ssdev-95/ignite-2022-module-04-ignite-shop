import { styled, showup } from '../'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1100,
  margin: '0 auto',

  '@media(max-width:869px)': {
    gridTemplateColumns: '1fr',
    padding: '1rem 1rem 2.5rem'
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
  padding: '0.25rem',

  backgroundImage: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    animation: `${showup} 750ms 1 cubic-bezier(0.7,0.7,0.7,0.7)`
  },

  '@media(max-width:869px)': {
    marginInline: 'auto',
    height: 500
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
    fontWeight: 500
  },

  span: {
    color: '$green300',
    fontSize: '$2xl',
    display: 'block',
    marginTop: '1rem',
    fontWeight: 700
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    margin: '2.5rem 0',
    lineHeight: 1.6,
    textAlign: 'justify'
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    minHeight: '3rem',
		
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',

    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    span: {
      color: '$white',
      display: 'block',
      fontSize: '$md',
      fontWeight: 'bold',
      marginTop: 0,
      lineHeight: 1.5
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    }
  }
})

export const Skeleton = styled('main', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
