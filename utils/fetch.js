const SERVER_PATH = require('../config').SERVER_PATH;

export default function fetch (options) {
	let url = options.url;
	if (url.indexOf('http') != 0) {
		url = SERVER_PATH + url;
	}
	let token;
	try {
		token = uni.getStorageSync('token');
	} catch(e) {};
	let method = options.method || 'GET';
	let data = options.data || {};
	let header = options.header || {
		'Content-Type': 'application/json',
		"token": token ? token : '',
		};
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			header,
			success({data}) {
				let code = data.code;
				if (code == 200) {
					resolve(data);
				} else {
					uni.showToast({
						icon: 'none',
						title: '请求出错',
						duration: 2000
					})
					reject(data);
				}
			},
			fail(err) {
				uni.showToast({
					icon: 'none',
					title: '请求出错',
					duration: 2000
				})
				reject(err);
			}
		})
	})
}