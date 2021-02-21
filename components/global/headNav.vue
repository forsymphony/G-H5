<template>
	<view class="all">
		<view class="head">
			<image src="@/static/img/logo1.png" mode="" class="img"></image>
<!-- 			<i class="iconfont">&#xe61f;</i>
			<i class="iconfont">&#xe604;</i> -->
			<image src="../../static/img/quxiao.png" mode=""  class="close" v-if="iconShow == false" @click="iconShowFun"></image>
			<image src="../../static/img/liebiao.png" mode="" class="choose" v-else @click="iconShowFun"></image>
		</view>
		<view class="pop" @touchmove="closeNav" v-if="iconShow == false">
			<view class="list">
				<p class="pItem" :class="{isActive:pShow == 1}" @click="change(1)">首页</p>
				<p class="pItem" :class="{isActive:pShow == 2}" @click="change(2)">产品</p>
				<p class="pItem" :class="{isActive:pShow == 3}" @click="change(3)">解决方案</p>
				<p class="pItem" :class="{isActive:pShow == 4}" @click="change(4)">关于我们</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				iconShow:true,
				pShow:1
			}
		},
		methods:{
			iconShowFun(){
				this.iconShow = !this.iconShow
			},
			closeNav(){
				this.iconShow = true
				// event.preventDefault()
				console.log("aa")
			},
			change(num){
				this.pShow = num
				this.iconShow = !this.iconShow
				let x = ""
				if(num == 1){
					uni.navigateTo({
							url: '/pages/index/index'
					})
				} else if(num == 2){
					uni.navigateTo({
							url: '/pages/product/product'
					})
				} else if(num == 3){
					uni.navigateTo({
							url: '/pages/solove/solove'
					})
				} else{
					uni.navigateTo({
							url: '/pages/aboutUs/aboutUs'
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.all{
		.head{
			height: 128rpx;
			background: #333;
			width: 100vw;
			z-index: 970;
			box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
			position: fixed;
			top: 0;
			width: 100%;
			.img{
				display: inline-block;
				position: absolute;
				left: 7%;
				top: 0rpx;
				width: 274rpx;
				height: 118rpx;
			}
			.close{
				width: 80rpx;
				height: 80rpx; 
				float: right;
				margin-right: 12rpx;
				margin-top: 24rpx;
				
			}
			.choose{
				width: 56rpx;
				height: 56rpx; 
				float: right;
				margin-right: 24rpx;
				margin-top: 36rpx;
			}
		}
		.pop{
			height: 100vh;
			width: 100vw;
			position: absolute;
			z-index: 100;
			.list{
				position: fixed;
				top: 128rpx;
				background-color: #FFFFFF;
				z-index: 999;
				.pItem{
					width: 100vw;
					padding: 0 32rpx;
					font-size: 24rpx;
					line-height: 84rpx;
					height: 84rpx;
					padding-left: 48rpx;
					font-weight: 400;
					
				}
				.isActive{
					background-color: #edf8f5;
					color: #1989fa;
					
				}
			}
		}
	}
	.none{
		display: none;
	}
</style>
