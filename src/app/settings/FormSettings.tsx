'use client'

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Text from '@/components/ui/text'
import { useForm } from 'react-hook-form'

type FormSettingsProps = {
	email: string
}

export const FormSettings = ({ email }: FormSettingsProps) => {
	const form = useForm({
		defaultValues: {
			email,
		},
	})

	return (
		<Form {...form}>
			<form>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>
									<Text>Email</Text>
								</FormLabel>
								<FormControl>
									<Input disabled {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)
					}}
				/>
			</form>
		</Form>
	)
}
