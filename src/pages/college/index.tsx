// @ts-ignore
import { defineComponent, ref, reactive, watch } from 'vue'
// @ts-ignore
import type { Ref } from 'vue'
import useToast from "../../utils/useToast"
import styles from '../result/index.module.scss'
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

// const collegeAttrGroup = ref(null) as Ref
const collegeAttrCheckboxGroup = ref<string[]>(['985', '211'])
const collegeProvinceCheckboxGroup = ref<string[]>([])
const provinces = ref<string[]>([
	'北京','天津','上海','重庆','新疆','西藏','青海','四川','贵州','云南',
	'广西','广东','福建','江西','浙江','湖南','江苏','安徽','湖北','陕西',
	'河南','山西','山东','河北','吉林','辽宁','海南','甘肃','宁夏','内蒙古','黑龙江'
])
const collegeAttrRef = ref(null) as Ref
const collegeProvinceRef = ref(null) as Ref

const changeCollegeAttr = () => {
	const len = collegeAttrCheckboxGroup.value.length

	len < 5 ? (collegeAttrRef.value as any)?.toggleAll(true) : (collegeAttrRef.value as any)?.toggleAll(false)
}

const isCheckAllProvince = ref<boolean>(false)

const changeCollegeProvince = () => {

	if (isCheckAllProvince.value) {
		collegeProvinceRef.value.toggleAll(true)
	} else {
		collegeProvinceRef.value.toggleAll(false)
	}
}

const College = defineComponent({
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

				{/* 院校多选框 */}
				<view class={ styles.collegeCheckContain }>
					<view class={ styles.collegeAttrCheckBar }>
						院校属性：<nut-checkboxgroup v-model={ collegeAttrCheckboxGroup.value } ref={ collegeAttrRef.value } class={ styles.checkboxGroup }>
						<nut-checkbox label="全选" onChange={ changeCollegeAttr }>全选</nut-checkbox>
						<nut-checkbox label="985">985</nut-checkbox>
						<nut-checkbox label="211">211</nut-checkbox>
						<nut-checkbox label="自划线">自划线</nut-checkbox>
						<nut-checkbox label="双一流">双一流</nut-checkbox>
					</nut-checkboxgroup>
					</view>

					<view class={styles.collegeAttrCheckBar}>
						<view>省市归属：</view>
						<view class={ styles.checkboxGroupContent }>
							<nut-checkbox label="全选" onChange={changeCollegeProvince} v-model={ isCheckAllProvince.value }>全选</nut-checkbox>
							<nut-checkboxgroup v-model={collegeProvinceCheckboxGroup.value} ref={collegeProvinceRef}
							                   class={styles.checkboxGroup}>
								{
									provinces.value.map(pro => {
										return <nut-checkbox label={pro} class={ styles.checkbox }>{pro}</nut-checkbox>
									})
								}
							</nut-checkboxgroup>
						</view>
					</view>
				</view>

				<view class={ styles.contentList }>
					<view class={ styles.contentContain }>
						<result-list customList={ customList.value } />
					</view>
				</view>
			</view>
		)
	}
})
export default College