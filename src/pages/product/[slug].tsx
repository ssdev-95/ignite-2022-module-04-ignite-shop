import { GetStaticPaths, GetStaticProps } from 'next'

export default function Details() {
  return <p>lol</p>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)

  return {
    props: {},
    revalidate: 60 * 60 * 24,
  }
}
