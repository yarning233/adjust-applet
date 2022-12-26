// @ts-ignore
import { reactive, ref, watch, onMounted } from "vue"
import Taro from '@tarojs/taro'
import ECanvas from '../../components/ec-canvas/index'
import styles from './index.module.scss'
import { ecCanvasRef, ec, init } from '../../hooks/useCollegePieChart'
import { ecCanvasRef2, ec2, init2 } from '../../hooks/useMajorPieChart'
import { ecCanvasRefLine, ecLine, initLine } from '../../hooks/useFractionLineChart'

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

		const goCollegePage = () => {
			Taro.navigateTo({
				url: '/collegeResult'
			})
		}

		watch(() => state.tab11value, () => {
			state.currentYear = years.value[state.tab11value]
			console.log(state.currentYear)
		})

		onMounted(() => {
			setTimeout(() => {
				ec.lazyLoad && init()
				ec2.lazyLoad && init2()
				ecLine.lazyLoad && initLine()
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

				<view class={styles.searchBar}>输入院校名称、专业名称等关键字搜索</view>

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
									<e-canvas ref={ ecCanvasRef } canvas-id="pieCanvas" ec={ ec } force-use-old-canvas={ true }></e-canvas>
								</view>
								<nut-button type="primary" block onClick={ goCollegePage }>立即查看</nut-button>
							</view>
						</nut-tabpane>
						<nut-tabpane title="专业">
							<view class={styles.pieChartContain}>
								<view class={styles.pieChartContent}>
									<e-canvas ref={ ecCanvasRef2 } canvas-id="pieCanvas" ec={ ec2 } force-use-old-canvas={ true }></e-canvas>
								</view>
								<nut-button type="primary" block onClick={goCollegePage}>立即查看</nut-button>
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
						<e-canvas ref={ ecCanvasRefLine } canvas-id="pieCanvas" ec={ ecLine } force-use-old-canvas={ true }></e-canvas>
					</view>
				</view>
			</view>
		)
	}
}