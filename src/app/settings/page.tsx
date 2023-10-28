import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import Text from '@/components/ui/text'
import { cn, getSession } from '@/utils/functions'
import { FormSettings } from './FormSettings'

const SettingsPage = async () => {
	const session = await getSession()

	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center gap-5',
				'mx-0 my-auto',
			)}
		>
			<section className="flex items-center gap-5">
				<Avatar className="h-20 w-20">
					<AvatarImage src={session?.user?.image as string} />
				</Avatar>
				<Text size="xl">{session?.user?.name} account</Text>
			</section>
			<Separator />
			<section className="flex flex-col justify-center items-center">
				<FormSettings email={session?.user?.email as string} />
			</section>
		</div>
	)
}

export default SettingsPage
