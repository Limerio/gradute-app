import { ComponentProps } from 'react'
import { TailSpin } from 'react-loader-spinner'

export const Loader = (props: ComponentProps<typeof TailSpin>) => {
	return (
		<TailSpin
			ariaLabel="tail-spin-loading"
			radius="1"
			visible={true}
			{...props}
		/>
	)
}
