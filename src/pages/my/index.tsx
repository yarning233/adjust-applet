// @ts-ignore
import { defineComponent, ref } from 'vue'
import Taro from '@tarojs/taro'
import styles from './index.module.scss'

const My = defineComponent({
	setup() {
		const nickname = ref<string>('黄大锤')
		const goContentPage = () => {
			Taro.navigateTo({
				url: '/pages/myContent/index'
			})
		}

		return () => (
			<view class={ styles.contentContain }>
				<view class={ styles.avatarContain }>
					<view class={ styles.avatar }>
						<nut-avatar
							size="large"
							icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
						></nut-avatar>
						<view class={ styles.nickname }>{ nickname.value }</view>
					</view>

					<nut-button type="primary">授权获取个人信息</nut-button>
				</view>

				<view class={ styles.unlockContain }>
					无限次查询 + 无限制搜索、筛选
					<nut-button type="primary" onClick={ goContentPage }>立即解锁</nut-button>
				</view>
			</view>
		)
	}
})

export default My