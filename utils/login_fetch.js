import config from "../config/dev.js"
import md5 from '../node_modules/js-md5/src/md5.js'
import {
	sortByKey
} from './validate.js';


const appId = 'be89adce-f364-4e71-a4d2-88268dc68faa';
const secret = '183fe010-1523-4980-8efd-8f3af987be0b';


const loginFetch = (opt) => {
	return new Promise((resolve, reject) => {
		let token;
		console.log(opt)
		token = uni.getStorageSync('token')
		const jsonStr = JSON.stringify(sortByKey(opt.data)),
			timestamp = new Date().getTime().toString();
		opt = opt || {};
		opt.url = opt.url || '';
		opt.data = opt.data || {};
		opt.method = opt.method || 'GET';
		opt.header = opt.header || {
			"Content-Type": "application/json",
			"appId": appId,
			"systemCode": '',
			"sign": md5(jsonStr + secret + timestamp),
			"timestamp": timestamp,
			"token": token
		};
		let baseURL = opt.type == 'CAPTCHA_URL' ? config.CAPTCHA_URL : config.LOGIN_URL
		opt.success = opt.success || function() {};

		uni.request({
			url: baseURL + opt.url,
			data: opt.data,
			method: opt.method,
			header: opt.header,
			dataType: 'json',
			success: function(res) {
				console.log(res.data.code)
				if (res.data.code == 200) {
					// opt.success(res);
					resolve(res.data);
				}else if (res.data.code == 600) {
					uni.clearStorageSync();
					uni.navigateTo({
						url: '/pages/login/index'
					})
					reject(res.data);
				} else {
					uni.showToast({
						icon: 'none',
						title: res.data.message
					})
					reject(res.data);
				} 
			},
			fail: function() {
				uni.showModal({
					title: baseURL + opt.url,
					content: JSON.stringify(opt.data)
				});
			}
		})
	})
}

export default loginFetch
