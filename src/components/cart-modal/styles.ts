import { styled,keyframes, showup } from '../../styles'

const slidein = keyframes({
  '0%': { marginRight: '-200%' },
  '100%': { marginRight: 0 }
})

export const ModalOverlay = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 5,
  backgroundColor: 'rgba(0,0,0,0.6)',
  animation: `${showup} 300ms 1 cubic-bezier(0 7,0.7,0.7,0.7)`
})

export const ModalBody = styled('div', {
  width: 411,
  maxWidth: '90%',
  minHeight: '100%',

  padding: '1.5rem',
  marginLeft: 'auto',

  backgroundColor: '$gray800',

  animation: `${slidein} 750ms 1 cubic-bezier(0.7,0.7,0.7,0.7)`,

  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  alignItems: 'flex-end',
})

export const CartList = styled('div', {
  flex: 1,
  width: '100%',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',

  svg: {
    margin: 'auto 0'
  }
})

export const CloseButton = styled('button', {
  flex: 'none',
  border: 0,
  padding: '0.25rem',
  color: '$gray300',
  lineHeight: 0,
	
  backgroundColor: 'transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    color: '$green500'
  }
})

export const CartItem = styled('div', {
  maxHeight: '7rem',
  width: '100%',
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1rem',
  
  '& > div': {
    minHeight: '100%',

    strong: {
      display: 'block',
      marginTop: '0.5rem',

      fontSize: '$lg'
    },

    button: {
      backgroundColor: 'transparent',
      border: 0,
      color: '$green500',

      display: 'block',
      marginTop: '1.2rem',

      '&:hover': {
        color: '$green300'
      }
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 69,
  height: 72,

  borderRadius: 8,
  padding: '0.25rem',

  backgroundImage: 'linear-gradient(180deg,#1ea483 0%,#7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }
})

export const Summary = styled('div', {
  width: '100%',

  'p, strong': {
    width: '100%',
    margin: '1rem 0',
    padding: '0.25rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  p: {
    fontSize: '$lg',
    span: {
      fontSize: '$lg'
    }
  },

  strong: {
    fontSize: '$xl',

    span: {
      fontSize: '$xl'
    }
  }
})

export const CheckoutButton = styled('button', {
  width:'100%',
  minHeight: '3.5rem',
  padding: '0.25rem',

  border: 0,
  borderRadius: 8,

  backgroundColor: '$green500',
	
  span: {
  	color: '$gray100',
  	fontSize: '$md',
	  fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300'
  },

  '&:disabled': {
    filter: 'brightness(0.6)'
  }
})
