import fetch from '@/utils/fetch';

// 发送手机验证码
export const sendMsgCode = data => fetch({
	url:'/global/phoneCode',
	method:'post',
	data: data
});
// 发送邮件
export const sendMail = data => fetch({
	url:'/global/submit',
	method:'post',
	data: data
});