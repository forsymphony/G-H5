<template>
	<view class="footer">
		<view class="footer-area">
			<image src="../../static/img/logo1.png" mode="" class="footer-img"></image>
			<p class="footer-p1">诚信为本 科技至上</p>
			<view class="footer-product">
				<h2 class="title">
					产品
				</h2>
				<p>
					<ul>
						<li>物联网</li>
						<li>数据采集</li>
						<li>毫米波</li>
					</ul>
				</p>
			</view>
			<view class="footer-product">
				<h2 class="title">
					解决方案
				</h2>
				<p>
					<ul>
						<li>移动充电与感知应用</li>
						<li>移动充电与感知应用</li>
						<li>移动充电与感知应用</li>
					</ul>
				</p>
			</view>
			<view class="footer-product">
				<h2 class="title">
					联系我们
				</h2>
				<p>
					<ul>
						<li>联系电话：1234-12345678</li>
						<li>手机：12345678911</li>
						<li>EMAIL：qife@forsymphony.cn</li>
						<li>联系电话：阿巴路233号芜湖起飞大厦666室</li>
					</ul>
				</p>
			</view>
			<view class="footer-product">
				<h2 class="title">
					关注
				</h2>
				<p>
					<image src="../../static/img/erweima.png" mode="" class="img2"></image>
				</p>
			</view>
			<view class="br">

			</view>
		</view>
		<view class="footer-foot">
			<p>Copyright @2021 by<text style="color: #1DA57A;;padding-left: 8rpx;padding-right: 8rpx;">&nbsp;forsymphony&nbsp;</text> All Rights Reserved</p>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="less">
	.footer{
		height: 1360rpx;
		width: 100vw;
		background: #333;
		position: relative;
		line-height: 52rpx;
		letter-spacing: 2rpx;
		color: #666;
		font-size: 24rpx;
		overflow: hidden;
		.footer-area{
			width: 90%;
			margin: 20px auto 0;
			padding: 10px 0;
			.footer-img{
				width: 274rpx;
				height: 118rpx;
				padding: 60rpx 20rpx 0rpx 20rpx;
			}
			.footer-p1{
				padding: 20rpx;
			}
			.footer-product{
				padding-top: 20rpx;
				padding-left: 20rpx;
				.title{
					font-weight: normal;
					color: #CCC;
					margin-bottom: 20rpx;
				}
				.img2{
					width: 120rpx;
					height: 120rpx;
				}
				ul{
					padding: 0;
					padding-bottom: 20rpx;
				}
				ul > li{
					display: inline-block;
					margin-right: 10px;
				}
			}
		}
		.footer-foot{
			width: 100%;
			height: 80rpx;
			text-align: center;
			margin-top: 20px;
			border-top: 2rpx solid rgba(233, 233, 233, 0.1);
			p{
				padding-top: 10rpx;
			}
		}
	}
</style>
