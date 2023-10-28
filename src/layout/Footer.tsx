import { cn } from '@/utils/functions'

export const Footer = () => {
	return (
		<footer
			className={cn(
				'flex items-center justify-center',
				'w-full p-5 rounded-t-xl',
				'bg-slate-200',
				'dark:bg-slate-800',
			)}
		>
			Program made by Limerio with ❤ | 2023
		</footer>
	)
}
