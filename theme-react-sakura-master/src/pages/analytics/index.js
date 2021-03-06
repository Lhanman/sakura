import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {Spin, Tag} from "antd";
import {AnalyticsWrapper, ListWrapper,GlobalStyle} from './style';
import ReactDom from 'react-dom'
import {getSiteRunningTime,getSiteRunningDay} from '../../lib/public';


const AnalyticsData = (props) => {
    const {siteInfo,loading,siteLastUpdateTime,siteRunningTime,siteRunningDay} = props;
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
			<div id='content' className='site-content'>
			<span className="linkss-title"></span>
			<article className='page type-page status-publish hentry'>
				<center>
					<b>在小站存活的 <span className='monitorday'></span> {siteRunningDay} 天里</b>
					<br/>
					发布了 {siteInfo.articleNum-6} 篇博文
					<br/>
					收到了 {siteInfo.commentNum} 条留言
					<br/>
					总计有 {siteInfo.tagNum} 个标签
					<br/>
					累计 PV {siteInfo.pvNum}
					<br/>
					当前在线 {siteInfo.onlineNum+1} 人
					<br/>
					您是今天第 {siteInfo.todayVisitors} 位访客 
					<br/>
					最近更新时间：{siteLastUpdateTime}
					<br/>
					网站运行天数：{siteRunningTime}
					<br/>
					<br/>
					<br/>
					当前Ip：{siteInfo.ip} ({siteInfo.city} {siteInfo.area})
					<br/>
					&nbsp;&nbsp;
					<span className='useragent-info'>
						(<img src={siteInfo.browser_icon}/> {siteInfo.browser_name}({siteInfo.browser_manufacturer}) {siteInfo.browser_version}&nbsp;&nbsp;
							<img src={siteInfo.operationIcon}/> {siteInfo.operatingSystem})
					</span>	
					<br/>
					{siteInfo.userAgent}
					<br/>
					<hr/>
					

				</center>
			</article>
			</div>
        )
    }
};


class Analytics extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
			siteInfo:'',
            loading: true,
			siteRunningTime:'',
			siteRunningDay:'',
        };

		this.countDownSiteRunningTime = this.countDownSiteRunningTime.bind(this);
		
    };

	
    render() {
        const {siteInfo,loading,siteRunningTime,siteRunningDay} = this.state;
		 //网站最后更新时间（版本更新需更改）
		const siteLastUpdateTime = '2020年6月16日23点';

		

        return (
            <AnalyticsWrapper>
				<GlobalStyle/>
				<div className='pattern-center-blank'/>
				<div className="site-content chinese-font">
					<div id='primary' className='content-area'>
						<main id='main' className='site-main' role='main'>
							<article className='hentry'>
								<header className='entry-header'>
									<h1 className='entry-title'>
										Statistical Information
									</h1>
									
								</header>
								<ListWrapper>
								    <AnalyticsData siteInfo={siteInfo} loading={loading} siteLastUpdateTime={siteLastUpdateTime} siteRunningTime={siteRunningTime} siteRunningDay={siteRunningDay}/>
								</ListWrapper>
								<footer className='entry-footer'></footer>
							</article>
						</main>
					</div>
				</div>
            
            </AnalyticsWrapper>
        )
    }

    componentDidMount() {
      this.getSiteInfo();
	  this.countDownSiteRunningTime();
	  
    }

    getSiteInfo() {
		
        this.setState({loading: true});
        axios.get('/stat/v1/info').then((res) => {
            if (res.success === 1) {
				 this.setState({
					siteInfo: res.model,
                    loading: false
                })
            }
        });
    }

	
	countDownSiteRunningTime()
	{
			//网站开始时间
			const siteBeginRunningTime = '2020-06-8 12:47:00';
			const nowDate = new Date().getTime();
			//网站开始运行日期
			const oldDate = new Date(siteBeginRunningTime.replace(/-/g,'/'));
			const time = oldDate.getTime();
			let theTime = parseInt((nowDate-time)/1000);
			setInterval(()=>{
				const runningTime = getSiteRunningTime(theTime);
				const runningDay = getSiteRunningDay(theTime)
				theTime++;
				this.setState({
					siteRunningTime : runningTime,
					siteRunningDay : runningDay,
				})
					
			},1000);
			
			
	}



	


	

   
}


export default Analytics
