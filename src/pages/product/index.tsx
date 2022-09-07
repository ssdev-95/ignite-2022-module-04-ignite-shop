import { GetServerSideProps } from 'next'

export default function Redirect() {
  return <p>lol</p>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}
