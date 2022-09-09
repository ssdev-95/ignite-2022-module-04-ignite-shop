import { GetStaticProps } from 'next'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import { HomeContainer } from '../styles/pages/home'
import { ProductCard } from '../components/product-card'
import { formatPrice } from '../utils/priceFormat'

import 'keen-slider/keen-slider.min.css'

interface Product {
  id: string
  name: string
  imageURL: string
  price: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <ProductCard
				  key={product.id}
					product={product}
				/>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: formatPrice(price.unit_amount),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 3,
  }
}
