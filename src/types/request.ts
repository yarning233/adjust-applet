export type Pagination = {
	currentPage: number,
	pageNum?: number,
	pageSize: number,
	year: number,
	keywords?: string,
	category?: string[],
	firstLevelDiscipline?: string[],
	province?: string[],
	collegeAttribute?: string[],
	total?: number
}

export type PageData<T> = {
	totalCount: number,
	totalPage: number,
	list: Array<T>
}