// @ts-ignore
import { ref } from 'vue'
import { queryAdjustList, scoreOverTheYears } from "../../api/adjust"
import { years } from "../useYears"
import { state } from "./useState"
import { ChartQueryType } from "../../types/adjust"

const chartRef = ref()
const majorChartRef = ref()
const scoreChartRef = ref()

const collegeCount = ref<number>(0)
const collegeData = ref<{
	name: string,
	value: number
}[]>()
const collegeOption = ref()

const majorDataCount = ref<number>(0)
const majorData = ref<{
	name: string,
	value: number
}[]>([])
const majorOption = ref()

const scoreLineYearData = ref([])
const scoreLineValueData = ref([])
const scoreOption = ref()

const queryAdjustChartData = async () => {
	const res = await queryAdjustList({
		year: years.value[state.tab11value],
		category: parseInt(state.pieChartType) as (0 | 1)
	} as ChartQueryType)

	if (res.code === 200) {
		if (state.pieChartType === '0') {
			if (res.data.length !== 0) {
				const { count, nineHundred, twoEleven, initiative, selfLineation } = res.data[0]

				collegeCount.value = count
				collegeData.value = [
					{
						name: '985',
						value: parseInt(nineHundred)
					},
					{
						name: '211',
						value: parseInt(twoEleven)
					},
					{
						name: '双一流',
						value: parseInt(initiative)
					},
					{
						name: '自划线',
						value: parseInt(selfLineation)
					}
				]

				collegeOption.value = {
					title: {
						text: `全国一共有 ${ collegeCount.value ? collegeCount.value : 0 } + 院校参与调剂`,
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					color: [
						"#5470c6",
						"#91cc75",
						"#fac858",
						"#ee6666"
					],
					series: [
						{
							name: '院校图表',
							type: 'pie',
							radius: '50%',
							data: collegeData.value,
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				}

				chartRef.value.init(collegeOption.value)
			}
		} else {
			majorData.value =  res.data.map(item => {
				return {name: item.categoryName, value: item.majorcount}
			})
			res.data.map((item) => {
				majorDataCount.value += item.majorcount
			})

			majorOption.value = {
				title: {
					text: `全国一共有 ${ majorDataCount.value ? majorDataCount.value : 0  } + 条专业参与调剂`,
					left: 'center'
				},
				tooltip: {
					trigger: 'item'
				},
				color: [
					'#5470c6',
					'#91cc75',
					'#fac858',
					'#ee6666',
					'#73c0de',
					'#3ba272',
					'#fc8452',
					'#9a60b4',
					'#ea7ccc'
				],
				series: [
					{
						name: '专业图表',
						type: 'pie',
						radius: '50%',
						data: majorData,
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				]
			}

			majorChartRef.value.init(majorOption.value)
		}
	}
}

const queryScoreLine = async () => {
	const res = await scoreOverTheYears()

	if (res.code === 200) {
		scoreLineYearData.value = res.data.map(item => item.particularYear)
		scoreLineValueData.value = res.data.map(item => item.fractionalLine)

		scoreOption.value = {
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: scoreLineYearData
			},
			yAxis: {
				type: 'value'
			},
			color: 'orange',
			series: [
				{
					data: scoreLineValueData,
					type: 'line'
				}
			]
		}

		scoreChartRef.value.init(scoreOption.value)
	}
}

export {
	chartRef,
	majorChartRef,
	scoreChartRef,
	collegeOption,
	majorOption,
	scoreOption,
	queryAdjustChartData,
	queryScoreLine
}