import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from'../lib/stripe'
import { SuccessContainer, ImageContainer, ProductsContainer } from '../styles/pages/success'


export const getServerSideProps:GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string

  const checkout = await stripe.checkout.sessions.retrieve(sessionId, {
	  expand: [
  		'line_items',
      'line_items.data.price.product'
    ]
  })

  console.log(checkout.line_items.data[0])

  const lineItems = checkout.line_items.data as Stripe.LineItem[]
  const products = lineItems.map((item) => {
	  const product = item.price.product as Stripe.Product

    return {
		  id: product.id,
		  imageURL:product.images[0]
    }
  })

  return {
	  props: {
		  customer: checkout.customer_details.name,
      products
    }
  }
}

type SuccessProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function SuccessPage({ customer, products }:SuccessProps) {
  return (
	  <>
      <Head>
			  <title>Bought succeeded | IgniteShop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
  		  <h1>Bought succeeded</h1>

        <ProductsContainer>
				  {products.map((product:any) => (
					  <ImageContainer key={product.id}>
						  <Image
							  src={product.imageURL}
                width={120}
                height={110}
                alt=""
              />
            </ImageContainer>
          ))}
        </ProductsContainer>

        <p>Uhhull, <strong>{customer}</strong>, your{products.length > 1 ? 's' : ''} <strong>{products.length} T Shirt{products.length > 1 ? 's' : ''}</strong> {products.length > 1 ? 'are' : 'is'} comming to you, stay tunned!</p>

        <Link href="/" prefetch={false}>
			  <a>Back to catalog</a>
        </Link>
      </SuccessContainer>
    </>
  )
}
