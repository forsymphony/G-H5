<template>
	<view class="">
		<headNav ref="headNav" onmouseout></headNav>
		<view class="index">
			<scroll-view class="content" scroll-y="true">
				<h2 style="color: #555555;margin-top: 152rpx;">为什么要选择我们？</h2>
				<view class="whyUs">
					<view class="UsItem">
						<image src="../../static/img/content/bigger.png" mode="" class="UsImg"></image>
						<view class="UsTitle">
							聚焦
						</view>
						<view class="UsContent">
							高素质人才团队，专注于技术研发
						</view>
					</view>
					<view class="UsItem">
						<image src="../../static/img/content/us.png" mode="" class="UsImg"></image>
						<view class="UsTitle">
							成长
						</view>
						<view class="UsContent">
							全是年轻人，发展杠杠的
						</view>
					</view>
					<view class="UsItem">
						<image src="../../static/img/content/profession.png" mode="" class="UsImg"></image>
						<view class="UsTitle">
							专业
						</view>
						<view class="UsContent">
							什么叫专业团队啊
						</view>
					</view>
				</view>
				<view class="content1">
					<h2 style="color: #404040;margin-bottom: 56rpx;">聚焦物联网技术</h2>
					<p>自主研发的产品包括NB-IoT窄带物联网电力抄表系统、NB-IoT窄带物联网终端开发平台、无线传感与识别平台TB-WISP等...</p>
					<image src="../../static/img/content/img2.png" mode="" class="c1-img"></image>
				</view>
				<view class="content1">
					<image src="../../static/img/content/img3.png" mode="" class="c1-img"></image>
					<h2 style="color: #404040;margin-bottom: 56rpx;">深耕工业自动化数据采集产品</h2>
					<p>杭州钛比科技有限公司也是欧洲著名毫米波厂家ELVA-1中国区授权代理(点此查看授权书)，销售的毫米波系统与组件，频段主要覆盖10MHz至220GHz，主要产品包括毫米波雷达、天线、信号源、噪声源、接收机及其部件、功率计</p>
				</view>
				<view class="content2">
					<h2 style="margin-bottom:40rpx;color: #404040;">依托白给大学技术力量</h2>
					<p style="margin: 40rpx;">创始人为摸鱼打诨、聊天八卦、键盘打拳领域专家</p>
					<ul>
						<li>
							<view class="liImg">
								<image src="../../static/img/content/smallicon.png" mode="" style="width: 100%; height: 100%;"></image>
							</view>
							<view class="liCo">
								<p class="liTitle">智能城市管理</p>
								<p class="liContent">云平台实时监控，智能掌控城市居民，农业设备运行数据。</p>
							</view>
						</li>
						<li>
							<view class="liImg">
								<image src="../../static/img/content/smallicon.png" mode="" style="width: 100%; height: 100%;"></image>
							</view>
							<view class="liCo">
								<p class="liTitle">物联网平台</p>
								<p class="liContent">自主研发的产品包括NB-IoT窄带物联网电力抄表系统、NB-IoT终端开发平台。</p>
							</view>
						</li>
						<li>
							<view class="liImg">
								<image src="../../static/img/content/smallicon.png" mode="" style="width: 100%; height: 100%;"></image>
							</view>
							<view class="liCo">
								<p class="liTitle">移动</p>
								<p class="liContent">一站式移动PC平台实时监控，动态触手可及。</p>
							</view>
						</li>
						<li>
							<view class="liImg">
								<image src="../../static/img/content/smallicon.png" mode="" style="width: 100%; height: 100%;"></image>
							</view>
							<view class="liCo">
								<p class="liTitle">大数据</p>
								<p class="liContent">一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。</p>
							</view>
						</li>
						<li>
							<view class="liImg">
								<image src="../../static/img/content/smallicon.png" mode="" style="width: 100%; height: 100%;"></image>
							</view>
							<view class="liCo">
								<p class="liTitle">智能城市管理</p>
								<p class="liContent">云平台实时监控，智能掌控城市居民，农业设备运行数据。</p>
							</view>
						</li>
						<li>
							<view class="liImg">
								<image src="../../static/img/content/smallicon.png" mode="" style="width: 100%; height: 100%;"></image>
							</view>
							<view class="liCo">
								<p class="liTitle">毫米波产品</p>
								<p class="liContent">欧洲著名毫米波厂家ELVA-1中国区授权代理。</p>
							</view>
						</li>
					</ul>
				</view>
				<view class="content3">
					<h2 style="font-size: 56rpx;color: #222;">热点动态</h2>
					<view class="shadow">
						<van-tabs v-model="active" color="#1989fa" title-active-color="#1989fa" @change="changeTabs">
						  <van-tab title="公司动态">
								<view v-for="(val,index) in dynamicsList" :key="index" class="newsContent">
									{{val.date+" | "+val.title}}
								</view>
							</van-tab>
						  <van-tab title="产品更新">
								<view v-for="(val,index) in  undateList" :key="index" class="newsContent">
									{{val.date+" | "+val.title}}
								</view>
							</van-tab>
						</van-tabs>
					</view>
					<van-pagination v-model="currentPage" :page-count="pageCount" class="page" @change="changePage"/>
				</view>
			</scroll-view>
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
				active:0,
				 currentPage: 1,
				 pageCount:3,
				dynamicsList:[
					{date:'2018-09-25',title:"Let's Play IoT! - 阿里云ACE（厦门）嘉庚学院技术沙龙预告"},
					{date:'2018-09-23',title:"2018世界物博会AliOS Things书籍及开发板获奖名单"},
					{date:'2018-09-15',title:"钛比科技携阿里云IoT院校合作方案亮相2018世界物联网博览会"},
					{date:'2018-06-30',title:"遇见美好未来|茶链网平台精彩亮相MWC 2018展会"},
					{date:'2018-05-18',title:"《NB-IoT实战指南》赠书啦！"}
				],
				 dynamics:[
					{date:'2018-09-25',title:"Let's Play IoT! - 阿里云ACE（厦门）嘉庚学院技术沙龙预告"},
					{date:'2018-09-23',title:"2018世界物博会AliOS Things书籍及开发板获奖名单"},
					{date:'2018-09-15',title:"钛比科技携阿里云IoT院校合作方案亮相2018世界物联网博览会"},
					{date:'2018-06-30',title:"遇见美好未来|茶链网平台精彩亮相MWC 2018展会"},
					{date:'2018-05-18',title:"《NB-IoT实战指南》赠书啦！"},
					{date:'2018-04-27',title:"第十届国际物联网博览会NB-IoT关键技术高级培训班圆满结束"},
					{date:'2018-04-04',title:"“区块链+物联网”技术开启西湖龙井身份认证时代"},
					{date:'2018-02-13',title:"钛比科技祝您新春快乐，狗年吉祥！"},
					{date:'2018-01-05',title:"物有限 · 智无穷 | Huawei LiteOS Workshop 上海站"},
					{date:'2017-11-18',title:"浙江移动物联网实验室NB-IoT测试——模组功耗篇（转载）"},
					{date:'2017-10-28',title:"钛比科技应邀参加中国NB-IoT产业联盟之高等院校物联网工程专业师资培训会议"},
					{date:'2017-09-30',title:"钛比科技 MWC American2017 参展归来！祝各位伙伴国庆中秋节日快乐！"},
					{date:'2017-09-08',title:"钛比科技入选华为全球NB-IoT生态系统合作伙伴"},
					{date:'2017-08-02',title:"钛比科技喜获2017年第六届中国创新创业大赛浙江赛区优胜企业称号"}
				],
				undateList:[
					{date:'2018-03-16',title:"钛比科技助力电子行业智能化转型"},
					{date:'2017-10-12',title:"钛比科技联合浙江大学、科学出版社发布《移动物联网（NB-IoT）实战指南》及配套工具包"},
					{date:'2017-08-18',title:"【物联网产品】钛比科技发布NB-IoT DTU产品"},
					{date:'2017-07-25',title:"钛比科技 TB-WISP5.0无源无线识别与传感标签"},
					{date:'2017-07-20',title:"钛比科技 TB-Powercast基于射频能量获取的无线传感器节点"}
				],
			}
		},
		mounted() {
			this.$refs.headNav.pShow = 1
		},
		methods: {
			scroll(e){
				console.log(e) // {scrollTop: 216}
				// console.log(e.scrollTop)
				// window.scroll(function(){
				// 	if(window.scrollTop() > 100){//这里100代表你要动画的元素离最顶层的距离，console.log一下就知道了。
				// 		console.log("我滚到了")
				// 	}else{
				// 		console.log("我没滚到")
				// 	}
				// });
			},
			changePage(){
				if(this.pageCount == 3 )
				this.dynamicsList = this.dynamics.slice((this.currentPage-1)*5,this.currentPage*5)
			},
			changeTabs(a,b){
			 if(b == '公司动态')
				{
					this.pageCount = 3
					this.dynamicsList = this.dynamics.slice(0,5)
				}
				else
				this.pageCount = 1
			}
		}
	}
