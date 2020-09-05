import React, {PureComponent} from "react";
import {CommentsWrapper, CommentTextarea,CommentHideTextarea} from '../style';
import {getFormatTime, getTime} from '../../../lib/public';
import {Pagination, message,Spin} from 'antd';
import axios from "axios";
import {loginGithubHandel} from '../../../lib/auth';
import openWindow from '../../../lib/openWindow';

class SakuraComment extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            isComment: props.isComment,
            commentsList: [],
            pageInfo: {},
            value: '',
            parentId: '',
            preContent: '',
			respondent: '',
			found : false,
			pageNum : 1,
			loading : true,
			commentLoading : false,
        };
        this.setValue = this.setValue.bind(this);
        this.addComments = this.addComments.bind(this);
        this.reply = this.reply.bind(this);
    }

    render() {
        const {pageInfo, id, commentsList, isComment,loading,commentLoading} = this.state;
        return (
            <CommentsWrapper>
                <h3 className='comments-list-title' id="comments">Comments | <span className="noticom">{pageInfo.total} 条评论 </span>
                </h3>
                <ul className='commentwrap'>
			{loading ? 
					(<div className="example">
						<Spin size="large"/>
					</div> )
					
                    : (pageInfo.total !== 0 || isComment !== 1 ? (commentsList.map((item, index) => {
                        return (
                            <li className='comment' key={index} id={"p"+item.id}>
							<div className='hoverable'>
                                <div className='commentinfo flex-items'>
                                    <img className='rotateImg' src={item.authorAvatar} alt=""/>
                                    <div className='commeta cell'>
                                        <h2>{item.authorName} {item.authorName === 'LhanMan'&&<span className='isAdmin' title='Admin'>博主</span>}
										</h2>
                                        <h3>
										发布于 {getFormatTime(item.createTime)}&nbsp;&nbsp;
										<span className='useragent-info'>
											( <img className='agent-icon' src={item.browser_icon}/>{item.browser_name}&nbsp;{item.browser_version}&nbsp;
												<img className='agent-icon' src={item.operation_icon}/>&nbsp;{item.operating_system} )
										</span>
										&nbsp;来自：{item.city}&nbsp;{item.area}
										</h3>
                                    </div>
                                    <span onClick={() => this.reply(item.id, item.authorName)}
                                          className='comment-reply-link comment_reply'>Reply</span>
                                </div>
                                <div className='body'>
                                    <p>{item.parentUserName && <span>@{item.parentUserName}</span>}{item.content}
										  </p>
                                </div>
							</div>
                                <hr/>
								{item.replies.map((item2,index2) => {
									return(
										<ul className="children comment" key={item2.id} id={"p"+item2.id}>
										<div className='hoverable'>
											<div className='commentinfo flex-items'>
												<img className='rotateImg' src={item2.authorAvatar} alt=""/>
												<div className='commeta cell'>
													<h2>{item2.authorName} {item2.authorName === 'LhanMan'&&<span className='isAdmin' title='Admin'>博主</span>}</h2>
													<h3>
														发布于 | {getFormatTime(item2.createTime)}&nbsp;&nbsp;
														<span className='useragent-info'>
															( <img className='agent-icon' src={item2.browser_icon}/>&nbsp;{item2.browser_name}&nbsp;{item2.browser_version}&nbsp;&nbsp;
																<img className='agent-icon' src={item2.operation_icon}/>&nbsp;{item2.operating_system} )
														</span>
														&nbsp;来自：{item2.city}&nbsp;{item2.area}
													</h3>
												</div>
												 <span onClick={() => this.reply(item.id, item2.authorName)}
														 className='comment-reply-link comment_reply'>Reply</span>
											</div>
											<div className='body'>
												<p>{item2.parentUserName && <a className="comment-at">@{item2.parentUserName}</a>}{item2.content}
														 </p>
											</div>
											<hr/>
										</div>
										</ul>
									)
							
								})}

								
									
									   </li>
                        )
                    }))
						: (<div className="comment">
							<span className="noComment" style={{'marginLeft':'50px'}}>还没有人在这评论，快来抢沙发咯！~</span>
						  </div>)
								  )
					}
                </ul>
                <Pagination
                    className='pagination'
                    hideOnSinglePage
                    size="small"
                    onChange={(page) => {
						this.setState({
							loading : true,
							value : '',
						})
						this.getComments(id, page)
						
						document.getElementById("comments").scrollIntoView({behavior: "smooth",block:"center"});	
						}
                    }
                    itemRender={this.itemRender}
                    current={pageInfo.page} pageSize={15} total={pageInfo.total}
                />
				<p style={{'marginBottom': '5px','fontSize':'15px','fontWeight':'800','marginTop':'25px','marginLeft':'20px'}}>
					<i className='iconfont iconshuaige' style={{'fontWeight':'500'}}></i>
					&nbsp;One's words reflect one's thinking
				</p>
                {isComment === 1 ? <CommentTextarea>
                    <textarea
                        placeholder=" "
                        name="comment"
                        className="commentbody"
                        id="comment"
                        rows="5" tabIndex="4"
                        value={this.state.value}
                        onChange={this.setValue}
                    />
					<label className='input-label active'>
						你是我一生只会遇见一次的惊喜 ...
					</label>
                    <div className='form-submit'>
					{!commentLoading? <input
                            onClick={this.addComments}
                            name="submit"
                            type="submit"
                            id="submit"
                            className="submit"
                            value="BiuBiuBiu~"
                        /> :<input
                            name="submit"
                            type="submit"
                            id="submit"
                            className="submit"
                            value="Loading..."
                        />}

                    </div>
                </CommentTextarea> : <p className='text'>此处评论已关闭</p>}
            </CommentsWrapper>
        )
    }

    componentDidMount() {
		this.getComments(this.props.id, 1);
    }

    reply(parentId, authorName) {
		
        this.setState({
            value: `@${authorName}：`,
            preContent: `@${authorName}：`,
            parentId: parentId,
			respondent :authorName,
        });
		document.getElementById("comment").scrollIntoView({behavior: "smooth",block:"center"});
    }

	scrollTo()
	{
		
		
		const id = window.location.href.substring(window.location.href.lastIndexOf('#')+1);
		
		if(window.location.href.lastIndexOf('#p') != -1 && document.getElementById(id) != null)
		{
			
			document.getElementById(id).scrollIntoView({behavior: "smooth",block:"center"});
			this.setState({
				found : true,	
			});
		}
		else if(window.location.href.lastIndexOf('#p') != -1 && document.getElementById(id) === null)
		{
			this.getComments(this.props.id, this.state.pageNum);
		}
		
		else
		{
			this.setState({
				found : true,	
			});
		}
	}

    itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <span className="previous">« Newer</span>;
        }
        if (type === 'next') {
            return <span className="next">Older »</span>;
        }
        return originalElement;
    }

    setValue(e) {
        const value = e.target.value;
        this.setState((prevState) => {
            return {
                value: value,
                parentId: value ? prevState.parentId : '',
                preContent: value ? prevState.preContent : '',
            }
        });
    }

    addComments() {
        const {value, id, parentId, preContent,respondent} = this.state;
        const data = {content: value, postsId: id,respondent: respondent};
        if (value === '') {
            message.warning('please type a comment');
            return false
        }
        if (parentId) {
            let content = value.replace(preContent, "");
            if (content === '') {
                message.warning('please type a comment');
                return false
            }
            if (value.indexOf(preContent, 0) !== -1) {
                data["parentId"] = parentId;
                data["content"] = content;
				data["respondent"] = respondent;
            }
        }
		this.setState({commentLoading:true})
        axios({
            method: 'post',
            url: '/comments/comments/v1/add',
            data: data
        }).then((res) => {
            if (res.success === 1) {
				this.setState({commentLoading:false})
                message.success('评论成功');
                this.setState({
                    value: '',
                    parentId: ''
                });
				if(parentId)
				{
					if(document.getElementById("p"+parentId) != null)
					{
						this.getComments(id, this.state.pageInfo.page);
						document.getElementById("p"+parentId).scrollIntoView({behavior: "smooth",block:"center"});
					}
					else
					{
						this.getComments(id, 1);
						document.getElementById("comments").scrollIntoView({behavior: "smooth",block:"center"});
					}
				
				}
				else
				{
					this.getComments(id, 1);
					document.getElementById("comments").scrollIntoView({behavior: "smooth",block:"center"});
				}
                

            } else if(res.resultCode === "00020"){
				this.setState({commentLoading:false})
                message.warning('需要登录才可以评论喔!亲~');
				
				
            }
			else if(res.resultCode ==="00002")
				{
					this.setState({commentLoading:false})
					message.warning('出现错误，你所回复的评论不存在!');
				}
			else
				{
					this.setState({commentLoading:false})
					message.error('服务器出现异常');
				}
        });
    }

    login() {
       
    }

    getComments(id, page) {
		const rid = window.location.href.substring(window.location.href.lastIndexOf('#')+1);
        axios.get('/comments/comments-posts/v1/list', {
            params: {
                page: page,
                size: 15,
                postsId: id
            }
        }).then((res) => {
            if (res.success === 1) {
                this.setState({
                    commentsList: res.models,
                    pageInfo: res.pageInfo,
					loading : false,
					pageNum : this.state.pageNum + 1,
                },()=>{
					if(this.state.found === false)
						{
							this.scrollTo();
						}
                })
            }
        });
    }
}

export default SakuraComment;
