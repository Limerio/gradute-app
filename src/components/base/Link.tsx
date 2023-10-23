import { cn } from '@/utils/functions'
import LinkNext from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
	href: string
	children: ReactNode
	className: string
}

const Link = ({ href, children, className }: LinkProps) => {
	return (
		<LinkNext className={cn('', className)} href={href}>
			{children}
		</LinkNext>
	)
}

export { Link }
