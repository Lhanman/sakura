import React, {PureComponent} from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from "axios";
import {Spin, Collapse,} from "antd";
import {AboutWrapper, AboutTop, MainWrapper,GlobalStyle} from './style';
import BotUI from './component';
import 'botui/build/botui.min.css';
import 'botui/build/botui-theme-default.css';
import './App.css';
import {scrollAnimation} from '../../lib/auth';
import "animate.css";


const { Panel } = Collapse;
class About extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          
            loading: true,
			messages:[
			  {
				content: 'Hi, there👋',
			  },
			  {
				content: '这里是 Lhanman',
			  },
			  {
				content: '一个可爱的蓝孩子～'			
			  }
			],
			action:[
				{
					
					type: 'button',
					action:[
							{
									text: "然后呢？😃",
									value: "and"
							},
							{
									text: "少废话！ 🙄",
									value: "gg"
							}
							 
						   ],
				},

				
				
			
			],
			onAction:[

			{
				handler:this.handleButtonAction

			},
			
			
			],
			display : false,
			fobid : false,
			header:'建站之史',
			skill :'个人技能',
			statement:'声 明',
        }
    }

    render() {
        const {loading,messages,action,onAction,display,header} = this.state;
        return (
            <AboutWrapper>
                <div className='pattern-center-blank'/>
                <AboutTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src="http://static.lhanman.cn/static/images/about/about.jpg" alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>关于</h1>
                    </div>
                </AboutTop>
				<GlobalStyle/>
                <MainWrapper>
				<div className="moe-mashiro" style={{"textAlign":"center", "fontSize": "50px", "marginBottom": "20px"}}>[Lhanman Talk]</div>
                   <div className="popcontainer wrap-outer" style={{'minHeight': '300px','padding': '2px 6px 4px' ,'backgroundColor': 'rgba(242, 242, 242, 0.3)',' borderRadius': '12px'}}>
					
					<center>
						<p></p>
						<h4>与 Lhanman 对话中...</h4>
						<p></p>
						<p></p>
					</center>
						
						  <BotUI
							messages={this.state.messages}
							action={this.state.action}
							onAction={this.state.onAction}
						  />

						
				   </div>
				{display &&
				<div style={{'marginTop':'30px','paddingBottom':'10px'}}>
						<div className="moe-mashiro animate__animated animate__lightSpeedInRight animate__delay-.5s" style={{"textAlign":"center", "fontSize": "50px", "marginBottom": "20px"}}>[More Information]</div>
				<Collapse >
				   <Panel disabled= {this.state.fobid} header={this.state.header} key="1">
				   <div className='animate__animated animate__backInRight animate__delay-.5s'>
					

				   
				   <h3>
						初衷
				   </h3>

					   <p className='justP'>
								本博客可以说是一时兴起才做的,也是为了巩固下刚学的Spring Boot的知识，原本只是单纯的想做个简单一点的,起码能用markdown写写博客啥的功能就足够了,
							用来记录我学习的历程和归纳一些知识，这样就不需要在浏览器的收藏夹收藏这么多网站了。<span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/xiaoku.png" className='img' style={{'animationTimingFunction': 'steps(15)','animationDuration':'600ms','transform': 'translateY(-448px)','height': '480px'}}/>
										</span><br/>
						   	但做到后面,在网上冲浪的时候,看到各路大神的博客秀的我头皮发麻，才发现我的博客怎么<del title='你知道的也太多了吧= ='>tmd</del>这么丑<span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/liulei.png" className='img' style={{'animationTimingFunction': 'steps(1)','animationDuration':'40ms','transform': 'translateY(-0px)','height': '32px'}}/>
										</span>,
						   	这不禁让我产生想做耐看的博客。
					   </p>
					<p className='justP'>
					</p>
				
					<h3>
						寻找到心仪的主题
					</h3>

						<p className='justP'>
								在各路大神的博客,我个人而言,我觉得Mashiro的博客最让我怦然心跳,他的项目虽然开源了,奈何他用的是WordPress框架进行搭建的
							,这个是基于php的博客框架。我的初衷是自己动手写后端代码,所以并没有直接改用WordPress来搭建我的博客。<del title='嘿嘿嘿'>而且我也不会(●'◡'●)</del>
							
						</p>
					<h3>
						偶遇命中注定的那一半
					</h3>
							<p className='justP'>
									在某次逛CSDN的时候,无意间发现有个标题是:基于SpringBoot+React的blog(个人博客),点进去一看,发现他前端主题居然是Sakura,也就是Mashiro的前端主题,
								这不禁燃起我的博客梦。然而他的前端用的是React,对于我这个小小后端来说,就是一个大千世界,我也就只懂Bootstrap模板什么的了。我已经预知到未来艰辛的前端之路,
								它不远了。<span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/dianzan.png" className='img' style={{'animationTimingFunction': 'steps(20)','animationDuration':'800ms','transform': 'translateY(-608px)','height': '640px'}}/>
										</span>
							</p>

					<h3>
						开始向全栈工程师进击
					</h3>
						
						<p className='justP entry-content'>
								我遇到的那一半,她是来自<a href="https://www.plumemo.com/" target='_blank'>Plumemo</a>的其中一个主题,应该是跟我同样喜欢这个主题的伙伴写的吧。之后就是自学React基础的历程,去官网看看文档稍微能应付一下就可以了(伪)。但是当去看了源码后发现根本没那么简单,没几个东西看的懂得,只好自己摸索每个代码的含义,这样才能在此基础上扩展!
						</p>
					<h3>
						开发属于自己的博客
					</h3>
						<p className='justP entry-content'>
								这个开源主题含有的页面并不是很多,就只有基本的首页,分类,归档,友人帐和标签墙的页面。🔨完这些页面之后,我就开始用我浅薄的前端知识,添加了我想要页面。
							在此主题的基础上添加了用户登录注册页面,留言板,关于,清单的番剧,漫画,书单页面,并改进了评论页面等,最后一发不可收拾。这些页面大部分都是通过F12+CV大法来参考<a href="https://2heng.xin/">Mashiro</a>以及
							<a href="https://spiritx.xyz/">Spirit</a>两位大佬的页面,并添加属于自己的东西。在此感谢他们做了这么好看的博客主题!  <span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/se.png" className='img' style={{'animationTimingFunction': 'steps(10)','animationDuration':'400ms','transform': 'translateY(-288px)','height': '320px'}}/>
										</span>
						</p>

					<h3>
						回顾以往
					</h3>
						<p className='justP'>
								博客是在疫情期间宅在家里做的,不知不觉中,从原来的Bootstrap一步一步的完成功能实现了简单的博客,到发现到Sakura主题并开始React之路,这其中虽然有过懊恼,也有过想放弃的念头,但是<del title='你知道的太多了O(∩_∩)O'>Mr'son tian说过</del>好事多磨。慢慢来就行！终于我的博客就诞生了！都是一把辛酸一把泪啊！！
							<span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/xiaoku.png" className='img' style={{'animationTimingFunction': 'steps(15)','animationDuration':'600ms','transform': 'translateY(-448px)','height': '480px'}}/>
										</span>
						</p>
					
					<h3>
						关于联系方式
					</h3>

						<p className='justP'>
								现在即时通讯发达,虽然可以用微信啥的,但是我认为发电子邮件更好,因为它可以让大多数人在发送邮箱之前Take it Seriously,所以我希望通过邮件来接收重要讯息。
						</p>
						
						<p className='justP'>
						<strong>联系我</strong> (Emaily📧):&nbsp;&nbsp;
							<code>dWJoamtoQHFxLmNvbQ0K</code>&nbsp;
							(Base64)
						</p>
						<p className='justP'>
						</p>
					
					
				</div>
						</Panel>
							<Panel disabled={this.state.fobid} style={{'borderRadius': '4',}}  header={this.state.skill} key="2">
								    
									   <p className='justP animate__animated animate__backInRight animate__delay-.5s'>
											<span style={{"color": "#339966"}}>
												<del title='你知道的也太多了吧= ='>
													本人擅长 Ai、Fw、Fl、Br、Ae、Pr、Id、Ps 等软件的安装与卸载，
													精通 CSS、Javascript、PHP、ASP、C、C＋＋、C#、Java、Ruby、Perl、Lisp、python、Objective-C、Actionscr ipt、Pascal 等单词的拼写，
													熟悉 Windows、Linux、Mac、Android、IOS、WP8 等系统的开关机....
												</del>
											</span>
										   <span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/doge.png" className='img' style={{'animationTimingFunction': 'steps(20)','animationDuration':'800ms','transform': 'translateY(-608px)','height': '640px'}}/>
										</span>
									   </p>
							</Panel>

							<Panel disabled={this.state.fobid}  header={this.state.statement} key="3">
								
									<p className='justP animate__animated animate__backInRight animate__delay-.5s'>
										<strong>声明：</strong>
										<del>
										<span style={{'fontSize':'15px','lineHeight':'2.5'}}>
										
										本人在此发布博文（包括但不限于汉字、拼音、阿拉伯字母 、图片、影像，以及前述之各种任意组合等等）均为随意敲击键盘所出，
										用于检验本人电脑键盘录入、屏幕显示的机械、光电性能，并不代表本人观点。如需要详查请直接与键盘发明者及生产厂商法人代表联系。
										</span>
										</del>
										<span className='emotion-inline emotion-item' style={{'marginLeft':'0px','marginRight':'0px'}}>
										<img src="https://cdn.jsdelivr.net/gh/moezx/cdn@2.9.4/img/bili/doge.png" className='img' style={{'animationTimingFunction': 'steps(20)','animationDuration':'800ms','transform': 'translateY(-608px)','height': '640px'}}/>
										</span>
									</p>
							</Panel>
						<div style={{'marginBottom':'150px'}}>
						</div>
					 </Collapse>
							
							</div>
						}
						
                </MainWrapper>
            </AboutWrapper>
        )
    }

    componentDidMount() {
	
    }

	handleInpuAction = res => {
		this.setState({
		  messages: [
			...this.state.messages,
			{
			  human: true,
			  content: res.value,
			},
			{
			  content: `${res.value}是个好名字呀! 🤩`,
			  delay : 500,
			  loading : true,
			},
		  ],
		});
  };

  handleButtonAction = res => {
	  if (res.value == "and") {
		this.setState({
		  messages: [
			...this.state.messages,
			{
			  human: true,
			  content: "然后呢？😀",
			},
			{
			  content: `😘`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `90后, 戊寅年出生`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `目前就读于广东工业大学`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `本专业并不是计算机专业...`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `但自身对计算机方面有着强烈的求知欲...`,
			  delay : 1500,
			  loading : true,
			},
		
			{
			  content: `主攻 Java语言和 R语言,稍微懂一些python,前端的话就那样吧，折腾就完事了 😂`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `以后的研究方向有可能会往大数据分析方向进军! 😤`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `喜爱二次元文化,尤其喜欢刀剑神域(其实是喜欢诗乃)`,
			  delay : 1500,
			  loading : true,
			},
			
		  ],
		  action :[ {
					
					type: 'button',
					action:[
							{
									text: "为什么叫Lhanman呢? 🧐",
							},
							 
						   ],
				},
				],
		  onAction :[
						{
							handler:this.handleSecondButtonAction
						}   
					]
		 
		});
		
	}
	else{
		this.setState({
		  messages: [
			...this.state.messages,
			{
			  human: true,
			  content: "少废话！ 🙄",
			},
			{
			  human: true,
			  type: 'html',
			  content: `<img src='http://static.lhanman.cn/static/images/about/bizui.gif'/>`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `嗯Σ(っ °Д °;)っ？`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `生气了！再见(╯▔皿▔)╯`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `哼 ￣へ￣`,
			  delay : 1500,
			  loading : true,
			},
				
		  ],
		   action:[],
		});
			setTimeout(()=>{
					this.setState({
						display : true,
						fobid : true,
						header:'(σ｀д′)σ不给你看',
						skill:'(σ｀д′)σ不给你看',
						statement:'(σ｀д′)σ不给你看',
					})	
				},6000)
		
	}
  };

  handleSecondButtonAction = res => {
       
		this.setState({
		  messages: [
			...this.state.messages,
			{
			  human: true,
			  content: "为什么叫Lhanman呢? 🧐",
			},
			{
			  content: `Lhan是小时候玩CF的昵称(这种英文就很帅,比如NaVi丶Lhan)😂`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `直到现在还用这个大概是为了怀念当年快乐的时光吧...`,
			  delay : 1500,
			  loading : true,
			},
			{
			  content: `至于为什么会有个man,因为我是个蓝孩子啊 😋`,
			  delay : 1500,
			  loading : true,
			}
		  ],

		    action :[ {
					
					type: 'button',
					action:[
							{
									text: "域名有什么含意吗？(ง •_•)ง",
							},
							 
						   ],
				},
				],
		  onAction :[
						{
							handler:this.handleThirdButtonAction
						}   
					]
		});
	
  }

  handleThirdButtonAction = res => {

		this.setState({
		  messages: [
			...this.state.messages,
			{
			  human: true,
			  content: "域名有什么含意吗？(ง •_•)ง",
			},

		    {
			  content: `emmmmm，就是我的昵称咯,你懂的_(:з」∠)_`,
			  delay : 1500,
			  loading : true,
			},
			 {
			  content: `那么，仔细看看我的博客吧？ ^_^`,
			  delay : 1500,
			  loading : true,
			},
		  ],
		  action: [],
		  
		});

		setTimeout(()=>{
					this.setState({
						display : true,
					})	
				},3000)
  }

}


export default About
