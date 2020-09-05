import React, {PureComponent} from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import {GlobalStyle} from "./style";
import store from "./store";
import {Provider} from 'react-redux';
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToTop from './components/BackTop';
import Router from './router';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
import axios from "axios";
import NProgress from 'nprogress' //���� nprogress ���
import 'nprogress/nprogress.css' // ���������ʽ
import $ from 'jquery'
import { message} from 'antd';
class App extends PureComponent {
	 constructor(props) {
        super(props);
        this.state = {
            display : false,
        }
		this.handleOpenMusicList = this.handleOpenMusicList.bind(this);
		this.add_copyright = this.add_copyright.bind(this);
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <div id='player'/>
                        <ToTop/>
                        <GlobalStyle/>
                        <Header/>
                        <Router/>
                        <Footer/>
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        )
    }

    componentDidMount() {
        this.getMuisic();
		this.add_copyright();
		window.addEventListener("scroll", this.handleScroll); // �����������¼�
    }


	 handleScroll() {
      // ��Ļʣ��ĸ߶�
      let surplus =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // ��ǰ�����߶�
      let scrollY = document.documentElement.scrollTop;
      // ��ǰλ�ðٷֱ�С��
      let coorY = scrollY / surplus;
      // ���õ�����������ʹ��NProgress.set() ��̬���Ľ�����
	  NProgress.configure({ trickle: false });
	  NProgress.configure({showSpinner: false});
	  NProgress.configure({minimum:0.0});
      NProgress.set(coorY);
	
    }

	add_copyright() {
    document.body.addEventListener("copy", function (e) {
        if (window.getSelection().toString().length > 30) {
            e.preventDefault();
			var htmlData = "# \u4f5c\u8005(Author):LhanMan <br>" + "# \u94fe\u63a5(URL):" + window.location.href + "<br>" + "# \u6765\u6e90(Source):LhannMan\u306e\u5c0f\u7ad9 <br><br>" + window.getSelection().toString().replace(/\r\n/g, "<br>");;
			var textData = "# \u4f5c\u8005(Author):LhanMan \n" + "# \u94fe\u63a5(URL):" + window.location.href + "\n" + "# \u6765\u6e90(Source):LhanMan\u306e\u5c0f\u7ad9 \n\n" + window.getSelection().toString().replace(/\r\n/g, "\n");
			if (e.clipboardData) {
				e.clipboardData.setData("text/html", htmlData);
				e.clipboardData.setData("text/plain", textData);
			} else if (window.clipboardData) {
				return window.clipboardData.setData("text", textData);
			}
        }
		message.success({
		content: <span> 复制成功 !<br/>Copied to clipboard successfully!</span>,
		className: 'butterBar--center',
			duration:2
	  });
       
    });
	}



    getMuisic(){
        axios.get('/music/music/v1/list').then((res) => {
            if(res.models.length > 0){
                const options = {
                    container: document.getElementById('player'),
                    fixed: true,
                    theme: '#fe9600',
                    listMaxHeight: '300px',
                    listFolded: false,
                    lrcType: 1,
					order:'random',
					mutex:false,
                    audio:res.models
                };
                const ap = new APlayer(options);
                ap.on('ended', function () {
                    console.log('player ended');
                });
				ap.on('loadstart',function(){
					ap.lrc.hide()
				})
				ap.on('playing',function(){
					ap.lrc.show()
				})
				ap.on('listswitch',function(){
					ap.lrc.show()
				})
				this.setState({
					display:false,
				},()=>{
				
					for(let i=0; i<document.getElementsByClassName('aplayer-miniswitcher').length;i++){
						document.getElementsByClassName('aplayer-miniswitcher')[i].addEventListener('click',this.handleOpenMusicList,true)
					}
				})
            }
        })
    }
		
	handleOpenMusicList(){
		this.setState({display : !this.state.display},()=>{
					const {display} = this.state
					const musicList = document.querySelectorAll('.aplayer-body');
					if(display === true)
					{
						musicList[0].style="left : 0 !important";
					}
					else
					{
						musicList[0].style="left : -66 !important";
					}
					})
		
}

}

export default App;
