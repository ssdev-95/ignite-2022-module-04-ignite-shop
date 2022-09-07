import Image from 'next/image'
import {HomeContainer, Product} from "../styles/pages/home";

import IgniteTShirt from '../assets/explorer-t-shirt.png'
import ExplorerTShirt from '../assets/igniter-abord-t-shirt.png'

export default function Home() {
  return (
	  <HomeContainer>
		  <Product>
			  <Image
				  src={ExplorerTShirt.src}
					width={520}
					height={480}
					alt=""
				/>
				<footer>
				  <strong>ExplorerTShirt</strong>
					<span>R$ 79,90</span>
				</footer>
			</Product>

			<Product>
			  <Image
				  src={IgniteTShirt.src}
					width={520}
					height={480}
					alt=""
				/>

				<footer>
				  <strong>IgniteTShirt</strong>

					<span>R$ 79,90</span>
				</footer>
			</Product>
		</HomeContainer>
	)
}
