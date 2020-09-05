import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
//import marked from 'marked';
import hljs from 'highlight.js';
import {ArticleWrapper, ArticleTop, MainWrapper} from './style';
import {getTime} from '../../lib/public';
import 'highlight.js/styles/atom-one-dark.css'
import {Spin} from 'antd';
import Tocify from './tocify';
import SakuraComment from './components/SakuraComment';
import axios from "axios";
import {Link} from "react-router-dom";
import $ from 'jquery';
import RcViewer from '@hanyk/rc-viewer'
import MarkdownIt from 'markdown-it' 
import emoji from 'markdown-it-emoji'
import mark from 'markdown-it-mark'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItTocDoneRight from 'markdown-it-toc-done-right'
import LazyLoad from "react-lazyload";

const PlaceholderComponent = () =>{
	
	return(
		
		<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.1/img/svg/loader/orange.progress-bar-stripe-loader.svg" style={{'width':'100%','height':'100%'}}/>
		
	)
}


class Article extends PureComponent { 

    mdParser = null
	
	//tocify = null

    constructor(props) {
        super(props);
		
	//	this.tocify = new Tocify()
		this.mdParser = new MarkdownIt({
			  html: true,
			  linkify: true,
			  typographer: true,
			  highlight: function (str, lang) {
				if (lang && hljs.getLanguage(lang)) {
				  try {
					return '<pre class="highlight-wrap"><code class="language-'+lang+'" data-rel="'+lang+'">'+
						hljs.highlight(lang, str).value +
							'</code></pre>'
				  } catch (__) {}
				}    
				return '' // use external default escaping
			  }
		 })
		.use(emoji)
		.use(mark)
		.use(MarkdownItAnchor,{
			
		})
		.use(MarkdownItTocDoneRight,{
			listType:'ul',
			
		})
		
		
		this.mdParser.renderer.rules.link_open =(tokens, idx, options, env, self) => {
			const token = tokens[idx];
			return '<a href="'+token.attrs[token.attrIndex('href')][1]+'" target="_blank" rel="nofollow">'
		}
		this.mdParser.renderer.rules.link_close = (tokens, idx, options, env, self) => {
			return "</a>"
		}
		this.mdParser.renderer.rules.s_open = (tokens, idx, options, env, self) =>{
			return "<del title='你知道的太多了 (￣y▽,￣)╭ '>"
			
		}
		this.mdParser.renderer.rules.s_close = (tokens, idx, options, env, self) =>{
			return "</del>"
			
		}
		
		

		
		
        this.state = {
            content: '',
            timg: '',
            id: props.match.params.id,
            socialsList: [],
            
			fixed : false,
        }
			this.handleScroll = this.handleScroll.bind(this)
			
    }

    render() {
        const {content, socialsList,fixed} = this.state;
        const {name, avatar} = this.props.userInfo.toJS();
		const options={};
        //this.tocify && this.tocify.reset();
        if (content.title) document.title = content.title;
        return (
            <ArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={content && (content.thumbnail || this.state.timg)} alt=""/>
                    </div>
                    <div className='single-header'>
                        <h1 className='entry-title'>{content.title}</h1>
                        {content && <p className='entry-census'>
                            <span><img src={avatar} alt=""/></span>
                            <span>{name}</span>
                            <span className="bull">·</span>
                            <span>{getTime(content.createTime)}</span>
                            <span className="bull">·</span>
                            <span>{content.views} 次阅读</span></p>
                        }
                    </div>
                </ArticleTop>
                <MainWrapper>
                    {content ?
					 <RcViewer options={options} ref='viewer'>
                        <div className='flex-items'>
                            <div className='cell articleTip'>
                                <div className='entry-content'
                                     dangerouslySetInnerHTML={{__html: this.mdParser.render(content.content)}}
                                />
                                {this.setSocials(socialsList)}
 
								<section className='post-squares nextprev'>
								<div className={content.nextStatus ==='404' ?'post-nepre previous full' : 'post-nepre previous half '}>
						{content.lastStatus ==='200' &&
									<Link to={'/article/' + content.lastArticleId}>
										<div className='background'>
										<LazyLoad once placeholder={<PlaceholderComponent/>}  offset={300} height={500} debounce={20}>
										<img className='lazyload' src={content.lastPicUrl} style={{'width':'100%','height':'100%','objectFit':'cover','pointerEvents':'none'}}/>
										</LazyLoad>
										</div>
										<span className='label'>Previous Article</span>
										<div className='info'>
											<h3>{content.lastTitle}</h3>
										</div>
									</Link>
						}
								</div>
								<div className={content.lastStatus ==='404' ?'post-nepre next full' : 'post-nepre next half '}>
						{content.nextStatus ==='200' &&
									<Link to={'/article/' + content.nextArticleId}>
										<div className='background'>
										<LazyLoad once placeholder={<PlaceholderComponent/>}  offset={300} height={500} debounce={20}>
										<img className='lazyload' src={content.nextPicUrl} style={{'width':'100%','height':'100%','objectFit':'cover','pointerEvents':'none'}}/>
										</LazyLoad>
										</div>
										<span className='label'>Next Article</span>
										<div className='info'>
											<h3>{content.nextTitle}</h3>
										</div>
									</Link>}
								</div>
							</section>
                            </div>
							
							
                        </div>
					 </RcViewer>
							: this.Spin()
                    }
					
                </MainWrapper>
					 <MainWrapper>
					<div>
						<SakuraComment id={this.state.id} isComment={1}/>
					</div>
					 </MainWrapper>
            </ArticleWrapper>
        )
    }


