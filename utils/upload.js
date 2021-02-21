import config from "../config/dev.js"
import Base64 from '@/static/js/base64.js'
import Crypto from '@/static/js/crypto-min.js'
// const Crypto = require('@/static/js/crypto-min.js');
// import Crypto from '@/static/js/crypto-min.js'

/**
 * 附件上传api
 * @param {object} opt {
	 fileSrc: 文件临时存放地址
	 fileTypeOpt: 文件类型,
	 uploadFileSizeOpt: 文件大小限制,默认100M,
	 success: 成功回调
 }
 */
const uploadOSS = (opt) => {
	opt = opt || {};
	let fileSrc = opt.fileSrc;
	let fileTypeOpt = opt.fileTypeOpt;
	let sucess = opt.success || function() {};
	// console

	//  oss 配置
	let vieoType = '.png';
	let uploadFileSize = opt.uploadFileSizeOpt ? opt.uploadFileSizeOpt : 1024 * 1024 * 100; // 上传文件的大小限制100m
	let policyText = {
		"expiration": "2022-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
		"conditions": [
			["content-length-range", 0, uploadFileSize] // 设置上传文件的大小限制 
		]
	};
	let accessid = config.ACCESSID;
	let accesskey = config.ACCESSKEY;
	let osshost = config.OSS_API;
	let policyBase64 = Base64.encode(JSON.stringify(policyText));
	let message = policyBase64;
	let bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, {
		asBytes: true
	});
	let signature = Crypto.util.bytesToBase64(bytes);
	let timetamp = new Date().getTime();

	function random_string(len) {
		len = len || 32;
		let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		let maxPos = chars.length;
		let pwd = '';
		for (let i = 0; i < len; i++) {
			pwd += chars.charAt(Math.floor(Math.random() * maxPos));
		}
		return pwd;
	}
	// #ifdef H5
	if (fileTypeOpt == 'image') {
		uni.request({
			url: fileSrc,
			responseType: 'arraybuffer',
			success(res) {
				vieoType = '.' + res.header['content-type'].split('/')[1];
				// 上传文件
				let stroeAs = 'client/other/' + timetamp + random_string(5) + vieoType;
				fileUpload(fileTypeOpt, fileSrc, stroeAs);
			},
			fail(err) {
				uni.showToast({
					title: err,
					icon: 'none',
					duration: 2000
				});
			}
		});
	} else {
		const fileName = fileSrc.files[0].name;
		const fileUrl = 'http://192.168.218.160:8080';
		let pos = fileName.lastIndexOf('.');
		let filename = fileName.substring(0, pos) // 文件名
		let extendName = fileName.substring(pos + 1); // 扩展名
		let stroeAs = 'client/other/' + timetamp + random_string(5) + '.' + extendName;
		fileUpload(fileTypeOpt, fileUrl, stroeAs);

	}

	// #endif
	// #ifdef APP-PLUS || MP
	// app端直接读取的文件路径
	let pos = fileSrc.lastIndexOf('.');
	let filename = fileSrc.substring(0, pos) // 文件名
	let extendName = fileSrc.substring(pos + 1); // 扩展名
	let stroeAs = 'client/other/' + timetamp + random_string(5) + '.' + extendName;
	fileUpload(fileTypeOpt, fileSrc, stroeAs);
	// #endif

	// 文件上传
	function fileUpload(fileTypeOpt, path, stroeAs) {
		uni.showLoading({
			title: '文件上传中'
		});
		uni.uploadFile({
			url: osshost,
			filePath: path,
			fileType: fileTypeOpt,
			name: 'file',
			formData: {
				'key': stroeAs,
				'policy': policyBase64,
				'OSSAccessKeyId': accessid,
				'success_action_status': '200', //让服务端返回200,不然，默认会返回204
				'signature': signature,
			},
			success: (res) => {
				uni.hideLoading();
				uni.showToast({
					title: '上传成功',
					icon: 'success',
					duration: 1000
				});
				opt.success(osshost + stroeAs);
			},
			fail: (err) => {
				uni.hideLoading();
				uni.showModal({
					content: err.errMsg,
					showCancel: false
				});
			}
		});
	}
}

export {
	uploadOSS
}
