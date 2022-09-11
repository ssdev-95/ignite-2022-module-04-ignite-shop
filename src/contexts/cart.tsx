import { useState, createContext, useContext, ReactNode } from 'react'

type Product = {
  id:string
	priceId:string
	price:string
	name:string
	imageURL:string
	quantity:number
}

type ContextData = {
  cart:Product[]

	addProductToCart: (product:Product) => void
	removeProductFromCart: (id:string) => void
}

type ContextProps = {
  children:ReactNode
}

const CartContext = createContext({} as ContextData)

export const CartProvider = ({children}:ContextProps) => {
  const [cart, setCart] = useState<Product[]>([])

  function addProductToCart(product:Product) {
	  const productAlreadyInCart = cart.find(
		  item => item.id === product.id
    )

    if(!!productAlreadyInCart) {
		  return
    }

	  const updatedCart = [...cart, product]
    setCart(updatedCart)
  }

  function removeProductFromCart(id:string) {
	  const updatedCart = cart.filter(
		  (product) => product.id !== id
    )
	  setCart(updatedCart)
  }

  return (
	  <CartContext.Provider value={{
		  cart,

      addProductToCart,
      removeProductFromCart
    }}>
		  {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
