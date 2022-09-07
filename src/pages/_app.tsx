import { AppProps } from 'next/app'
import Image from 'next/image'
import { Header, Container } from '../styles/pages/app'
import { globalStyles } from '../styles/globals'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src="/logo.svg" width={120} height={80} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
