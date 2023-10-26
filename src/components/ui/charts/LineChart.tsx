import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { Chart } from './Chart'

type LineChartProps = {
	title: string
	data: ChartDataset<'line', DefaultDataPoint<'line'>>[]
}

export const LineChart = ({ title, data }: LineChartProps) => {
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
			type="line"
		/>
	)
}
