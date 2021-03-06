import React, {PureComponent} from "react";
import {connect} from 'react-redux';
import {FeatureTitle, HomeList, BlogList} from "../style";
import {Link} from "react-router-dom";
import {getrand, getTime} from "../../../lib/public";
import PagInation from '../../../components/PagInation';
import * as constants from "../store/constants";
import axios from "axios";
import {fromJS} from "immutable";
import LazyLoad from "react-lazyload";

const PlaceholderComponent = () =>{
	
	return(
		
		<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.1/img/svg/loader/orange.progress-bar-stripe-loader.svg"/>
		
	)
}



const List = (props) => {
    const {blogList} = props;
    const list = blogList.toJS();
    const Class = ['blog-item post-list-thumb  left', 'blog-item post-list-thumb  right'];
	
    return (
        <BlogList>
            {list.map((item, index) => {
                return (
                    <div className={Class[index % Class.length]} key={index}>
					  <div className="container">
                        <div className='post-thumb'>
                            <Link to={'/article/' + item.id}>
							 <LazyLoad once placeholder={<PlaceholderComponent/>}  offset={300} height={500} debounce={20}>
                                <img src={item.thumbnail} alt=""/>
							 </LazyLoad>
                            </Link>
                        </div>
                        <div className='post-content-wrap'>
                            <div className='post-content'>
                                <div className='post-date'>
                                    <i className='iconfont icon-time'/>
                                    发布于 {getTime(item.createTime)}
                                </div>
                                <Link to={'/article/' + item.id} className='post-title'>
                                    <h3>{item.title}</h3>
                                </Link>
                                <div className='post-meta'>
                                    <span>
                                        <i  className='iconfont iconattention'/>
                                        {item.views} 热度
                                    </span>
                                    <span className='comments-number'>
                                        <i  className='iconfont iconmark'/>
										 <Link to={'/article/' + item.id+'#comments'}>
                                        {item.comments} 评论
										</Link>
                                    </span>
                                    {item.categoryName && <span>
                                        <i style={{fontSize : '15px'}} className='iconfont iconfile1'/>
                                         <Link to={'/category/' + item.categoryId}>
												{item.categoryName}
										</Link>
                                    </span>}
									
                                </div>
                                <div className='float-content'>
                                    <p>{item.summary}</p>
                                    <div className='post-bottom'>
                                        <Link to={'/article/' + item.id}>
                                            <i className='iconfont iconcaidan'/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
						</div>
                    </div>
				
                )
            })}
        </BlogList>
    )
};

class ListWrapper extends PureComponent {
    render() {
        const {page, finished, loading} = this.props;
        return (
            <HomeList>
                <FeatureTitle>
                    <h1><a style={{color : "#228B22"}}><i className='iconfont iconenvira'/></a><span> Discovery</span></h1>
                </FeatureTitle>
                {List(this.props)}
                <PagInation
                    page={page}
                    finished={finished}
                    loading={loading}
                    getList={this.props.getBlogList.bind(this.props)}
                />
            </HomeList>
        )
    }

    componentDidMount() {
        if (!this.props.isList) {
            this.props.getBlogList(1, true);
        }
    }
}

const mapState = (state) => {
	if(document.querySelectorAll('.post-list-thumb').length != 0)
	{
		post_list_show_animation();
	}
    return {
        blogList: state.getIn(['home', 'blogList']),
        page: state.getIn(['home', 'articlePage']),
        finished: state.getIn(['home', 'finished']),
        loading: state.getIn(['home', 'loading']),
        isList: state.getIn(['home', 'isList']),
        ListImg: state.getIn(['image', 'ListImg']),
    }
};

const setBlogList = (data, nextPage, override,method) => {
	return {
    type: constants.GET_BLOGLIST,
    data: fromJS(data),
    nextPage,
    override,
	}
}

const setfinished = () => ({
    type: constants.SET_FINISHED,
});

const list = (thumbList, data) => {
    const list = data;
    const Img = thumbList;
    let arr = [];
    for (let i = 0; i < list.length; i++) {
        arr.push({
            id: list[i].id,
            title: list[i].title,
            thumbnail: list[i].thumbnail || Img[getrand(0, Img.length - 1)].img,
            comments: list[i].comments,
            status: list[i].status,
            summary: list[i].summary,
            views: list[i].views,
            createTime: list[i].createTime,
            syncStatus: list[i].syncStatus,
            author: list[i].author,
            categoryName: list[i].categoryName,
			categoryId : list[i].categoryId,
        })
    }
    return arr
};


const post_list_show_animation = () =>{
		if(document.getElementsByClassName('post-list-thumb') != null)
		{
			
			var options = {
            root: null,
            threshold: [0.18]
			}
			 var io = new IntersectionObserver(callback, options);
			 var articles = document.querySelectorAll('.post-list-thumb');
			
			
			function callback(entries) {
            entries.forEach((article,index) => {
			
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

const mapDispatch = (dispatch) => {
    return {
        getBlogList(page, override) {
            dispatch({type: constants.LOADING_TRUE});
            axios.get('/posts/posts/v1/list', {
                params: {
                    page: page,
                    size: 10

                }
            }).then((res) => {
                if (res.success === 1) {
                    let current = res.pageInfo.page * res.pageInfo.size;
                    let total = res.pageInfo.total;
                    let data = list(this.ListImg, res.models);
                    dispatch(setBlogList(data, page + 1, override));
					post_list_show_animation();
                    if (current > total) dispatch(setfinished());
                }
            });
        },
    }
};

export default connect(mapState, mapDispatch)(ListWrapper);
