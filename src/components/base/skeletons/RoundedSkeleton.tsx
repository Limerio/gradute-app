import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/utils/functions'
import { BaseSkeletonProps } from './types'

export const RoundedSkeleton = ({ width, height }: BaseSkeletonProps) => {
	return (
		<Skeleton
			className={cn(`h-${height ?? 12} w-${width ?? 12} rounded-full`)}
		/>
	)
}
