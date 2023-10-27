import { Link } from '@/components/ui/link'
import { cn } from '@/utils/functions'
import { PropsWithChildren, ReactNode } from 'react'

export type TSidebarLink = PropsWithChildren<{
	href: string
	icon: ReactNode
}>

export const SidebarLink = ({ children, href, icon }: TSidebarLink) => {
	return (
		<div
			className={cn(
				'py-4 pl-6 pr-12 rounded-3xl',
				'hover:cursor-pointer',
				'bg-slate-200 hover:bg-slate-300',
				'dark:bg-slate-800 dark:hover:bg-slate-900',
			)}
		>
			<Link href={href} icon={icon} className={cn('flex items-center gap-3')}>
				{children}
			</Link>
		</div>
	)
}
