'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/utils/functions'

export type InteractionDatePicker = {
	getDate: () => Date | DateRange | undefined
	setDate: (value: Date | DateRange) => void
}

type DatePickerBaseProps = {
	mode: 'range' | 'single'
	defaultMonth?: Date
}

export const DatePicker = forwardRef<
	InteractionDatePicker,
	DatePickerBaseProps
>((props, ref) => {
	const { mode, defaultMonth } = props

	const [date, setDate] = useState<Date | DateRange>()

	useImperativeHandle(
		ref,
		() => {
			return {
				getDate() {
					return date
				},
				setDate(value: Date | DateRange) {
					setDate(value)
				},
			}
		},
		[date],
	)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-[280px] justify-start text-left font-normal',
						!date && 'text-muted-foreground',
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{mode === 'range' ? (
						<ValuesRange date={date as DateRange} />
					) : (
						<ValuesSingle date={date as Date} />
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				{mode === 'range' ? (
					<Calendar
						mode="range"
						selected={date as DateRange}
						onSelect={e => setDate(e as DateRange)}
						initialFocus
						defaultMonth={(date as DateRange)?.from ?? new Date()}
						numberOfMonths={2}
					/>
				) : (
					<Calendar
						mode="single"
						selected={date as Date}
						onSelect={setDate}
						defaultMonth={defaultMonth}
						initialFocus
					/>
				)}
			</PopoverContent>
		</Popover>
	)
})

DatePicker.displayName = 'DatePicker'

const ValuesRange = ({ date }: { date: DateRange }) =>
	date?.from ? (
		date.to ? (
			<>
				{format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
			</>
		) : (
			format(date.from, 'LLL dd, y')
		)
	) : (
		<span>Pick a date</span>
	)

const ValuesSingle = ({ date }: { date: Date }) =>
	date ? format(date as Date, 'PPP') : <span>Pick a date</span>
