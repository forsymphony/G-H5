import Vue from 'vue'
import App from './App'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import AMap from 'vue-amap'
// Vue.use(iView);
import Vant from 'vant';
import 'vant/lib/index.less';

Vue.use(Vant);
Vue.config.productionTip = false

App.mpType = 'app'


AMap.initAMapApiLoader({
	key: '	776929246b52165d6cb8fac2a2393484',
	plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation',
		'AMap.Geocoder'
	],
	v: '1.4.4',
	uiVersion: '1.0'
})
var script1 = document.createElement('script') //创建一个script标签
var script2 = document.createElement('script') //创建一个script标签
script1.type = 'text/javascript'
script1.src =
	"https://webapi.amap.com/maps?v=1.4.15&key=3042ccb06eea3f6f940af2834f8b9d10&plugin=AMap.MouseTool,AMap.Geocoder,AMap.DistrictSearch&callback=onLoad"
script2.type = 'text/javascript'
script2.src = "//webapi.amap.com/ui/1.0/main.js?v=1.0.11"
document.getElementsByTagName('head')[0].appendChild(script1)
setTimeout(()=>{
	document.getElementsByTagName('head')[0].appendChild(script2)
},500)

const app = new Vue({
    ...App
})
app.$mount()
