<template>
	<view>
		<headNav ref="headNav"></headNav>
		<view class="aboutUs">
		      <view class="aboutArea">
		        <view class="areaArea">
		          <h2>
		            <i class="iconfont">&#xe617;</i>
		            企业介绍
		          </h2>
		          <view class="introduction">
		            <text>
		              杭州钛比科技有限公司是一家以浙江大学为依托，聚焦物联网技术和工业自动化数据采集产品开发和解决方案提供的高新信息技术企业。公司位于美丽的西子湖畔，杭州市西湖区华星科技大厦内。主要创始人为自动化、信息电子以及计算机专业的博士、硕士，公司员工中有本科以上学历的占90%以上，拥有很强的研发创新能力以及应用推广能力。
		            </text>
		            <br>
		            <text>
		              杭州钛比科技目前主要研发销售的产品有NB-IoT窄带物联网电力抄表系统，NB-IoT窄带物联网终端开发平台，SSI信号（数据）PCI采集卡，SSI信号（数据）Compact PCI（cPCI）采集卡、PCI接口高速数模转换（DAC）卡，无线传感网无线充电节点WISP（无线传感与识别平台）、兼容Arduino平台的Stalker基板、大规模IO接口（高达1024个）的FPGA信号处理平台等，可广泛应用于工业数据信息采集领域以及高校教学试验系统。
		            </text>
		            <br>
		            <text>
		              杭州钛比科技是ELVA-1的授权代理商，目前主要销售的微波毫米波系统和组件涵盖了从10MHz至220GHz甚至1.1THz（太赫兹）频段范围.
		            </text>
		            <br>
		            <text>
		              杭州钛比科技经营的产品具有稳定性以及高性能的特性，在客户中拥有良好的信誉。公司秉承着“客户至上”理念，用心做好每一件事情，希望与国内外客户精诚合作，共创美好未来！
		            </text>
		          </view>
		          <h2>
		            <i class="iconfont">&#xe647;</i>
		            企业履历
		          </h2>
		          <view class="time">
		             <ul class="timeLine" style="margin-left: 36px;">
									 <li class="lineLi">
											<view class="itemTail"></view>
											<view class="itemHead"></view>
											<view class="itemContent">杭州钛比科技有限公司正式成立 2014-01-24</view>
									 </li>
									 <li class="lineLi">
											<view class="itemTail"></view>
											<view class="itemHead"></view>
											<view class="itemContent">我司获杭州市青蓝计划资助及浙江省科技型中小企业认定 2015-06-28</view>
									 </li>
									 <li class="lineLi">
											<view class="itemTail"></view>
											<view class="itemHead"></view>
											<view class="itemContent">我司推出一键抄电表一键缴电费平台 杭州向万物互联时代又近一步 2017-04-13</view>
									 </li>
									 <li class="lineLi">
											<view class="itemTail  itemTail1"></view>
											<view class="itemHead"></view>
											<view class="itemContent">钛比科技助力NB-IoT产业发展——HDG 2017-06-24</view>
									 </li>
									 <li class="lineLi">
											<!-- <view class="itemTail"></view> -->
											<view class="itemHead "></view>
											<view class="itemContent">飞速发展中</view>
									 </li>
								 </ul>
		          </view>
		          <h2>
		            <i class="iconfont">&#xe616;</i>
		            联系地址
		          </h2>
		          <view class="map">
		            <view id="container"></view> 
		            <view class="vx">
		              <view class="vx1">
		                <view class="vx2">
		                  <view class="vx3">
		                    <img src="../../static/img/aboutUs/QR.jpg" alt="" class="vx3Img">
		                  </view>
		                  <view class="vx31">
		                    <text class="vx31P">扫一扫，关注微信公众号</text>
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
		mounted(){
			this.$refs.headNav.pShow = 4
		      this.loadMap()
		    },
		    methods: {
		     loadMap() {
					const _this = this;
					var map = new AMap.Map('container', {
		        zoom:11,//级别
		        center: [116.397428, 39.90923],//中心点坐标
		        viewMode:'3D'//使用3D视图
		      });
		      var marker = new AMap.Marker({
		          position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
		          title: '北京'
		      });
		      map.add(marker);
		     }
		    }
	}
</script>

<style lang="less">
	.aboutUs{
		margin-top: 170rpx;
		.aboutArea{
			width: 80%;
			margin: 0 auto;
			.areaArea{
				// width: 80%;
				margin: 0 auto;
				h2{
					color: #121212;
					font-size: 48rpx;
					margin-top: 40rpx;
					margin-bottom: 40rpx;
					font-weight: 500;
				}
				.introduction{
					font-size: 28rpx;
					color: #5b5b5b;
					margin-top: 60rpx;
					text-indent: 44rpx;
				}
				.time{
					.timeLine{
						list-style: none;
						margin: 0;
						padding: 0;
						.lineLi{
							position: relative;
							padding: 0 0 12px;
							list-style: none;
							margin: 0;
							.itemTail{
								position: absolute;
								left: 10rpx;
								top: 0;
								height: 100%;
								border-left: 4rpx solid #e9e9e9;
							}
							.itemHead{
								color: red;
								position: absolute;
								left: -2rpx;
								width: 18rpx;
								height: 18rpx;
								background-color: #fff;
								// -webkit-border-radius: 00px;
								border-radius: 200rpx;
								border: 4rpx solid blue;
							}
							.itemTail1{
								border-left: 4rpx dotted #e9e9e9;
							}
							.itemContent{
								padding: 0 0 20rpx 48rpx;
								font-size: 24rpx;
								position: relative;
								top: -6rpx;
								}
							}
						}
					}
				}
				.map{
					text-align: center;
					// display: flex;
					#container{
						// width: 62.5%;
						height: 700rpx;
					}
					.vx{
						// display: block;
						// width: 29.16666667%;
						.vx1{
							width: 80%;
							margin: 90rpx auto;
							border: 2rpx solid #e9e9e9;
							transition: all .3s;
						.vx1:hover{
							box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.2);
						}
							.vx2{
								padding: 20rpx;
								.vx3{
									.vx3Img{
										width: 100%;
									}
								}
								.vx31{
									.vx31P{
	
									}
								}
							}
						}
					}
				}
			}
		}
	
	@font-face {
	  font-family: 'iconfont';  /* project id 2113340 */
	  src: url('//at.alicdn.com/t/font_2113340_yfandnommg.eot');
	  src: url('//at.alicdn.com/t/font_2113340_yfandnommg.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_2113340_yfandnommg.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_2113340_yfandnommg.woff') format('woff'),
	  url('//at.alicdn.com/t/font_2113340_yfandnommg.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_2113340_yfandnommg.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:24px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
	}
</style>
