import { ChartDataset, DefaultDataPoint } from 'chart.js'
import { Chart } from './Chart'

type AreaChartProps = {
	title: string
	data: ChartDataset<'pie', DefaultDataPoint<'pie'>>[]
	labels: string[]
}

export const AreaChart = ({ data, ...props }: AreaChartProps) => {
	return <Chart datasets={data} type="line" {...props} />
}
