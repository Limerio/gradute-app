import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { Chart } from './Chart'

type BarChartProps = {
	title: string
	data: ChartDataset<'bar', DefaultDataPoint<'bar'>>[]
	labels: string[]
}

export const BarChart = ({ data, ...props }: BarChartProps) => {
	return <Chart datasets={data} type="bar" {...props} />
}
