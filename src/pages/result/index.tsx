// @ts-ignore
import { defineComponent, ref, reactive, watch } from 'vue'
// @ts-ignore
import type { Ref } from 'vue'
import useToast from "../../utils/useToast"
import styles from './index.module.scss'
import { ResultType } from "../../types/adjust"
import ResultList from "../../components/result-list"

const state = reactive<{
	tab11value: string
}>({
	tab11value: '0'
})
const search = () => useToast('搜索触发')
const keyWord = ref<string>('')
const years = ref<string[]>(['2022', '2021', '2020', '2019', '2018'])

const customList = ref<ResultType[]>([
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	},
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	},
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	},
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	},
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	},
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	},
	{
		collegeCode: '10001',
		collegeName: '北京大学',
		collegeAttribute: ['985', '211', '自划线'],
		province: '北京',
		year: '2022',
		departmentCode: '001',
		departmentName: '哲学系',
		majorCode: '010101',
		majorName: '马克思主义哲学',
		directionCode: '01',
		directionName: '马克思主义哲学史',
		learningStyle: '全日制',
		adjustQuota: '有',
		yearsRange: ['2022', '2021', '2020', '2019', '2018']
	}
])

const Result = defineComponent({
	components: { ResultList },
	setup() {
		return () => (
			<view class={ styles.contain }>
				<nut-sticky top="0" class={ styles.stickyContain }>
					<nut-searchbar v-model={ keyWord.value } onSearch={ search } placeholder="请输入关键字进行搜索"></nut-searchbar>
					<nut-tabs v-model={ state.tab11value } type="smile">
						{
							years.value.map(year => {
								return <nut-tabpane title={ year }></nut-tabpane>
							})
						}
					</nut-tabs>
				</nut-sticky>

				<view class={ styles.contentList }>
					<view class={ styles.contentContain }>
						<result-list customList={ customList.value } />
					</view>
				</view>
			</view>
		)
	}
})
export default Result