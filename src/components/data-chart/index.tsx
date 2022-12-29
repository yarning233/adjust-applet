// @ts-ignore
import { ref, onMounted, defineComponent, PropType, toRefs } from 'vue'
import * as echarts from "../ec-canvas/echarts"
import ECanvas from '../ec-canvas/index'

const DataChart = defineComponent({
	components: { ECanvas },
	props : {
		option: {
			type: Object as PropType<any>
		}
	},
	setup(props, { expose }) {
		let chart
		const { option } = toRefs(props)

		const ecCanvasRef = ref()
		const initChart = (canvas, width, height, dpr) => {
			console.log('initChart')
			chart = echarts.init(canvas, null, {
				width,
				height,
				devicePixelRatio: dpr,
			})
			canvas.setChart(chart)
			refresh()
			return chart
		}
		const ec: {
			lazyLoad?: boolean,
			onInit: (canvas, width, height, dpr) => void,
		} = {
			// lazyLoad: true,
			onInit: initChart,
		}

		const refresh = () => {
			chart?.setOption(option.value)
		}

		const init = () => {
			ecCanvasRef.value.init((canvas, width, height, dpr) => {
				chart = echarts.init(canvas, null, {
					width,
					height,
					devicePixelRatio: dpr,
				})
				canvas.setChart(chart)
				refresh()
				return chart
			})
		}

		expose({ initChart, init, refresh })

		onMounted(() => {
			setTimeout(() => {
				ec.lazyLoad && init()
			}, 3000)
		})

		return () => (
			<e-canvas ref={ ecCanvasRef } canvas-id="pieCanvas" ec={ ec } force-use-old-canvas={ true }></e-canvas>
		)
	}
})

export default DataChart