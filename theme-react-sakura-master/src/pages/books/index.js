import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {Spin, Tag} from "antd";
import {BooksWrapper, TagsTop, ListWrapper} from './style';
import ReactDom from 'react-dom'
import "animate.css";
import SakuraComment from "../article/components/SakuraComment";

const BooksList = (props) => {
    const {wishList,readingList,finishedList, loading} = props;
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
				<div className='entry-content'>
					<h3 className='animate__animated animate__bounceIn animate__delay-.5s'>
					Wish List...
					</h3>
					{wishList.length > 0 ?wishList.map((item, index) => {
						return (
							<p key={index}  className='animate__animated animate__lightSpeedInRight animate__delay-1s'>
								<strong>{item.name}</strong>
								<br/>
								{item.description.split(item.author)[1] ? 
									<span>{item.description.split(item.author)[0]}<strong>{item.author.trim()}</strong>{item.description.split(item.author)[1]}</span>
									:<span>{item.description}</span>
								}
								<br/>
									{item.douban_link && <a href={item.douban_link} target='_blank' rel="nofollow">
												Detail <i className='iconfont iconbook-mark1' aria-hidden="true"/>				
											</a>
									}
									{item.purchase_link && <span style={{display:"inline"}}>
											&nbsp;|&nbsp;
											<a href={item.purchase_link} target='_blank' rel="nofollow">
												Purchase Link <i className='iconfont iconPurchase' aria-hidden='true'/>
											</a>
											</span>
									}

									{item.pdf_link && <span style={{display:"inline"}}>
											&nbsp;|&nbsp;
											<a href={item.pdf_link} target='_blank' rel="nofollow">
												PDF <i className='iconfont iconPDF' aria-hidden='true'/>
											</a>
											</span>
									}
							</p>
						)
					}):<p>空的~该多读读书啦（；´д｀）ゞ</p>}

					<h3 className='animate__animated animate__bounceIn animate__delay-2s'>
						I'am Reading: 
					</h3>
					{readingList.length > 0 ?readingList.map((item, index) => {
						return (
							<p key={index} className='animate__animated animate__lightSpeedInRight animate__delay-3s'>
								<strong>{item.name}</strong>
								<br/>
								{item.description.split(item.author)[1] ? 
									<span>{item.description.split(item.author)[0]}<strong>{item.author.trim()}</strong>{item.description.split(item.author)[1]}</span>
									:<span>{item.description}</span>
								}
								<br/>
									{item.douban_link && <a href={item.douban_link} target='_blank' rel="nofollow">
												Detail <i className='iconfont iconbook-mark1' aria-hidden="true"/>				
											</a>
									}
									{item.purchase_link && <span style={{display:"inline"}}>
											&nbsp;|&nbsp;
											<a href={item.purchase_link} target='_blank' rel="nofollow">
												Purchase Link <i className='iconfont iconPurchase' aria-hidden='true'/>
											</a>
											</span>
									}

									{item.pdf_link &&  <span style={{display:"inline"}}>
											&nbsp;|&nbsp;
											<a href={item.pdf_link} target='_blank' rel="nofollow">
												"PDF" <i className='iconfont iconPDF' aria-hidden='true'/>
											</a>
											</span>
									}
							</p>
						)
					}):<p >空的~该多读读书啦（；´д｀）ゞ</p>}

					<h3 className='animate__animated animate__bounceIn animate__delay-4s'>
						Done List...
					</h3>
						{finishedList.length > 0 ?finishedList.map((item, index) => {
						return (
							<p key={index}  className='animate__animated animate__lightSpeedInRight animate__delay-4s'>
								<strong>{item.name}</strong>
								<br/>
								{item.description.split(item.author)[1] ? 
									<span>{item.description.split(item.author)[0]}<strong>{item.author.trim()}</strong>{item.description.split(item.author)[1]}</span>
									:<span>{item.description}</span>
								}
								<br/>
									{item.douban_link && <a href={item.douban_link} target='_blank' rel="nofollow">
												Detail <i className='iconfont iconbook-mark1' aria-hidden="true"/>				
											</a>
									}
									{item.purchase_link && <span style={{display:"inline"}}>
											&nbsp;|&nbsp;
											<a href={item.purchase_link} target='_blank' rel="nofollow">
												Purchase Link <i className='iconfont iconPurchase' aria-hidden='true'/>
											</a>
											</span>
									}

									{item.pdf_link &&  <span style={{display:"inline"}}>
											&nbsp;|&nbsp;
											<a href={item.pdf_link} target='_blank' rel="nofollow">
												PDF <i className='iconfont iconPDF' aria-hidden='true'/>
											</a>
											</span>
									}
							</p>
						)
					}):<p>空的~该多读读书啦（；´д｀）ゞ</p>}

				</div>
        )
    }
};


class Books extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            wishList: [],
			readingList : [],
			finishedList : [],
            loading: true,
			display : false,
			finished : false,
			page: 1,
			id : 10001,
			isComment : 1,

        };
		
    }

    render() {
        const {wishList,readingList,finishedList,loading,display,page,finished,id,isComment} = this.state;
        return (
            <BooksWrapper>
				
				<div className='pattern-center-blank'/>
				<div className="site-content chinese-font">
					<div id='primary' className='content-area'>
						<main id='main' className='site-main' role='main'>
							<article className='hentry'>
								<header className='entry-header'>
									<h1 className='entry-title animate__animated animate__rotateIn animate__delay-5s'>
										Book List
									</h1>
									
								</header>
								<ListWrapper>
								    <BooksList wishList={wishList} readingList={readingList} finishedList={finishedList} loading={loading} />
									<SakuraComment isComment={isComment} id={id} />
								</ListWrapper>
								<footer className='entry-footer'></footer>
							</article>
						</main>
					</div>
				</div>
            
            </BooksWrapper>
        )
    }

    componentDidMount() {
       this.getWithList();
	   this.getReadingList();
	   this.getFinishedList();
    }

    getWithList() {
		
        this.setState({loading: true});
        axios.get('/books/getBookList',{
			
			params:{
				progress : "0",
			}

        }).then((res) => {
            if (res.success === 1) {
				 this.setState({
                    wishList: res.models,
                    loading: false
                })
            }
        });
    }

	getReadingList(page,override) {
		 this.setState({loading: true});
        axios.get('/books/getBookList',{
			
			params:{
				progress : "1",
			}

        }).then((res) => {
            if (res.success === 1) {
				 this.setState({
                    readingList: res.models,
                    loading: false
                })
            }
        });
    }

	getFinishedList(page,override) {
		 this.setState({loading: true});
        axios.get('/books/getBookList',{
			
			params:{
				progress : "2",
			}

        }).then((res) => {
            if (res.success === 1) {
				 this.setState({
                    finishedList: res.models,
                    loading: false
                })
            }
        });
    }

	

   
}


export default Books
