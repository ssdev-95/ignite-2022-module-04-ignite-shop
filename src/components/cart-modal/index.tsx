import { useState, useMemo } from 'react'
import Image from 'next/image'
import { X as XIcon, Handbag } from 'phosphor-react'
import axios from 'axios'

import { Loader } from '../loader'
import { useCart } from '../../contexts/cart'
import { formatPrice } from '../../utils/priceFormat'

import {
  ModalOverlay,
  ModalBody,
  CloseButton,
  CartItem,
  CartList,
  Summary,
  ImageContainer,
  CheckoutButton
} from './styles'

interface ModalProps {
  onClose: () => void
}

export function Cart({onClose}:ModalProps) {
  const { cart, removeProductFromCart } = useCart()
  const [isPerformingCheckout, setIsPerformingCheckout] = useState(false)

  const totalAmount = useMemo(() => {
	  return cart.reduce((acc, curr) => {
		  const normalized = Number(
			  curr.price.replace('$', '')
      )

      return acc + normalized
    }, 0)
  }, [cart])

  async function handleBuyManyProducts() {
	  try {
		  setIsPerformingCheckout(true)

      const response = await axios.post(
			  '/api/checkout',{
				  lineItems: cart.map((product) => {
					  const {priceId: price, quantity} = product

					  return { price, quantity }
          })
        }
      )

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch {
		  alert('Falied to perform operation: BUY_OPERATION')
      setIsPerformingCheckout(false)
    }
  }

  return (
	  <ModalOverlay>
		  <ModalBody>
			  <CloseButton onClick={onClose}>
				  <XIcon
					  size={28}
            weight="bold"
          />
        </CloseButton>

        {!cart.length ? (
			   <CartList>
				   <Handbag
					   size={128}
						 color="#4e4e4e"
						 weight="duotone"
					 />
				 </CartList>
			 ) : (
          <CartList>
				  {cart.map(product => (
					  <CartItem key={product.id}>
						  <ImageContainer>
  						  <Image
  							  src={product.imageURL}
   								width={64}
	  							height={67}
                    alt=""
                  />
                </ImageContainer>

						  <div>
  						  <p>{product.name}</p>

                  <strong>{product.price}</strong>
	
                  <button
								  onClick={
									  () => removeProductFromCart(product.id)
                    }
                  >
								  REMOVE
                  </button>
                </div>
              </CartItem>
            ))}
          </CartList>
        )}

        <Summary>
				  <p>
					  quantity
            <span>{cart.length}</span>
          </p>

          <strong>
					  total
            <span>{formatPrice(totalAmount*100)}</span>
          </strong>
        </Summary>

        <CheckoutButton
				  disabled={!cart.length || isPerformingCheckout}
          onClick={handleBuyManyProducts}
        >
				  {isPerformingCheckout ? (
					  <Loader small />
          ) : (
					  !cart.length ? (
  					  <span>Go Shopping</span>
  					) : (
  					  <span>Checkout</span>
            ))}
        </CheckoutButton>
      </ModalBody>
    </ModalOverlay>
  )
}
