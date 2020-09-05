import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from "../components/Header/store";
import {reducer as homeReducer} from '../pages/home/store';

const image = () => {
    return {
        //列表页随机封面图
        ListImg: [
            {img: 'https://image.bygit.cn/list_01.png'},
            {img: 'https://image.bygit.cn/list_02.png'},
            {img: 'https://image.bygit.cn/list_03.png'},
            {img: 'https://image.bygit.cn/list_04.png'},
            {img: 'https://image.bygit.cn/list_05.png'},
            {img: 'https://image.bygit.cn/list_06.png'},
            {img: 'https://image.bygit.cn/list_07.png'},
            {img: 'https://image.bygit.cn/list_08.png'},
            {img: 'https://image.bygit.cn/list_09.png'},
            {img: 'https://image.bygit.cn/list_10.png'},
            {img: 'https://image.bygit.cn/list_11.png'},
            {img: 'https://image.bygit.cn/list_12.png'},
            {img: 'https://image.bygit.cn/list_13.png'},
            {img: 'https://image.bygit.cn/list_14.png'}
        ],
        //首页banner图和内页顶部头图
        bannerList: [
            {img: 'http://static.lhanman.cn/static/images/banner/AK-01.jpg.webp'},
            {img: 'http://static.lhanman.cn/static/images/banner/AK-02.jpg.webp'},
            {img: 'http://static.lhanman.cn/static/images/banner/AK-03.jpg.webp'},
            {img: 'http://static.lhanman.cn/static/images/banner/AK-04.jpg.webp'},
			{img: 'http://static.lhanman.cn/static/images/banner/AK-05.jpg.webp'},
			{img: 'http://static.lhanman.cn/static/images/banner/AK-06.jpg.webp'},
			{img: 'http://static.lhanman.cn/static/images/banner/AK-07.jpg.webp'},
			{img: 'http://static.lhanman.cn/static/images/banner/AK-08.jpg.webp'},
        ],
    }
};

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    image: image
});

export default reducer
