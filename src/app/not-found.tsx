import { Button } from '@/components/ui/button'
import Text from '@/components/ui/text'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className="w-full h-full flex flex-col items-center justify-center mx-0 my-auto">
			<Text as="h1" size="xl">
				404 Not Found
			</Text>
			<Text as="h2" size="lg">
				Could not find this page
			</Text>
			<Button size="lg">
				<Link href="/">Return Home</Link>
			</Button>
		</div>
	)
}

export default NotFound
