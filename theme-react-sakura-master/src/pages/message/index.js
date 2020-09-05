import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import {Spin, Tag} from "antd";
import {MessageWrapper, MessageTop, MainWrapper} from './style';
import {CommentsWrapper, CommentTextarea,CommentHideTextarea} from '../article/style';
import SakuraComment from "../article/components/SakuraComment";
import "animate.css";

const jinrishici = require('jinrishici');

const Yiyan = (props) => {
	const {loading,poem} = props;

	
    if (loading) {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    } else {
        return (
           <div id='primary' className='content-area'>
				<main id='main' className='site-main' role='main'>
					<article className='post-52 page type-page status-publish has-post-thumbnail hentry'>
						<div className='toc-container' style={{'height':'361.8px'}}>
							<div className='toc' style={{'background':'none'}}>
							</div>
						</div>

						<div className='entry-content'>
							<div className='poem-wrap'>
								<div className='poem-border poem-border poem-left'></div>
								<div className="poem-border poem-right"></div>
								<h1 className='animate__animated animate__swing animate__delay-1s'>念两句诗</h1>
								<p id='poem'>
									{poem.content}
								</p>
								<p id='info'>
									【{poem.origin.dynasty}】{poem.origin.author}《{poem.origin.title}》
								</p>
							</div>
						</div>
							<footer className="entry-footer"></footer>
					</article>
				</main>
			</div>
        )
    }
};



class Message extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
			poem:'',
			id : 10000,
			isComment : 1,

        }
    }
	

	
    render() {
		
		

        const {poem, loading,id,isComment} = this.state;
        return (
            <MessageWrapper>
                <div className='pattern-center-blank'/>
                <MessageTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src="http://static.lhanman.cn/static/images/message/message.png"alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>留言板</h1>
                    </div>
                </MessageTop>
                <MainWrapper>
					<Yiyan loading={loading} poem={poem} />
					<SakuraComment isComment={isComment} id={id} />
                </MainWrapper>
            </MessageWrapper>
        )
    }

    componentDidMount() {
       this.fillInPoem();
    }


	fillInPoem()
	{
		jinrishici.load(result => {
			if(result.status='success')
			{
				 this.setState({
					poem : result.data,
					loading : false,
				  })
				
			}
		 
		});
	}
}


export default Message
