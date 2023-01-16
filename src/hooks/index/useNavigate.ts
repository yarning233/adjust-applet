import useToast from "../../utils/useToast"
import Taro from '@tarojs/taro'
import { judgeUserInfo } from './useState'

const judgeOpenIdAndPhone = (dir: string) => {
	const openId = Taro.getStorageSync('openId')
	const phone = Taro.getStorageSync('phone')

	if (openId && phone) {
		Taro.navigateTo({
			url: `/pages/${dir}/index`
		})
	} else {
		useToast('您尚未授权个人信息')
	}
}

const goCollegePage = () => {
	judgeOpenIdAndPhone('college')
}

const goCategoryPage = () => {
	judgeOpenIdAndPhone('category')
}

const goSearchResultPage = () => {
	judgeOpenIdAndPhone('result')
}

const goMyContentPage = () => {
	const res = judgeUserInfo()
	if (res) {
		Taro.navigateTo({
			url: '/pages/myContent/index'
		})
	}
}

const goAdvancePage = () => {
	Taro.navigateTo({
		url: '/pages/advance/index'
	})
}

export {
	goCollegePage,
	goCategoryPage,
	goSearchResultPage,
	goMyContentPage,
	goAdvancePage
}