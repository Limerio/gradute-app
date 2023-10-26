import { cn } from '@/utils/functions'

export const Footer = () => {
	return (
		<footer
			className={cn(
				'flex items-center justify-center',
				'w-full p-5',
				'bg-slate-100',
				'dark:bg-slate-800',
			)}
		>
			Program made by Limerio with ❤ | 2023
		</footer>
	)
}
