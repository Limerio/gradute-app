import {
	SidebarLink,
	TSidebarLink,
	UserInfoSidebar,
} from '@/components/layout/Sidebar'
import { cn } from '@/utils/functions'
import { HomeIcon } from 'lucide-react'

export const Sidebar = () => {
	const sidebarLinks: TSidebarLink[] = [
		{
			href: '/',
			icon: <HomeIcon />,
			children: 'Home',
		},
	]

	return (
		<aside className={cn('flex flex-col gap-8', 'w-[250px] h-full p-5')}>
			<UserInfoSidebar />

			<nav className={cn('flex flex-col gap-2')}>
				<h1 className={cn('text-xl')}>Menu</h1>
				<div className={cn('flex flex-col gap-5')}>
					{sidebarLinks.map(sidebarLink => (
						<SidebarLink
							key={`sidebar-link-${sidebarLink.href}`}
							{...sidebarLink}
						/>
					))}
				</div>
			</nav>
		</aside>
	)
}
