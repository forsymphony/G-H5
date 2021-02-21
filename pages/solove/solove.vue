<template>
	<view>
		<headNav ref="headNav"></headNav>
		<view class="content">
			<view class="solveBox" style="padding: 60rpx;">
				<h2>行业解决方案</h2>
				<view class="solveAll">
					<view class="solveOne">
						<view class="oneAll">
							<view class="oneHead">
								<view class="headTitle">
									移动充电与感知应用
								</view>
							</view>
							<view class="oneBody">
								<view class="bodyImage">
									<img src="../../static/img/resolve/solve01.jpg" alt="">
									<view class="bodySlogan">
										"无线传感器网络节点更换电池"
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="solveAll">
					<view class="solveOne">
						<view class="oneAll">
							<view class="oneHead">
								<view class="headTitle">
									新能源汽车智能监控系统解决
								</view>
							</view>
							<view class="oneBody">
								<view class="bodyImage">
									<img src="../../static/img/resolve/solve03.jpg" alt="">
									<view class="bodySlogan">
										"汽车数据智能采集可视化平台"
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<footerNav></footerNav>
	</view>
</template>

<script>
	import headNav from "@/components/global/headNav.vue";
	import footerNav from "@/components/global/footerNav.vue";
	export default {
		components:{
			headNav,
			footerNav
		},
		data() {
			return {
				
			};
		},
		mounted() {
			this.$refs.headNav.pShow = 3
		}
	}
</script>

<style lang="less">
.content{
		margin-top: 130rpx;
		// display: flex;
		// justify-content: center;
		.solveBox{
			// width: 90%;
			// margin: 0 auto;
			h2{
				font-weight: bold;
				border-bottom: 4rpx solid #eee;
				padding-bottom: 20rpx;
				margin: 20rpx 0;
				text-indent: 32rpx;
				color: #404040;
			}
			.solveAll{
				.solveOne{
					margin-top: 20rpx;
					.oneAll{
						border: 2rpx solid #eee;
						    background: #fff;
						    border-radius: 4rpx;
						    font-size: 24rpx;
						    position: relative;
						.oneHead{
							height: 96rpx;
							line-height: 96rpx;
							background: #fff;
							border-bottom: 2rpx solid #e9e9e9;
							padding: 0 48rpx;
							border-radius: 4rpx 4rpx 0 0;
							zoom: 1;
							margin-bottom: -2rpx;
							display: flex;
							.headTitle{
								font-size: 28rpx;
								text-overflow: ellipsis;
								max-width: 100%;
								overflow: hidden;
								white-space: nowrap;
								color: rgba(0, 0, 0, 0.85);
								font-weight: 500;
								display: inline-block;
								flex: 1 1 0%;
							}
						}
						.oneBody{
							padding: 28rpx;
							.bodyImage{
								.bodySlogan{
									position: absolute;
									width: 100%;
									top: 55%;
									// left: 26%;
									font-size: 28rpx;
									color: #fff;
									left: 15%
								}
							}
						}
					}
				}
			}
		}
	}
</style>
