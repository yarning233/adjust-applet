export type AdjustType = {
	collegeCode: number,
	collegeName: string,
	departmentCode: number,
	departmentName: string
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