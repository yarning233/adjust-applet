// @ts-ignore
import { defineComponent, reactive, ref } from 'vue'
import styles from '../result/index.module.scss'

// @ts-ignore
import type { Ref } from 'vue'
import useToast from "../../utils/useToast"
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

const collegeCategoryCheckboxGroup = ref<string[]>([])
const collegeProvinceCheckboxGroup = ref<string[]>([])

const provinces = ref<string[]>([
	'0101哲学','0201理论经济学','0202应用经济学','0251金融(专硕)'
])
const categories = ref<string[]>([
	'哲学','经济学','法学','教育学','文学','历史学','理学','工学','农学','医学','军事学','管理学','艺术学','交叉学科'
])

const collegeProvinceRef = ref(null) as Ref
const collegeCategoryRef = ref(null) as Ref

const isCheckAllProvince = ref<boolean>(false)
const isCheckAllCategory = ref<boolean>(false)

const changeCollegeCategory = () => {

	if (isCheckAllCategory.value) {
		collegeCategoryRef.value.toggleAll(true)
	} else {
		collegeCategoryRef.value.toggleAll(false)
	}
}

const changeCollegeProvince = () => {

	if (isCheckAllProvince.value) {
		collegeProvinceRef.value.toggleAll(true)
	} else {
		collegeProvinceRef.value.toggleAll(false)
	}
}

const Category = defineComponent({
	components: { ResultList },
	setup() {
		return () => (
			<view class={styles.contain}>
				<nut-sticky top="0" class={styles.stickyContain}>
					<nut-searchbar v-model={keyWord.value} onSearch={search} placeholder="请输入关键字进行搜索"></nut-searchbar>
					<nut-tabs v-model={state.tab11value} type="smile">
						{
							years.value.map(year => {
								return <nut-tabpane title={year}></nut-tabpane>
							})
						}
					</nut-tabs>
				</nut-sticky>

				{/* 院校多选框 */}
				<view class={styles.collegeCheckContain}>
					<view class={styles.collegeAttrCheckBar}>
						院校属性：
						<view class={styles.checkboxGroupContent}>
							<nut-checkbox label="全选" onChange={changeCollegeCategory} v-model={isCheckAllCategory.value}>全选
							</nut-checkbox>
							<nut-checkboxgroup v-model={collegeCategoryCheckboxGroup.value} ref={collegeCategoryRef}
							                   class={styles.checkboxGroup}>
								{
									categories.value.map(pro => {
										return <nut-checkbox label={pro} class={styles.checkbox}>{pro}</nut-checkbox>
									})
								}
							</nut-checkboxgroup>
						</view>
					</view>

					<view class={styles.collegeAttrCheckBar}>
						<view>省市归属：</view>
						<view class={styles.checkboxGroupContent}>
							<nut-checkbox label="全选" onChange={changeCollegeProvince} v-model={isCheckAllProvince.value}>全选
							</nut-checkbox>
							<nut-checkboxgroup v-model={collegeProvinceCheckboxGroup.value} ref={collegeProvinceRef}
							                   class={styles.checkboxGroup}>
								{
									provinces.value.map(pro => {
										return <nut-checkbox label={pro} class={styles.checkbox}>{pro}</nut-checkbox>
									})
								}
							</nut-checkboxgroup>
						</view>
					</view>
				</view>

				<view class={styles.contentList}>
					<view class={styles.contentContain}>
						<result-list customList={customList.value}/>
					</view>
				</view>
			</view>
		)
	}
})

export default Category