import {styled} from "../styles"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
	padding: '4px 8px',
	border: 0,
	borderRadius: 4,
	color: '#f0f2f5'
})

export default function Home() {
  return (
	  <Button>Hello world</Button>
	)
}
