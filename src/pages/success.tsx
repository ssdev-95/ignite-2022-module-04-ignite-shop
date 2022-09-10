import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from'../lib/stripe'
import { SuccessContainer, ImageContainer } from '../styles/pages/success'


export const getServerSideProps:GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id as string

  const checkout = await stripe.checkout.sessions.retrieve(sessionId, {
	  expand: [
  		'line_items',
      'line_items.data.price.product'
    ]
  })

  console.log(checkout.line_items.data[0])

  const product = checkout.line_items.data[0].price.product as Stripe.Product

  return {
	  props: {
		  customer: checkout.customer_details.name,
      product: {
			  name: product.name,
        imageURL: product.images[0]
      }
    }
  }
}

type SuccessProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function SuccessPage({ customer, product }:SuccessProps) {
  return (
	  <>
      <Head>
		   <title>Bought succeeded | IgniteShop</title>
			 <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
  		<h1>Bought succeeded</h1>

        <ImageContainer>
			  <Image
				  src={product.imageURL}
            width={120}
            height={110}
            alt=""
          />
        </ImageContainer>

        <p>Uhhull, <strong>{customer}</strong>, your <strong>{product.name}</strong> is going to your house, stay tunned!</p>

        <Link href="/" prefetch={false}>
			  <a>Back to catalog</a>
        </Link>
      </SuccessContainer>
    </>
  )
}
