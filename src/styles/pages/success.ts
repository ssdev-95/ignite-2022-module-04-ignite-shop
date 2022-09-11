import { styled } from '../'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  height: 656,


  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    textAlign: 'center',
    lineHeight: 1.4,
    maxWidth: 560,
    marginTop: '2rem',

    '@media(max-width:869px)': {
      maxWidth: '90vw'
    }
  },

  strong: {
    fontSize: '$xl',
  },

  a: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',

    display: 'block',
    marginTop: '5rem',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ImageContainer = styled('div', {
  width: 125,
  maxWidth: '100%',
  height: 125,

  border: '3px solid $gray900',
  borderRadius: 300,
  padding: '0.25rem',

  backgroundImage: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '6px 6px 20px 10px $gray900',

  img: {
    objectFit: 'contain',//'cover',
    zIndex: 0
  },

  '& + div': {
    marginLeft: -40
  }
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  margin: '4rem auto 0',
})
