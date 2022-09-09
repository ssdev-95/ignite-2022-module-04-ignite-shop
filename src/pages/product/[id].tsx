import type { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import {stripe} from '../../lib/stripe'
import { Loader } from '../../components/loader'
import { ProductDetails, ProductContainer, ImageContainer, Skeleton } from '../../styles/pages/product'
import { formatPrice } from '../../utils/priceFormat'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.list()

  const paths = response.data.map((product) => ({
	  params: { id: product.id }
  }))

  return {
	  paths: [
		  ...paths,
      { params: { id: 'prod_2iduskaoandnd292f' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string
  const response = await stripe.products.retrieve(id, {
	  expand: ['default_price'],
  })

  const defaultPrice = response.default_price as Stripe.Price

  const product = {
	  id,
    priceId: defaultPrice.id,
    price: formatPrice(defaultPrice.unit_amount),
	  name: response.name,
    description: response.description,
    imageURL: response.images[0]
  }

  return {
    props: {
		  product
    },
    revalidate: 60 * 60 * 24 * 7,
  }
}

type ProductProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if(isFallback) {
	  return (
		  <Skeleton>
			  <Loader/>
      </Skeleton>
    )
  }

  return (
	  <ProductContainer>
		  <ImageContainer>
			  <Image
				  src={product.imageURL}
  			  width={520}
	   			height={480}
		  		alt=""
		  	/>
      </ImageContainer>

      <ProductDetails>
    		<h1>{product.name}</h1>

        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>BUY NOW</button>
      </ProductDetails>
    </ProductContainer>
  )
}
