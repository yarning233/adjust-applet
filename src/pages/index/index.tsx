// @ts-ignore
import { reactive, ref, watch, onMounted } from "vue"
import ECanvas from '../../components/ec-canvas/index'
import * as echarts from '../../components/ec-canvas/echarts'
import styles from './index.module.scss'

export default {
	name: 'Index',
	components: { ECanvas },
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

		watch(() => state.tab11value, () => {
			state.currentYear = years.value[state.tab11value]
			console.log(state.currentYear)
		})

		let chart;
		const ecCanvasRef = ref();
		const initChart = (canvas, width, height, dpr) => {
			chart = echarts.init(canvas, null, {
				width,
				height,
				devicePixelRatio: dpr,
			});
			canvas.setChart(chart);
			refresh();
			return chart;
		}
		const ec: {
			lazyLoad?: boolean,
			onInit: (canvas, width, height, dpr) => void,
		} = {
			// lazyLoad: true,
			onInit: initChart,
		}

		const refresh = () => {
			const option = {
				title: {
					text: "某站点用户访问来源",
					subtext: "纯属虚构",
					left: "center",
				},
				tooltip: {
					trigger: "item",
					formatter: "{a} \n{b} : {c} ({d}%)",
				},
				legend: {
					orient: "vertical",
					left: "left",
					data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
				},
				series: [
					{
						name: "访问来源",
						type: "pie",
						radius: "55%",
						center: ["50%", "60%"],
						data: [
							{ value: 335, name: "直接访问" },
							{ value: 310, name: "邮件营销" },
							{ value: 234, name: "联盟广告" },
							{ value: 135, name: "视频广告" },
							{ value: 1548, name: "搜索引擎" },
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: "rgba(0, 0, 0, 0.5)",
							},
						},
					},
				],
			};
			chart?.setOption(option);
		}
		const init = () => {
			ecCanvasRef.value.init((canvas, width, height, dpr) => {
				chart = echarts.init(canvas, null, {
					width,
					height,
					devicePixelRatio: dpr,
				});
				canvas.setChart(chart);
				refresh();
				return chart;
			})
		}
		onMounted(() => {
			setTimeout(() => {
				ec.lazyLoad && init();
			}, 300);
		})

		return () => (
			<view class={styles.container}>
				<view class={styles.header}>
					<span class={styles.headerLogo}>NEWS</span> 2023 考研调剂系统正式开启!
				</view>

				<view class={styles.vipBox}>
					<view>一站通 会员</view>
					<nut-button type="primary">免费解锁</nut-button>
				</view>

				<view class={styles.searchBar}></view>

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
							<view class={ styles.pieChartContent }>
								<e-canvas ref={ ecCanvasRef } canvas-id="pieCanvas" ec={ ec }></e-canvas>
							</view>
						</nut-tabpane>
						<nut-tabpane title="专业">

						</nut-tabpane>
					</nut-tabs>
				</view>
			</view>
		)
	}
}