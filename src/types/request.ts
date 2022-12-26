export type Pagination = {
	current?: number,
	pageNum?: number,
	pageSize: number,
	total?: number
}

export type PageData<T> = {
	totalCount: number,
	totalPage: number,
	list: Array<T>
}