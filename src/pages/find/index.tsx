// @ts-ignore
import { defineComponent, ref } from 'vue'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

const Find = defineComponent({
	setup() {
		interface ShopType {
			id: number,
			name: string,
			originalPrice: number,
			postCouponPrice: number,
			cover: string
		}

		const leftData = ref<ShopType[]>([
			{
				id: 1,
				name: '考研英语一对一答疑（30天VIP）',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
			},
			{
				id: 2,
				name: '考研英语一对一答疑（30天VIP）,附赠八套考研真题',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
			},
			{
				id: 3,
				name: '考研英语一对一答疑（30天VIP）',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
			},
			{
				id: 4,
				name: '考研英语一对一答疑（30天VIP）,附赠八套考研真题',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
			}
		])

		const rightData = ref<ShopType[]>([
			{
				id: 5,
				name: '考研英语一对一答疑（30天VIP）',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
			},
			{
				id: 6,
				name: '考研英语一对一答疑（30天VIP）',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
			},
			{
				id: 7,
				name: '考研英语一对一答疑（30天VIP）,附赠八套考研真题',
				originalPrice: 349,
				postCouponPrice: 299,
				cover: '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
			}
		])

		const goContentPage = (id: number): void => {
			console.log(id)
			Taro.navigateTo({
				url: `/pages/findContent/index?id=${id}`
			})
		}

		return () => (
			<view class={ styles.contentContain }>
				<view class={ styles.findContain }>
					<ul class={ styles.findLeft }>
						{
							leftData.value.map(item => {
								return <li key={ item.id } class={ styles.coverLi } onClick={ () => goContentPage(item.id) }>
									<view class={ styles.coverContain }>
										<img src={ item.cover } alt="cover" class={ styles.cover }/>
									</view>
									<view class={ styles.shopName }>
										{ item.name }
									</view>
									<view class={ styles.priceContain }>
										￥<b class={ styles.originalPrice }>{ item.originalPrice }</b>
										<nut-tag type="danger">
											券后￥
											<b class={ styles.tagPrice }>{ item.postCouponPrice }</b>
										</nut-tag>
									</view>
								</li>
							})
						}
					</ul>
					<ul class={ styles.findRight }>
						{
							rightData.value.map(item => {
								return <li key={ item.id } class={ styles.coverLi } onClick={ () => goContentPage(item.id) }>
									<view class={ styles.coverContain }>
										<img src={ item.cover } alt="cover" class={ styles.cover }/>
									</view>
									<view class={ styles.shopName }>
										{ item.name }
									</view>
									<view class={ styles.priceContain }>
										￥<b class={ styles.originalPrice }>{ item.originalPrice }</b>
										<nut-tag type="danger">
											券后￥
											<b class={ styles.tagPrice }>{ item.postCouponPrice }</b>
										</nut-tag>
									</view>
								</li>
							})
						}
					</ul>
				</view>
			</view>
		)
	}
})

export default Find