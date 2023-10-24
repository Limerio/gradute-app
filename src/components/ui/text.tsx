import { cn } from '@/utils/functions'
import { cva, type VariantProps } from 'class-variance-authority'
import type { DetailedHTMLProps, ElementType, FC, HTMLAttributes } from 'react'

type HeadingProps = DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>

export const text = cva('', {
	variants: {
		size: {
			xl: 'text-4xl lg:text-4xl',
			lg: 'text-2xl lg:text-2xl',
			md: 'text-base lg:text-base',
			sm: 'text-sm',
			xs: 'text-xs',
		},
		boldness: {
			xl: 'font-bold',
			lg: 'font-semibold',
			md: 'font-medium',
			sm: 'font-normal',
			xs: 'font-light',
		},
	},
	defaultVariants: { boldness: 'md', size: 'md' },
})

type Props = HeadingProps &
	VariantProps<typeof text> & {
		className?: string
		as?: ElementType
		htmlFor?: string
	}

const Text: FC<Props> = props => {
	const {
		as: Component = 'p',
		className,
		htmlFor,
		size,
		boldness,
		...otherProps
	} = props

	return (
		<Component
			htmlFor={htmlFor}
			{...otherProps}
			className={cn(text({ size, boldness }), className)}
		/>
	)
}
export default Text
