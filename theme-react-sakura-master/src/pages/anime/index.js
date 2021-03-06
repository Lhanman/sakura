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

const AnimeList = (props) => {
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
				<div className='bangumi'>
					<div className='row'>
					{list.length > 0 ?list.map((item, index) => {
						return (
							<div className='col s12 m6' key={index} >
								<div className='card hoverable flowable' id={item.session_id}>
									<div className='card-image waves-effect waves-block waves-light' onClick={()=>showDetail(item.session_id)}>
										<LazyLoad once placeholder={<PlaceholderComponent/>}  offset={100} height={500}>
										<div className='activator itempic lazyload' style={{"backgroundImage": 'url('+item.cover+')'}}
													data-src={item.cover} >
										</div>
										</LazyLoad>
									</div>
									<div className='card-content'>
										<div className='card-title should-ellipsis activator grey-text text-darken-4'>
											<span onClick={()=>showDetail(item.session_id)} >{item.title} </span>
											 
												  <a href={item.url} target="_blank">
														<i className='iconfont iconbilibili- right bilibili'/>
													</a>
										</div>
										<p className='should-ellipsis-full'>
											最新话： {item.long_title}
										</p>

										<ul className='skill-list' >
											<li className='skill'>
												<div>
												{item.myProgress}
												</div>
												<progress className='skill-1' max="100" value={item.progressWidth}>

												</progress>
											</li>
										</ul>
									</div>

									<div className='card-reveal' id={'d'+item.session_id}>
										<span className='card-title grey-text text-darken-4'>
											{item.title}
											<i className='iconfont iconsearchclose right' onClick={()=>closeDetail(item.session_id)}>
												
											</i>
										</span>
										<span className='long-title'>
											最新话：{item.long_title}
											<br/>
											<br/>
										</span>
										<span>
											放送时间：{item.release_date_show}
											<span>
												<p>
													&nbsp;&nbsp;&nbsp;&nbsp;{item.evaluate}
												</p>
												
												<ul className='skill-list' >
													<li className='skill'>
														<div>
														{item.myProgress}
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


class Anime extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true,
			display : false,
			finished : false,
			page: 1,
			id : 10002,
			isComment : 1,

        };
		this.getAnime = this.getAnime.bind(this);
    }

    render() {
        const {list, loading,display,page,finished,isComment,id} = this.state;
        return (
            <AnimeWrapper>
				
				<div className='pattern-center-blank'/>
				<div className="site-content chinese-font">
                <header className = "page-header">
					<h1 className = "cat-title">番组计划</h1>
					<span className = "cat-des"><p>肥宅的快乐Space</p></span>
				</header>
				</div>
                
                <MainWrapper>
					 <AnimeList list={list} display={display}  showDetail={this.showDetail} closeDetail={this.closeDetail}/>
					 <PagInation page={page}  finished={finished} loading={loading} getList={this.getAnime}/>
					 <SakuraComment isComment={isComment} id={id} />
                </MainWrapper>
            </AnimeWrapper>
        )
    }

    componentDidMount() {
       this.getAnime(1,true);
    }

    getAnime(page,override) {
		
        this.setState({loading: true});
        axios.get('/anime/getAnime',{
			params:{
				pageNum : page,
				pageSize : 16,
			}
        }).then((res) => {
            if (res.success === 1) {
				let current = res.pageInfo.page * res.pageInfo.size;
                let total = res.pageInfo.total;
				const data = res.models;
				let arr = [];

				  for (let i = 0; i < data.length; i++) {
                    arr.push({
                        session_id: data[i].session_id,
                        title: data[i].title,
                        cover: data[i].cover,
                        evaluate: data[i].evaluate,
                        myProgress: data[i].myProgress,
                        progressWidth: data[i].progressWidth,
                        long_title: data[i].long_title,
                        release_date_show: data[i].release_date_show,
                        url: data[i].url,
                       
                    })
                }

                this.setState((prevState) => {
					return {
                        list: override ? arr : [...prevState.list, ...arr],
                        page: page + 1,
                        loading: false
                    }
                    
                });

				
				if (current > total) {
                    this.setState({
                        finished: true
                    })
                }
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

const post_list_show_animation = () =>{
		if(document.getElementsByClassName('col') != null)
		{
			
			var options = {
            root: null,
            threshold: [0.88]
			}
			 var io = new IntersectionObserver(callback, options);
			 var articles = document.querySelectorAll('.col');
			
			function callback(entries) {
            entries.forEach((article) => {
				
                if (!window.IntersectionObserver) {
                    article.target.style.willChange = 'auto';
                    if( article.target.classList.contains("post-list-show") === false){
                        article.target.classList.add("post-list-show");
                    }
                } else {
                    if (article.target.classList.contains("post-list-show")) {
                        article.target.style.willChange = 'auto';
                        io.unobserve(article.target)
                    } else {
                        if (article.isIntersecting) {
							
                            article.target.classList.add("post-list-show");
                            article.target.style.willChange = 'auto';
                            io.unobserve(article.target)
                        }
                    }
                }
            })
        }
			 articles.forEach((article) => {
				
            io.observe(article)
        })
			 
		}
	}

const mapState = (state) => {
    return {
        topImg: state.getIn(['image', 'bannerList'])
    }
};

export default connect(mapState)(Anime)
