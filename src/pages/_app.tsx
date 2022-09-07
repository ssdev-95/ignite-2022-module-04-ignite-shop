import {AppProps} from "next/app"
import Image from 'next/image'
import { Header, Container } from '../styles/pages/app'
import {globalStyles} from "../styles/globals"

import Logo from '../assets/logo.svg'

globalStyles()

function MyApp({ Component, pageProps }:AppProps) {
  return (
	  <Container>
		  <Header>
			  <Image src={Logo} alt="" />
			</Header>
	
		  <Component {...pageProps} />
		</Container>
	)
}

export default MyApp
