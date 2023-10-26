'use client'

import {
	ChartDataset,
	Chart as ChartJs,
	ChartType,
	CoreChartOptions,
	DefaultDataPoint,
	registerables,
} from 'chart.js'
import { useEffect, useRef } from 'react'

type ChartProps = {
	datasets: ChartDataset<ChartType, DefaultDataPoint<ChartType>>[]
	labels: string[]
	title: string
	type: ChartType
	options?: CoreChartOptions<ChartType>
}

export const Chart = ({
	datasets,
	labels,
	type,
	options,
	title,
}: ChartProps) => {
	const chartRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		if (chartRef.current) {
			const chart = new ChartJs(chartRef.current, {
				type,
				data: {
					datasets,
					labels,
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
					responsive: true,
					plugins: {
						legend: {
							position: 'top',
						},
						title: {
							display: true,
							text: title,
						},
					},
					...options,
				},
			})

			return () => {
				chart.destroy()
			}
		}
	}, [datasets, labels, type, options, title, chartRef])

	return <canvas ref={chartRef} />
}

Chart.displayName = 'Chart'

ChartJs.register(...registerables)
