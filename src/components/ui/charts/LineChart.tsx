import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { Chart } from './Chart'

type LineChartProps = {
	title: string
	data: ChartDataset<'line', DefaultDataPoint<'line'>>[]
	labels: string[]
}

export const LineChart = ({ data, ...props }: LineChartProps) => {
	return <Chart datasets={data} type="line" {...props} />
}
