import { useState } from 'react'
import { AppProps } from 'next/app'

import { Header } from '../components/header'
import { Cart } from '../components/cart-modal'

import { CartProvider } from '../contexts/cart'
import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/globals'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
	  <CartProvider>
		  {isCartOpen && (
			  <Cart onClose={()=>setIsCartOpen(false)} />
      )}
      <Container>
        <Header onModalOpen={()=>setIsCartOpen(true)}/>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

export default MyApp
