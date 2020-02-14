import Login from '@/page/login'
import Manager from '@/page/manager'
import Home from '@/page/home'
import Ysj from '@/page/ysj'
import Sjtb from '@/page/sjtb'
import Sjjz from '@/page/sjjz'
import Sjfx from '@/page/sjfx'
import Sjzl from '@/page/sjzl'
import FxbgFb from '@/page/fxbgFb'
import YhGl from '@/page/yhGl'

export default [{
	path: '/',
	component: Login
},{
	path: '/',
	redirect: '/login',

},  {
	path: '/manager',
	component: Manager,
	name: '',
	children: [
		{
			path: '/home',
			name: 'home',
			component: Home,
			meta: []
		}, {
			path: '/ysj',
			name: 'ysj',
			component: Ysj,
			meta: ['元数据']
		}, {
			path: '/sjtb',
			name: 'sjtb',
			component: Sjtb,
			meta: ['数据采集', '数据填报']
		}, {
			path: '/sjjz',
			name: 'sjjz',
			component: Sjjz,
			meta: ['数据采集', '数据加载']
		}, {
			path: '/sjfx',
			name: 'sjfx',
			component: Sjfx,
			meta: ['数据整合', '数据上传', '数据分析']
		}, {
			path: '/sjzl',
			name: 'sjzl',
			component: Sjzl,
			meta: ['数据整合', '数据上传', '数据整理']
		}, {
			path: '/fxbgFb',
			name: 'fxbgfb',
			component: FxbgFb,
			meta: ['数据管理', '数据审核', '数据发布', '分析报告发布']
		}, {
			path: '/yhgl',
			name: 'yhgl',
			component: YhGl,
			meta: ['用户管理']
		}
	]
}]
