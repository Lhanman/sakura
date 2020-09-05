import axios from 'axios';
import {getToken} from './auth';
import NProgress from 'nprogress' // 引入nprogress插件
import 'nprogress/nprogress.css'  // 引入nprogress样式

axios.defaults.baseURL = '/api/blog';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    if (getToken()) {
        config.headers["Authorization"] = getToken();
    }
	NProgress.start();
    return config
}, function (error) {
    return Promise.reject(error)
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	NProgress.done() // 设置加载进度条的结束
    return response.data;
}, function (error) {
    return Promise.reject(error)
});
