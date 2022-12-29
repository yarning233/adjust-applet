// @ts-ignore
import { defineComponent, ref } from 'vue'
import { useRouter } from '@tarojs/taro'
import styles from './index.module.scss'

const router = useRouter()

console.log(router.params.id)

const FindContent = defineComponent({
	setup() {
		const imagesData = ref<string[]>([
			'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg',
			'//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg',
			'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg',
			'//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg',
			'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg',
			'//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg',
			'//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg',
			'//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
		])

		const qrCode = ref<string>('https://kaoyancun.oss-cn-hangzhou.aliyuncs.com/img/qrCode.png')

		const originalPrice = ref<number>(3699)
		const postCouponPrice = ref<number>(3599)

		return () => (
			<view class={ styles.contentContain }>
				{
					imagesData.value.map(img => {
						return <img src={ img } alt="image" class={ styles.contentImage }/>
					})
				}
				<view class={ styles.fixBox }>
					<view class={ styles.fixLeft }>
						<view class={ styles.fixPrice }>
							￥<b class={ styles.originalPrice }>{ originalPrice.value }</b>
							<nut-tag type="danger">
								券后￥
								<b class={ styles.tagPrice }>{ postCouponPrice.value }</b>
							</nut-tag>
						</view>
						<view class={ styles.remark }>
							长按识别二维码打开“小鹅通”<b class={ styles.pon }>领券</b>购买
						</view>
					</view>
					<view class={ styles.fixRight }>
						<image class={ styles.qrCode } src={ qrCode.value } mode="widthFix" showMenuByLongpress={ true }></image>
					</view>
				</view>
			</view>
		)
	}
})

export default FindContent