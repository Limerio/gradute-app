import { ToggleTheme } from '@/components/layout'
import { cn } from '@/utils/functions'

export const Navbar = () => {
	return (
		<nav
			className={cn(
				'flex items-center justify-between',
				'w-full h-8 p-8',
				'bg-slate-100',
				'dark:bg-slate-800',
			)}
		>
			<section>
				<h1>Graduate</h1>
			</section>
			<section>
				<ToggleTheme />
			</section>
		</nav>
	)
}
