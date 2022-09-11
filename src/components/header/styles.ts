import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  maxWidth: '1440px',
  padding: '2rem 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const CartButton = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  color: '$gray100',
  position: 'relative',

  '&:hover': {
    color: '$green300'
  },

  div: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 64,
    border: '4px solid $gray900',
    backgroundColor: '$green500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -14,
    right: -14
  }
})
