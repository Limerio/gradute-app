import { ToggleTheme } from '@/components/layout'

export const Navbar = () => {
	return (
		<nav className="w-full h-8 p-8 flex items-center justify-between">
			<section>Navbar</section>
			<section>
				<ToggleTheme />
			</section>
		</nav>
	)
}
