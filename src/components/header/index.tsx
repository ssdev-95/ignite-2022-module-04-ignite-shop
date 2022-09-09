import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { X as XIcon } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { theme } from '../../styles'

export function Header() {
  const { pathname } = useRouter()

  return (
	  <HeaderContainer>
	    <Image
		    src="/logo.svg"
  			width={120}
	  		height={80}
		  	alt=""
		  />

			{pathname.includes('product') && (
			  <Link href="/" >
			    <a>
				    <XIcon
					    size={24}
						  color={theme.colors['gray300'].value}
					  />
				  </a>
  			</Link>
			)}
		</HeaderContainer>
	)
}