</script>


<style lang="less" scoped>
	.index{
		text-align: center;
		// line-height: 48rpx;
		font-size: 24rpx;
		font-weight: 300;
		h2{
			text-align: center;
			margin: 100rpx 0;
			font-size: 52rpx;
			color: #555;
			font-weight: 400;
		}
		.content{
			margin-top: 128rpx;
			height: 100vh;
			.whyUs{
				display: flex;
				.UsItem{
					width: 33.33333333%;
					padding-left: 10rpx;
					padding-right: 10rpx;
					.UsImg{
						width: 230rpx;
						height: 230rpx;
					}
					.UsTitle{
						margin-top: 80rpx;
						color: #222;
						font-size: 52rpx;
					}
					.UsContent{
						margin-top: 48rpx;
						color: #888;
						font-size: 28rpx;
					}
				}
			}
		}
		.content1{
			overflow: hidden;
			width: 90%;
			margin: auto;
			color: #000000;
			.c1-img{
				margin: 60rpx auto;
				margin-top: 120rpx;
				height: 360rpx;
				width: 360rpx;
			}
		}
		.content2{
			li{
				width: 73%;
				/* padding: 6% 5% 0; */
				display: flex;
				margin: auto;
				text-align: left;
				margin-bottom: 40rpx;
			}
			.liImg{
				// display: inline-block;
				display: inline-block;
				width: 15%;
				vertical-align: top;
				padding:0 0 15% 0;
			}
			.liCo{
				// display: inline-block;
				width: 85%;
				display: inline-block;
				padding-left: 8%;
			}
			.liTitle{
				font-size: 40rpx;
				font-weight: normal;
				color: #404040;
				line-height: 96rpx;
			}
			.liContent{
				
			}
		}
		.content3{
			margin-top: 340rpx;
			padding-top: 40rpx;
			// height: 820px;
			width: 80%;
			margin: 0 auto 50px;
			text-align: left;
			.shadow{
				box-shadow:  0px 16rpx 20rpx -20rpx rgba(76, 150, 255, 0.15);
				margin: 60rpx 0;
			}
			.newsContent{
				color:#1989fa;
				padding: 20rpx 0;
				line-height: 80rpx;
				font-size: 28rpx;
				text-indent: 20rpx;
			}
			.page{
				padding-bottom: 200rpx;
			}
		}
	}
	ul{
		list-style: none;
		padding: 0;
	}
</style>
