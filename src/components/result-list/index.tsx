// @ts-ignore
import { defineComponent, ref, PropType } from 'vue'
import styles from '../../pages/result/index.module.scss'
import { ResultType } from "../../types/adjust"

const ResultList = defineComponent({
	props: {
		customList: {
			type: Array as PropType<ResultType>
		}
	},
	setup(props) {
		const newData = props.customList

		const customHasMore = ref<boolean>(true)
		const customLoadMore = done => {
			setTimeout(() => {
				newData.map(item => props.customList.push(item))
				if (props.customList.length > 40) customHasMore.value = false
				done()
			}, 500)
		}

		return () => (
			<ul class={styles.infiniteUl} id="customScroll">
				<nut-infiniteloading
					load-txt="加载中"
					load-more-txt="没有啦～"
					container-id="customScroll"
					useWindow={false}
					hasMore={customHasMore.value}
					onLoadMore={customLoadMore}
				>
					{
						props.customList.map(result => {
							return <li class={styles.infiniteLi}>
								<view class={styles.infiniteLiTitle}>
									<view class={styles.infiniteLiTitleContent}>
										<view class={styles.collegeName}>{result.collegeName}</view>
										{
											result.collegeAttribute.map(attr => {
												return <view class={styles.collegeAttr}>{attr}</view>
											})
										}
									</view>
									<view class={styles.province}>{result.province}</view>
								</view>
								<view class={styles.infiniteLiContent}>
									<view class={styles.infiniteLiContentLeft}>
										<view class={styles.infiniteLiContentText}>{'院系所：' + result.departmentName}</view>
										<view class={styles.infiniteLiContentText}>{'专业：' + result.majorName}</view>
										<view
											class={styles.infiniteLiContentText}>{'研究方向：(' + result.directionCode + ')' + result.directionName}</view>
										<view class={styles.infiniteLiContentText}>{'学习方式：' + result.learningStyle}</view>
									</view>
									<view class={styles.infiniteLiContentRight}>
										<view>调剂名额</view>
										<view>{result.adjustQuota}</view>
									</view>
								</view>
								<view class={styles.infiniteLiBottom}>
									<view class={styles.yearRange}>
										{result.yearsRange[result.yearsRange.length - 1] + '年 - ' + result.yearsRange[0] + '年'}
									</view>
									<view class={styles.currentYear}>{result.year + '年'}</view>
								</view>
							</li>
						})
					}
				</nut-infiniteloading>
			</ul>
		)
	}
})

export default ResultList