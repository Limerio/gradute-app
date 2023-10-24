import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn, getSession } from '@/utils/functions'
import { ArrowDown } from 'lucide-react'
import { UserSidebarDropdownMenu } from './UserSidebarDropdownMenu'

export const UserInfoSidebar = async () => {
	const session = await getSession()

	return (
		<DropdownMenu>
			<header>
				<DropdownMenuTrigger
					className={cn(
						'flex justify-between items-center gap-5',
						'px-8 py-3 rounded',
						'bg-slate-200 hover:bg-slate-300',
						'dark:bg-slate-800 dark:hover:bg-slate-900',
					)}
				>
					<section className={cn('flex items-center gap-3')}>
						<Avatar className="h-9 w-9">
							<AvatarImage src={session?.user?.image as string} />
						</Avatar>
						<span className="font-bold">{session?.user?.name}</span>
					</section>
					<section>
						<ArrowDown className="mr-2 h-4 w-4" />
					</section>
				</DropdownMenuTrigger>
				<UserSidebarDropdownMenu />
			</header>
		</DropdownMenu>
	)
}
