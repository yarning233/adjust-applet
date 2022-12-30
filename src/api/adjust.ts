import request from "../config/request"
import { ChartQueryType } from '../types/adjust'
import {PageData, Pagination} from "../types/request"
import { ResultType } from '../types/adjust'

// 根据年份、院校/专业获取图表信息
export const queryAdjustList = (params: ChartQueryType) => {
	return request({
		url: 'api/adjustChart/queryList',
		method: 'POST',
		header: {
			'Content-type': 'application/json'
		},
		data: params
	})
}

// 根据年份获取历年复试分数线
export const scoreOverTheYears = () => {
	return request({
		url: 'api/scoreOver/scoreOverTheYears',
		method: 'POST',
		header: {
			'Content-type': 'application/json'
		},
		data: null
	})
}

// 根据年份、搜索内容、门类、一级学科/院校属性、省份 获取调剂列表
export const queryCollegeList = (params: Pagination) => {
	return request<Pagination, PageData<ResultType>>({
		url: 'api/search/queryCollegeList',
		method: 'POST',
		header: {
			'Content-type': 'application/json'
		},
		data: params
	})
}