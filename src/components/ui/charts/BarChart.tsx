import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { Chart } from './Chart'

type BarChartProps = {
	title: string
	data: ChartDataset<'bar', DefaultDataPoint<'bar'>>[]
}

export const BarChart = ({ title, data }: BarChartProps) => {
	return (
		<Chart
			labels={[
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'September',
				'October',
				'November',
				'December',
			]}
			datasets={data}
			title={title}
			type="bar"
		/>
	)
}
