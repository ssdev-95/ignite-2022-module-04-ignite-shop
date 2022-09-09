import { AppProps } from 'next/app'
import { Header } from '../components/header'
import { Container } from '../styles/pages/app'
import { globalStyles } from '../styles/globals'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
