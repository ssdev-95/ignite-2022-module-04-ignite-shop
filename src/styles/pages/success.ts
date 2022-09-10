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
  width: '100%',
  maxWidth: 138,
  height: 145,

  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  backgroundImage: 'linear-gradient(180deg,#1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})
