import request from "../config/request"
import { ChartQueryType } from '../types/adjust/index'

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