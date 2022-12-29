// @ts-ignore
import { reactive, ref, watch, onMounted } from "vue"
import Taro from '@tarojs/taro'
import styles from './index.module.scss'
import DataChart from "../../components/data-chart"

export default {
	name: 'Index',
	components: { DataChart },
	setup() {
		const state = reactive<{
			tab11value: string,
			currentYear: string,
			pieChartType: string
		}>({
			tab11value: '1',
			currentYear: '2022',
			pieChartType: '0'
		})

		const years = ref<string[]>(['2023', '2022', '2021', '2020', '2019', '2018'])

		const goCollegePage = () => {
			Taro.navigateTo({
				url: '/pages/college/index'
			})
		}

		const goCategoryPage = () => {
			Taro.navigateTo({
				url: '/pages/category/index'
			})
		}

		const goSearchResultPage = () => {
			Taro.switchTab({
				url: '/pages/result/index'
			})
		}

		watch(() => state.tab11value, () => {
			state.currentYear = years.value[state.tab11value]
			console.log(state.currentYear)
		})

		const useCollegePieChartData = {
			title: {
				text: `全国一共有 872 + 所院校参与调剂`,
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
					data: [
						{ value: 1048, name: '211' },
						{ value: 735, name: '985' },
						{ value: 580, name: '34' },
						{ value: 484, name: '普通' }
					],
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

		const useFractionLineChartData = {
			xAxis: {
				type: 'category',
				data: ['2023', '2022', '2021', '2019', '2018']
			},
			yAxis: {
				type: 'value'
			},
			color: 'orange',
			series: [
				{
					data: [383, 371, 390, 401, 365],
					type: 'bar',
					showBackground: true,
					backgroundStyle: {
						color: 'rgba(180, 180, 180, 0.2)'
					}
				}
			]
		}

		const useMajorPieChartData = {
			title: {
				text: `全国一共有 30000 + 专业参与调剂`,
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
					data: [
						{ value: 100, name: '01哲学' },
						{ value: 200, name: '02教育学' },
						{ value: 300, name: '03法学' },
						{ value: 400, name: '04教育学' },
						{ value: 500, name: '05文学' },
						{ value: 600, name: '06历史学' },
						{ value: 700, name: '07理学' },
						{ value: 800, name: '08工学' },
						{ value: 900, name: '09农学' },
						{ value: 100, name: '10医学' },
						{ value: 200, name: '11军事学' },
						{ value: 300, name: '12管理学' },
						{ value: 400, name: '13艺术学' },
						{ value: 500, name: '14交叉学科' },
					],
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

		return () => (
			<view class={styles.container}>
				<view class={styles.header}>
					<span class={styles.headerLogo}>NEWS</span> 2023 考研调剂系统正式开启!
				</view>

				<view class={styles.vipBox}>
					<view>一站通 会员</view>
					<nut-button type="primary">免费解锁</nut-button>
				</view>

				<view class={styles.searchBar} onClick={ goSearchResultPage }>输入院校名称、专业名称等关键字搜索</view>

				<view class={styles.tabBar}>
					<view class={styles.tabContent}>
						<nut-tabs v-model={ state.tab11value } type="smile" style={ "backgroundColor: '#fff'" }>
							{
								years.value.map((year:string) => {
									return <nut-tabpane key={ year } title={ year }>
										{ year + '年' }
									</nut-tabpane>
								})
							}
						</nut-tabs>
					</view>
				</view>

				{/*	饼图-院校专业切换 */}
				<view class={styles.pieContain}>
					<nut-tabs v-model={ state.pieChartType }>
						<nut-tabpane title="院校" style={"backgroundColor: none"}>
							<view class={ styles.pieChartContain }>
								<view class={ styles.pieChartContent }>
									<data-chart option={ useCollegePieChartData } />
								</view>
								<nut-button type="primary" block onClick={ goCollegePage }>立即查看</nut-button>
							</view>
						</nut-tabpane>
						<nut-tabpane title="专业">
							<view class={styles.pieChartContain}>
								<view class={styles.pieChartContent}>
									<data-chart option={ useMajorPieChartData } />
								</view>
								<nut-button type="primary" block onClick={ goCategoryPage }>立即查看</nut-button>
							</view>
						</nut-tabpane>
					</nut-tabs>
				</view>

				{/*	广告 */}
				<view class={ styles.advance }></view>

				{/* 历年分数线 */}
				<view class={ styles.fractionContain }>
					<view class={ styles.fractionTitle }>历年分数线</view>
					<view class={ styles.fractionContent }>
						<data-chart option={ useFractionLineChartData } />
					</view>
				</view>
			</view>
		)
	}
}