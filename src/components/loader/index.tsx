import { LoaderWrapper } from './styles'

interface LoaderProps {
  small?: boolean
}

export function Loader({ small=false }:LoaderProps) {
  return (
	  <LoaderWrapper
		  className={small ? 'small' : ''}
		/>
  )
}
