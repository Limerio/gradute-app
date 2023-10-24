import { cn } from '@/utils/functions'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

export type TSidebarLink = PropsWithChildren<{
	href: string
	icon: ReactNode
}>

export const SidebarLink = ({ children, href, icon }: TSidebarLink) => {
	return (
		<div
			className={cn(
				'py-4 pl-6 pr-12 rounded',
				'hover:cursor-pointer',
				'bg-slate-100 hover:bg-slate-200',
				'dark:bg-slate-800 dark:hover:bg-slate-900',
			)}
		>
			<Link href={href} className={cn('flex items-center gap-3')}>
				{icon} {children}
			</Link>
		</div>
	)
}
