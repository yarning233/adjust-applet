// @ts-ignore
import { reactive, ref, watch } from "vue"
import styles from './index.module.scss'

export default {
	name: 'Index',
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

		const ecCanvasRef = ref(null)

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
								<e-canvas ref={ ecCanvasRef } canvas-id={"pieCanvas"} ec={ ec }></e-canvas>
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