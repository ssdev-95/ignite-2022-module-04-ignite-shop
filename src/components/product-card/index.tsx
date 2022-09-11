import { useState, useEffect, MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartSimple } from 'phosphor-react'

import { useCart } from '../../contexts/cart'

import { Product } from './styles'
import { Loader } from '../loader'
import { theme } from '../../styles/index'

interface IProduct {
  id:string
	name:string
	imageURL:string
	price:string,
	priceId:string
}

interface CardProps {
  product:IProduct
}

export function ProductCard({ product }:CardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { addProductToCart } = useCart()

  useEffect(() => {
	  const timeout = setTimeout(() => {
		  setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  function handleAddToCart(event:MouseEvent) {
	  event.stopPropagation()

    const newCartProduct = {
		  ...product,
      quantity: 1
    }


    addProductToCart(newCartProduct)
  }

  return (
	  <Link
		  prefetch={false}
		  href={`/product/${product.id}`}
    >
  	  <Product className="keen-slider__slide">
			  {isLoading ? (<Loader />) : (
	  	    <Image
  			    src={product.imageURL}
  				  width={520}
	  		  	height={480}
		    		alt=""
	  	  	/>
        )}
		  
  			<footer>
			    <strong>
		  		  {product.name}
	  				<span>{product.price}</span>
  				</strong>

	  			<button onClick={handleAddToCart}>
  				  <ShoppingCartSimple
					    size={32}
				  		color={theme.colors.gray100.value}
			  		/>
		  		</button>
	  		</footer>
  		</Product>
    </Link>
  )
}
