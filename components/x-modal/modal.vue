<template >
	<view class="modal-container" :class="{show: showValue}" @touchmove.stop @click.stop='cancel(2)' >
		<view class="modal-content" v-if="showValue" @click.stop>
			<slot name='title'>
				<view class="modal-title" :class="{'modal-title-padding': !text}" v-if='title'>
					{{title}}
				</view>
			</slot>
			<slot name='text'>
				<view class="modal-article" v-html="text" v-if="text">
				</view>
			</slot>
			<slot>
				<input class='uni-input search_input'
				  placeholder='请输入邮箱' v-model="emailIpt" @input="iptChange"/>
				<view v-show="iptRule" class="iptRule">请输入正确的邮箱</view>  
			</slot>
			<view class="modal-row">
				<view class="modal-col" :style="cancelStyle" hover-class="modal-hover" v-if="!noCancel" @click='cancel(1)'>
					{{cancelText}}
				</view>
				<view class="modal-col modal-confirm" :style="confirmStyle" hover-class="modal-hover" @click='confirm'>
					{{confirmText}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default{
		name: 'modal',
		props: {
			title: {
				type: String,
				default: '提示'
			},
			text: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			},
			noCancel: {
				type: Boolean,
				default: false
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			cancelStyle: {
				type: [String, Object]
			},
			confirmText: {
				type: String,
				default: '确定'
			},
			confirmStyle: {
				type: [String, Object]
			},
			prevent: {
				type: Boolean,
				default: true
			},
			value: {
				type: Boolean,
				default: false
			}
		},
		data(){
			return{
				showValue: this.value,
				emailIpt:'',
				iptRule:false
			}
		},
		watch: {
			value(n, o){
				this.showValue = n
			},
			showValue(n, o){
				this.$emit('input', n)
			}
		},
		methods: {
			iptChange(val){
				console.log(val.detail.value)
				var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$")
				let data = val.detail.value
				 if(!reg.test(data)){
					 this.iptRule = true
				 }else{
					 this.iptRule = false
				 }
			},
			confirm(){
				
				let msg = {from: 'confirm', confirm: true}	
				if (this.type && this.type == 2){
					this.$emit('confirm', this.emailIpt)
					if (this.iptRule){
						return
					}
				}else {
					this.$emit('confirm', msg)
					this.$emit('event', msg)
				}
				this.showValue = false
			},
			cancel(type){
				if(this.prevent && type === 2){
					return;
				}
				this.showValue = false
				let msg = {from: type === 1 ? 'cancel' : 'mask'}
				type === 1 ? msg.cancel = true : msg.mask = true
				this.$emit('cancel', msg)
				this.$emit('event', msg)
			}
		}
	}
</script>

<style lang="scss">
	$fontSizeLg: 18px;
	$fontSizeSm: 14px;
	
	.modal-container{
		// z-index: 1111111111111;
	
		position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 999;background: rgba(0, 0, 0, .6);visibility: hidden;opacity: 0;transition: all .2s;display: flex;align-items: center;justify-content: center;
		.iptRule{
			padding-left: 32upx;
			color: #FB4B4B;
			line-height: 1;
			font-size:24upx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			margin-top: 20upx;
		}
		.search_input{
			width: 512upx;
			height: 72upx;
			background:rgba(255,255,255,1);
			border-radius:8upx;
			opacity:0.6;
			border:2upx solid rgba(163,177,191,1);
			margin: 0 auto;
			margin-bottom: 40upx;
		}
		.modal-content{
			width: 80%;border-radius: 10rpx;background: #fff;overflow: hidden;animation: fadeZoom .15s linear;
			overflow: hidden;
			.modal-title{
				padding: 30rpx 30rpx 0;text-align: center;color: #404040;font-size: $fontSizeLg;
			}
			.modal-title-padding{padding-bottom: 30rpx;}
			.modal-article{
				padding: 40rpx 30rpx 50rpx;font-size: $fontSizeSm;color: #999;
				word-break: break-all;
				word-wrap: break-word;
				display: block;
				width: 100%;
				box-sizing: border-box;
				white-space: normal;
			}
			.modal-row{
				display: flex;text-align: center;font-size: $fontSizeLg;line-height: 100rpx;position: relative;color: #404040;
				.modal-col{
					flex: 1;width: 100%;position: relative;
					padding: 20upx 0;
				}
				.modal-col:first-child::after{
					content: '';position: absolute;top: 0;bottom: 0;right: 0;border-right: 1px solid #ccc;transform: scaleX(.36);
				}
				.modal-confirm{color: rgb(0, 122, 255);}
				.modal-hover{background: #f2f2f2;}
			}
			.modal-row::after{
				content: '';position: absolute;left: 0;right: 0;top: 0;border-top: 1px solid #ccc;transform: scaleY(.36);
			}
		}
		@keyframes fadeZoom {
			0%{transform: scale(.7);opacity: .6;}
			80%{transform: scale(1.2);opacity: .3;}
			100%{transform: scale(1);opacity: 1;}
		}
	}
	.modal-container.show{
		visibility: visible;opacity: 1;
	}
</style>
