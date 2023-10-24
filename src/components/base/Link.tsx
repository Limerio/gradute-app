import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/utils/functions'
import LinkNext from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

type LinkPropsWithToolTip = {
	tooltip: string
} & LinkProps

export const LinkWithTooltip = ({
	tooltip,
	...linkProps
}: LinkPropsWithToolTip) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link {...linkProps} />
			</TooltipTrigger>
			<TooltipContent>
				<p>{tooltip}</p>
			</TooltipContent>
		</Tooltip>
	)
}

type LinkProps = PropsWithChildren<{
	href: string
	className?: string
	icon?: ReactNode
}>

export const Link = ({ href, children, className, icon }: LinkProps) => {
	return (
		<LinkNext className={cn('flex items-center gap-1', className)} href={href}>
			{icon} {children}
		</LinkNext>
	)
}