    componentDidMount() {
		
	// this.mdParser.core.ruler.push('init_toc', function (state) {
	//		const tokens = state.tokens;
			  // Parses all heading information to render the TOC
	//		for (let i = 0; i < tokens.length; i++)
	//			{
	//				if (tokens[i].type === 'heading_open') {
	//					this.tocify = new Tocify();
	//					const anchor = this.tocify.add(tokens[i + 1].content, tokens[i].tag[1]);
	//				}
	//			}
	//	})


			
      // const renderer = new marked.Renderer();
       //renderer.heading = (text, level) => {
         //  const anchor = this.state.tocify.add(text, level);
           //return `<h${level} id="${anchor}">${text}</h${level}>`;
        //};

		
        //marked.setOptions({
          // renderer: renderer,
         //  highlight: code => hljs.highlightAuto(code).value,
      //});
		
        this.getDetail(this.state.id);
        this.getTimg();
        this.getSocials();
		//window.addEventListener("scroll", this.handleScroll);
    }

	 handleScroll() {
		 
		 if(document.getElementById('comments') != null)
		 {
			if($(window).scrollTop()>$('#comments').offset().top-180)
			 {
				$('.toc').removeClass('fixedTor');
			 }
			else if($(window).scrollTop()>$('.pattern-attachment-img').outerWidth()-400)
			{
				$('.toc').addClass('fixedTor');
			}
			else if($(window).scrollTop() < $('.pattern-attachment-img').outerWidth()-400)
			 {
				$('.toc').removeClass('fixedTor');
			 }
		 }
		
    }


    getTimg() {
        const list = this.props.topImg;
        const num = this.getrand(0, list.length - 1);
        this.setState({
            timg: list[num].img
        })
    }

    getDetail(id) {
        axios.get('/posts/posts/v1/' + id).then((res) => {
            if (res.success === 1) {
                this.setState({
                    content: res.model
                })
            } else {
                this.props.history.push('/404');
            }
        });
    }

    getSocials() {
        axios.get('/auth/social/v1/socials?code=reward').then((res) => {
            if (res.success === 1) {
                this.setState({
                    socialsList: res.models
                })
            }
        });
    }

    setSocials(socialsList) {
        if (socialsList.length > 0) {
            return (
                <div className='single-reward'>
                    <div className='reward-open'>
                        <p>赏</p>
                        <div className='reward-main'>
                            <ul className='reward-row'>
                                {socialsList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={item.content} alt=""/>
                                            <p>{item.remark}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    Spin() {
        return (
            <div className="example">
                <Spin size="large"/>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        topImg: state.getIn(['image', 'bannerList']),
        userInfo: state.getIn(['header', 'userInfo']),
    }
};

export default connect(mapState)(Article);
