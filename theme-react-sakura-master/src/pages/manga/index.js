import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {Spin, Tag} from "antd";
import {AnimeWrapper, TagsTop, MainWrapper} from './style';
import PagInation from '../../components/PagInation';
import ReactDom from 'react-dom'
import LazyLoad from "react-lazyload";
import SakuraComment from "../article/components/SakuraComment";

const PlaceholderComponent = () =>{
	
	return(
		
		<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.1/img/svg/loader/orange.progress-bar-stripe-loader.svg"/>
		
	)
}


const MangaList = (props) => {
    const {list, loading,display,showDetail,closeDetail} = props;
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
			<article className="hentry chinese-font">
				<div className='bangumi container'>
					<div className='row'>
					{list.length > 0 ?list.map((item, index) => {
						return (
							<div className='col s12 m6' key={index} >
								<div className='card hoverable flowable' id={item.uuid}>
									<div className='card-image waves-effect waves-block waves-light' onClick={()=>showDetail(item.uuid)}>
									<LazyLoad once placeholder={<PlaceholderComponent/>}  offset={100} height={500}>
										<div className='activator itempic lazyload' style={{"backgroundImage": 'url('+item.posterimage+')'}}
													data-src={item.cover} >
													
										</div>
									</LazyLoad>
									</div>
									<div className='card-content'>
										<div className='card-title should-ellipsis activator grey-text text-darken-4'>
											<span onClick={()=>showDetail(item.uuid)} >{item.jptitle} </span>
											 
												  <a href={item.url} target="_blank">
															<i className='right'>
													  		<img className='kitsuLink' src="http://lhanman.oss-cn-shenzhen.aliyuncs.com/public/Manga/favicon.ico"/>
													  		</i>
													</a>
										</div>
									{item.cntitle?
										<p title={item.cntitle} className='should-ellipsis-full'>
											{item.cntitle}
										</p>
											:
											<p title={item.entitle} className='should-ellipsis-full'>
											{item.entitle}
										</p>}

										<ul className='skill-list' >
											<li className='skill'>
												<div>
												{item.progressStr}
												</div>
												<progress className='skill-1' max="100" value={item.progressWidth}>

												</progress>
											</li>
										</ul>
									</div>

									<div className='card-reveal' id={'d'+item.uuid}>
										<span className='card-title grey-text text-darken-4'>
											{item.jptitle}
											<i className='iconfont iconsearchclose right' onClick={()=>closeDetail(item.uuid)}>
												
											</i>
										</span>
										<span className='long-title'>
											{item.entitle}
											<br/>
											<br/>
										</span>
										{item.status == 'current' &&	
										<span>漫画状态：连载中...</span>
										}
										{item.status == 'finished' &&
											<span>漫画状态：已完结</span>
										}
										<br/>
										<span>
											放送时间：{item.startdate}
											<br/>
											{item.status ==='finished' && <span>
												完结时间：{item.enddate}
														</span>
											}
											<br/>
											<span>
											My最近观看时间：{item.progressat}	
											</span>
											<br/>
											<span>
												<a style={{"color":"orange"}}><i className='iconfont iconfenshu'/></a>KitSu平均分数：{item.averagerating}
											</span>
												<br/>
											<span>
												<a style={{"color":"orange"}}><i className='iconfont iconpaiming-tongpai'/></a>KitSu分数排名：{item.ratingrank}
											</span>
												<br/>
											{item.mystatus == '正在追漫' &&
											<span>
												My Status: <i className='iconfont iconreading-selected'/>{item.mystatus}
											</span>}
											{item.mystatus == '已看完' &&
											<span>
												My Status: <i className='iconfont iconwancheng'/>{item.mystatus}
											</span>}
											{item.mystatus == '想看' &&
											<span>
												My Status: <i className='iconfont iconxiangkan'/>{item.mystatus}
											</span>}
											{item.mystatus == '暂时不看' &&
											<span>
												My Status: <i className='iconfont iconzt'/>{item.mystatus}
											</span>}
											{item.mystatus == '烂漫' &&
											<span>
												My Status: <i className='iconfont iconchaping'/>{item.mystatus}
											</span>}
											<br/>
											<span>
												<p>
													&nbsp;&nbsp;&nbsp;&nbsp;{item.summary}
												</p>
												
												<ul className='skill-list' >
													<li className='skill'>
														<div>
														{item.progressStr}
														</div>
														<progress className='skill-1' max="100" value={item.progressWidth}>

														</progress>
													</li>
												</ul>
											</span>
										</span>
									</div>


								  </div>
								</div>
									
							
						)
					}):<p>你怎么还没有追番记录啊</p>}
						</div>
					</div>
			</article>
        )
    }
};


class Manga extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
			display : false,
			finished : false,
			id : 10003,
			isComment : 1,

        };
		
    }

    render() {
        const {list, loading,display,finished,isComment,id} = this.state;
        return (
            <AnimeWrapper>
				
				<div className='pattern-center-blank'/>
				<div className="site-content chinese-font">
                <header className = "page-header">
					<h1 className = "cat-title">Manga DASH</h1>
					<span className = "cat-des"><p><span style={{"fontSize":"26px"}}>漫画</span>Paradise</p></span>
				</header>
				</div>
                
                <MainWrapper>
					 <MangaList list={list} loading={loading} display={display}  showDetail={this.showDetail} closeDetail={this.closeDetail}/>
				     <SakuraComment isComment={isComment} id={id} />
				</MainWrapper>
            </AnimeWrapper>
        )
    }

    componentDidMount() {
       this.getManga();
    }

    getManga() {
		
        this.setState({loading: true});
        axios.get('/manga/getMangaList').then((res) => {
            if (res.success === 1) {
				
				 this.setState({
                    list: res.models,
                    loading: false
                })
            }
        });
    }

	showDetail =(id) =>{
		
		let AnimeItem = document.getElementById(id);
		let DetailItem = document.getElementById('d'+id);
		ReactDom.findDOMNode(AnimeItem).style.overflow = 'hidden';
		ReactDom.findDOMNode(DetailItem).style.display = 'block';
		//我也太牛逼了吧！
		setTimeout(()=>{
					ReactDom.findDOMNode(DetailItem).style.transform = 'translateY(-100%)';	
				},5)
		
	}
	
	closeDetail = (id) =>{
		let AnimeItem = document.getElementById(id);
		let DetailItem = document.getElementById('d'+id);
		
		setTimeout(()=>{
					ReactDom.findDOMNode(DetailItem).style.transform = 'translateY(0%)';
				},5)	

		
		

	}
	

   
}



export default Manga
