// @ts-ignore
import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'

const MyContent = defineComponent({
	setup() {
		return () => (
			<view class={ styles.contentContain }>
				<view class={ styles.noShare }>
					不想分享？购买无限次查询和无限制搜索、筛选会员
				</view>

				<view class={ styles.unlock }>
					<view class={ styles.unlockTitle }>
						- 3分钟免费解锁 -
					</view>
					<view class={ styles.unlockText }>
						<view class={ styles.shareTitle }>分享</view>
						<view class={ styles.unlockRemarks }>
							<nut-button type="primary" class={ styles.shareBtn }>
								<nut-icon name="share" size="12" class={ styles.shareIcon }></nut-icon>
								分享
							</nut-button>
							小程序到<view class={ styles.highText }>考研群</view>（群人数<view class={ styles.highText }>100人以上</view>）分享成功<view class={ styles.highText }>3分钟后</view>截图;<view class={ styles.bgText }>1个群</view>解锁
							<view class={ styles.bgText }>1个周，</view>
							<view class={ styles.bgText }>2个群，</view>解锁<view class={ styles.bgText }>全程。</view>
						</view>
						<nut-noticebar
							text="人工审核，不按要求分享会被拉入黑名单哦~"
							scrollable={ false }
							background={`rgba(251, 248, 220, 1)`}
							color={"#D9500B"}
							left-icon={'close'}
						></nut-noticebar>

						<view class={ styles.uploaderContain }>
							<view class={ styles.uploaderTitle }>
								上传截图
							</view>
							<view class={ styles.uploader }>
								<nut-uploader url="https://xxxx" maximum="1" style={'margin-right: 15px;'}></nut-uploader>
								<nut-uploader url="https://xxxx" maximum="1"></nut-uploader>
							</view>
						</view>

						<nut-button type="primary" block>立即解锁</nut-button>
					</view>
				</view>
			</view>
		)
	}
})

export default MyContent