import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'

import {HomeContainer, Product} from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css'

import ExplorerTShirt from '../assets/explorer-t-shirt.png'
import IgniteTShirt from '../assets/igniter-abord-t-shirt.png'
import MarathonTShirt from '../assets/marathon-t-shirt.png'
import IgniteLabTShirt from '../assets/ignite-lab-t-shirt.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
	  slides: {
		  perView: 1,
			spacing: 48
		}
	})

  return (
	  <HomeContainer
		  ref={sliderRef}
			className="keen-slider"
		>
		  <Product className="keen-slider__slide">
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

			<Product className="keen-slider__slide">
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

			<Product className="keen-slider__slide">
			  <Image
				  src={MarathonTShirt.src}
					width={520}
					height={480}
					alt=""
				/>

				<footer>
				  <strong>MarathonTShirt</strong>

					<span>R$ 79,90</span>
				</footer>
			</Product>

			<Product className="keen-slider__slide">
			  <Image
				  src={IgniteLabTShirt.src}
					width={520}
					height={480}
					alt=""
				/>

				<footer>
				  <strong>IgniteLabTShirt</strong>

	  			<span>R$ 79,90</span>
				</footer>
			</Product>
		</HomeContainer>
	)
}
