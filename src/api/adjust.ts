import request from "../config/request"
import { Pagination, PageData } from "../types/request"
import { AdjustType } from '../types/adjust'

export const queryAdjustList = (params: Pagination) => {
	return request<Pagination, PageData<AdjustType>>({
		url: 'api/adjust/queryList',
		method: 'POST',
		header: {
			'Content-type': 'application/json'
		},
		data: params
	})
}