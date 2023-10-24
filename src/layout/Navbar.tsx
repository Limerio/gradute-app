import { ToggleTheme } from '@/components/layout'
import { cn } from '@/utils/functions'

export const Navbar = () => {
	return (
		<nav
			className={cn(
				'w-full h-8 p-8 flex items-center justify-between bg-slate-100 dark:bg-slate-800',
			)}
		>
			<section>Graduate</section>
			<section>
				<ToggleTheme />
			</section>
		</nav>
	)
}
