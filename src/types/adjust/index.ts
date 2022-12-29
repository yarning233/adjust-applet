export type AdjustType = {
	collegeCode: number,
	collegeName: string,
	departmentCode: number,
	departmentName: string
}

export type ChartQueryType = {
	year: '2023' | '2022' | '2021' | '2020' | '2019' |'2018',
	category: 0 | 1
}

export interface ResultType {
	collegeCode: string,
	collegeName: string,
	collegeAttribute: string[],
	province: string,
	year: string,
	departmentCode: string,
	departmentName: string,
	majorCode: string,
	majorName: string,
	directionCode: string,
	directionName: string,
	learningStyle: string,
	adjustQuota: string,
	yearsRange: string[]
}