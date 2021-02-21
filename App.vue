<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style>
	@import './static/css/navBar.css';
	/* @import "/wxcomponents/vant/dist/common/index.wxss"; */
	/*每个页面公共css */
	page{
		width: 100%;
		height: 100%;
	}
</style>
