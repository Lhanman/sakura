import React, {PureComponent} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Headers, NavWrapper, NavLeft, NavRight, Nav, NavItem, IconBox, MoNav, Mask} from './style';
import {actionCreators} from './store';
import {Icon, Menu, Dropdown, Affix, message,Modal,Button,Form,Input,Checkbox,Badge} from 'antd';
import {getAvatar, setAvatar, setToken,removeToken,removeAvatar,getUsername,removeUsername,getToken} from '../../lib/auth';
import axios from "axios";
import openWindow from "../../lib/openWindow";
import Login from "../Login"
import Register from "../Register"
import Forget from "../Forget"
import UserInfo from "../UserInfo"
import SafetySetting from "../SafetySetting"
import Message from "../Message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFortAwesome} from '@fortawesome/free-brands-svg-icons'
import {faTh,faArchive,faLink,faTags,faListUl,faEdit,faLeaf} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(faListUl,faEdit,faLeaf)

const { confirm } = Modal;

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            value: '',
            open: false,
            isUser: false,
            menuList: [],
            loading: false,
			visible: false,
			loginLoading : false,
			registerVisible : false,
			forgetVisible : false,
			userInfoVisible : false,
		    safetySettingVisible : false,
			messageVisible : false,
			notReadNum : '',
			isAdmin : false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.keypress = this.keypress.bind(this);
        this.setValue = this.setValue.bind(this);
        this.openMonav = this.openMonav.bind(this);
        //this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
        this.loginGithubHandel = this.loginGithubHandel.bind(this);
    }

    render() {
        const {isVisible, value, open, isUser,isAdmin,menuList, loading,visible,loginLoading,registerVisible,forgetVisible,userInfoVisible,safetySettingVisible,messageVisible,notReadNum} = this.state;
        const {category} = this.props;
        const {title, domain} = this.props.confing.toJS();
        const {name, introduction, avatar} = this.props.userInfo.toJS();

        if (title) document.title = title;
        return (
            <Headers>
                <Affix>
                    <NavWrapper className='nav-wrapper'>
                        <NavLeft className='ellipsis'>
                            <a href={domain}>{title}</a>
                            <Icon type="menu" onClick={this.openMonav}/>
                        </NavLeft>
                        <NavRight>
                            {loading ? <div className='flex-items'>
                                <Nav className='flex-items navlive2d'>
                                    <NavItem>
                                        <Link to={'/'} className='nav-item'>
											<span className='faa-parent animated-hover'>
											<FontAwesomeIcon icon={faFortAwesome} className='fas faa-horizontal '/>
												&nbsp;首页
											</span>
                                        </Link>
                                    </NavItem>
                                    
									
									<NavItem id='area'>
                                        <Dropdown
                                            overlay={this.setCategory(category.toJS(), true)}
                                            placement="bottomCenter"
                                            getPopupContainer={() => document.getElementById('area')}
                                            overlayClassName='NavDropdown'
                                        >
                                            <span className='nav-item'>
												<span className='faa-parent animated-hover'>
                                                <FontAwesomeIcon icon={faTh} className='fas faa-vertical'/>
                                                <span className='dropdown-toggle'>&nbsp;分类</span>
												</span>
                                            </span>
                                        </Dropdown>
                                    </NavItem>
						
									 <NavItem>
                                        <Link to={'/archives'} className='nav-item'>
										 	<span className='faa-parent animated-hover'>
                                            <FontAwesomeIcon icon={faArchive} className='fas faa-shake'/>
                                            &nbsp;归档
											</span>
                                        </Link>
                                    </NavItem>
									

                                    {menuList.map((item, index) => {
                                        if (item.child && item.child.length > 0) {
                                            return (
                                                <NavItem id={'area' + index} key={index}>
                                                    <Dropdown
                                                        overlay={this.setCategory(item.child, false)}
                                                        placement="bottomCenter"
                                                        getPopupContainer={() => document.getElementById('area' + index)}
                                                        overlayClassName='NavDropdown'
                                                    >
                                                        <a rel="noopener noreferrer"
                                                           className='nav-item'>
															<span className='faa-parent animated-hover'>
															<FontAwesomeIcon icon={item.icon} className={'fas '+item.animation}/>
                                                            <span className='dropdown-toggle'>&nbsp;{item.title}</span>
															 </span>
                                                        </a>
                                                    </Dropdown>
                                                </NavItem>
                                            )
                                        } else {
                                            return (
                                                <NavItem key={index}>
                                                    <Link to={item.url} 
                                                       className='nav-item'>
														<span className='faa-parent animated-hover'>
															<FontAwesomeIcon icon={item.icon} className={'fas '+item.animation}/>
                                                        <span>&nbsp;{item.title}</span>
														   </span>
                                                    </Link>
                                                </NavItem>
                                            )
                                        }
                                    })}

									
                                    
									 <NavItem>
                                        <Link to={'/links'} className='nav-item'>
										 	<span className='faa-parent animated-hover'>
											<FontAwesomeIcon icon={faLink} className='fas faa-shake'/>
                                            <span>&nbsp;友人帐</span>
										 	</span>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to={'/tags'} className='nav-item'>
                                          <span className='faa-parent animated-hover'>
											<FontAwesomeIcon icon={faTags} className='fas faa-pulse faa-fast'/>
                                            <span>&nbsp;标签墙</span>
										 </span>
                                        </Link>
                                    </NavItem>
                                </Nav>
                                <IconBox className='flex-items navlive2d'>
                                    <Icon type="search" onClick={this.handleClick}/>
                                    {isUser || getAvatar() ? 
										 <Dropdown
                                                        overlay={this.setUserMenu()}
                                                        placement="bottomCenter"
                                                       
                                                        overlayClassName='NavDropdown'
                                                    >
											<Badge count={this.state.notReadNum} overflowCount={20}>
											<img src={getAvatar()} alt=""/> 
											</Badge>
										</Dropdown>
							: <Icon type="user" onClick={this.showModal}/>}
                                </IconBox>
                            </div> : null}
                        </NavRight>
                    </NavWrapper>
                </Affix>
				<Modal
					  visible={visible}
					  title="登录"
					  onOk={this.handleOk}
					  onCancel={this.handleCancel}
					  footer={null}
					  centered={true}
					 
>
					
					<Login showRegister={this.showRegisterModal} showForget={this.showForgetModal} closeModal={this.handleCancel}>

					</Login>
				 </Modal>

				 <Modal
					  visible={registerVisible}
					  title="注册"
					  onOk={this.handleOk}
					  onCancel={this.cancelRegisterModal}
					  footer={null}
					  centered={true}
					 >
					<Register closeModal={this.cancelRegisterModal}>

					</Register>
				 </Modal>
				 <Modal
					  visible={forgetVisible}
					  title="忘记密码"
					  onOk={this.handleOk}
					  onCancel={this.cancelForgetModal}
					  footer={null}
					  centered={true}
					 >
					<Forget closeModal={this.cancelForgetModal}>

					</Forget>
				 </Modal>
				
				<Modal
					  visible={userInfoVisible}
					  title="个人主页"
					  onOk={this.handleOk}
					  onCancel={this.cancelUserInfoModal}
					  footer={null}
					  centered={true}	
				>
				<UserInfo closeUserModal={this.cancelUserInfoModal}>

				</UserInfo>
				</Modal>

				<Modal
					  visible={safetySettingVisible}
					  title="安全设置"
					  onOk={this.handleOk}
					  onCancel={this.cancelSafetySettingModal}
					  footer={null}
					  centered={true}	
				>
				<SafetySetting closeSettingModal={this.cancelSafetySettingModal}>

				</SafetySetting>
				</Modal>
				
				<Modal  visible={messageVisible}
					  title="消息"
					  onOk={this.handleOk}
					  onCancel={this.cancelMessageModal}
					  footer={null}
					  centered={true}	
				>
				<Message closeMessageModal={this.cancelMessageModal}>

				</Message>
				</Modal>
			
                <div
                    className={isVisible ? 'search-form search-form--modal is-visible' : 'search-form search-form--modal'}>
                    <div className='search-form__inner'>
                        <div className='box'>
                            <p className="micro mb-">想要找点什么呢？</p>
                            <Icon type="search"/>
                            <input
                                type="search"
                                name="s"
                                placeholder="Search"
                                onKeyPress={this.keypress}
                                value={value}
                                onChange={this.setValue}
                            />
                        </div>
                    </div>
                    <div className="search_close" onClick={this.handleClick}/>
                </div>
                <Mask className={open ? 'show' : 'hidden'} onClick={this.openMonav}/>
                <MoNav className={open ? 'mo-nav open' : 'mo-nav'}>
                    <div className='m-avatar'><img src={avatar} alt=""/></div>
                    <p className='name ellipsis'>{name}</p>
                    <p className='info ellipsis'>{introduction}</p>
                    <ul className='menu'>
                        <li>
                            <Link to={'/'} className='item flex-items navlive2d' onClick={this.openMonav}>
                                <i className='iconfont icon-fort-awesome'/>
                                <span>首页</span>
                            </Link>
                        </li>
                        <li>
                            <span className='item flex-items navlive2d'>
                                <i className='iconfont icon-list-ul'/>
                                <span>分类</span>
                            </span>
                            <ul className='sub-menu'>
                                {category.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={'/category/' + item.get('id')} className='item flex-items navlive2d'
                                                  onClick={this.openMonav}>
                                                <span>{item.get('name')}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        <li>
                            <Link to={'/archives'} className='item flex-items navlive2d' onClick={this.openMonav}>
                                <i className='iconfont icon-archive'/>
                                <span>归档</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/links'} className='item flex-items navlive2d' onClick={this.openMonav}>
                                <i className='iconfont icon-link'/>
                                <span>友人帐</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/tags'} className='item flex-items navlive2d' onClick={this.openMonav}>
                                <i className='iconfont icon-tag'/>
                                <span>标签墙</span>
                            </Link>
                        </li>
                        {menuList.map((item, index) => {
                            if (item.child && item.child.length > 0) {
                                return (
                                    <li key={index}>
                                        <a href={item.url}  rel="noopener noreferrer"
                                           className='item flex-items navlive2d'>
                                       
											 <i style = {{"fontSize" : "18px"}} className={item.icon}/>
                                            <span>{item.title}</span>
                                        </a>
                                        <ul className='sub-menu'>
                                            {item.child.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href={item.url} rel="noopener noreferrer"
                                                           className='item flex-items navlive2d'>
                                                            <span>&nbsp;{item.title}</span>
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index}>
                                        <a href={item.url} rel="noopener noreferrer"
                                           className='item flex-items navlive2d'>
                                            <i style = {{"fontSize" : "18px"}} className={item.icon}/>
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </MoNav>
            </Headers>
        )
    }

    componentDidMount() {
        this.props.getCategory();
        this.props.getUser();
        this.props.getConfing();
        this.getMenu();
		if(getToken() != null){
			this.getNoReadNum();
		}
		this.isAdmin();
		
    }

    getMenu() {
        this.setState({loading: false});
        axios.get('/menu/front/v1/list', {
            params: {
                page: 1,
                size: 10
            }
        }).then((res) => {
            if (res.success === 1) {
                let Time = setTimeout(() => {
                    this.setState({
                        menuList: res.models,
                        loading: true
                    });
                    clearTimeout(Time);
                }, 10)
            }
        });
    }

	getNoReadNum()
	{
		axios.get('/auth/getUserNews').then((res) =>{
			if (res.success === 1)
			{
				this.setState({
				notReadNum : res.model
				});	
			}
			
		})
	}
	isAdmin(){
		if(getUsername() === "LhanMan")
		{
			this.setState({
				isAdmin : true
				});	
		}
	}
    keypress(e) {
        if (e.which === 13) {
            const {value} = this.state;
            if (value === '') {
                message.warning('please type a comment');
            } else {
                this.props.history.push('/search/' + value);
                this.handleClick();
            }
        }
    }

    //login() {
      //  axios.get('/auth/github/v1/get').then((res) => {
        //    if (res.success === 1) {
          //      openWindow(res.model.authorizeUrl, "绑定GitHub", 540, 540);
            //    window.addEventListener("message", this.loginGithubHandel, false);
            //}
        //});
    //}


	logout()
	{
		axios.get('/auth/logout').then((res) =>{
			if(res.success === 1)
			{
				message.success("出舱成功✔");
				removeToken();
				removeAvatar();
				removeUsername();
				setTimeout(()=>{
						window.location.reload(true);
		
				},1000)
			}
		})
	}

	showModal = () =>{
		this.setState({
			visible : true,
		});
	};


  handleCancel = () => {
    this.setState({ visible: false });
  };

  	showRegisterModal = () =>{
	
		this.setState({
			registerVisible : true,
			visible : false
		});
	}

	cancelRegisterModal =() =>{
		this.setState({
			registerVisible : false
		});
	}


	showForgetModal = () =>{
	
		this.setState({
			forgetVisible : true,
			visible : false
		});
	}

	cancelForgetModal =() =>{
		this.setState({
			forgetVisible : false
		});
	}

	showUserInfoModal = () =>{
		this.setState({
			userInfoVisible : true
		});
	}
	showSafetySetting = () =>{
		this.setState({
			safetySettingVisible : true
		});
	}

	showMessageModal= () =>{
		this.setState({
			messageVisible : true
		});
	}

	showManagement = () =>{
		window.open('http://lhanman.cn/api/blog/superAdmin')
	}


	showConfirm() {
		  confirm({
			title: '你确定要退出登录吗?',
			content: '┗|｀O′|┛ 嗷~~',
			okText: '确定',
			cancelText:'取消',
			onOk() {
				axios.get('/auth/logout').then((res) =>{
					if(res.success === 1)
					{
						message.success("出舱成功✔");
						removeToken();
						removeAvatar();
						setTimeout(()=>{
								window.location.reload(true);
				
						},1000)
					}
				})
			},
			onCancel() {
			  console.log('Cancel');
			},
		  });
		}

	cancelUserInfoModal =() =>{
		this.setState({
			userInfoVisible : false
		});
	}
	cancelSafetySettingModal =() =>{
		this.setState({
			safetySettingVisible : false
		});
	}

	cancelMessageModal =() =>{
		
		this.setState({
			messageVisible : false
		});
	}

    loginGithubHandel(e) {
        const {socialId, avatar, name, htmlUrl} = e.data;
        if (socialId) {
            axios({
                method: 'post',
                url: '/auth/user/v1/login',
                data: {
                    socialId: socialId,
                    avatar: avatar,
                    name: name,
                    htmlUrl: htmlUrl
                }
            }).then((res) => {
                if (res.success === 1) {
                    setToken(res.model.token);
                    setAvatar(res.model.avatar);
                    this.setState({isUser: true});
                    message.success('登录成功');
                }
				else
				{
					message.warning(res.message);
				}
            });
            window.removeEventListener("message", this.loginGithubHandel, false);
        }
    }

    setValue(e) {
        const value = e.target.value;
        this.setState({value: value});
    }

    openMonav() {
        this.setState((prevState) => {
            if (!prevState.open) {
                document.body.style.height = '100%';
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.height = '';
                document.body.style.overflow = '';
            }
            return {
                open: !prevState.open
            }
        })
    }

    handleClick() {
        this.setState((prevState) => ({
            isVisible: !prevState.isVisible
        }))
    }

    setCategory(list, isCategory) {
        if (isCategory) {
            return (
                <Menu>
                    {list.map((item, index) => {
                        return (
                            <Menu.Item key={index}>
								
                                <Link to={'/category/' + item.id}>
									 <i style = {{"fontSize" : "18px"}} className={item.icon}/>
                                     <span>&nbsp;{item.name}</span>
								</Link>
							
                            </Menu.Item>
                        )
                    })}
                </Menu>
            )
        } else {
            return (
                <Menu>
                    {list.map((item, index) => {
                        return (
                            <Menu.Item key={index}>
								 <Link to={item.url}>
									 <i style = {{"fontSize" : "18px"}} className={item.icon}/>
                                            <span>&nbsp;{item.title}</span>
								</Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            )
        }
    }

	setUserMenu()
	{
		
		return(
		<Menu
			mode='inline'
			style={{'borderRadius': '12px'	}}
		>
             <Menu.Item>
			 <a onClick={this.showUserInfoModal}><Icon type="user"/>&nbsp;个人主页</a>
             </Menu.Item>

			 <Menu.Item>
			 <a onClick={this.showSafetySetting}><i className='iconfont iconshezhi'/>&nbsp;安全设置</a>
			 </Menu.Item>

			 <Menu.Item>
			 <a onClick={this.showMessageModal}><i className='iconfont iconxiaoxi'/>&nbsp;消息&nbsp;&nbsp;&nbsp;<Badge count={this.state.notReadNum} style={{ backgroundColor: 'red', color: 'white' }} /></a>
             </Menu.Item>
		{this.state.isAdmin
			 &&<Menu.Item>
			 <a onClick={this.showManagement}><i className='iconfont iconadmin'/>&nbsp;管理面板</a>
			 </Menu.Item>			
		}
			 <Menu.Item>
			 <a onClick={this.showConfirm}> <i className='iconfont icontuichudenglu'/>&nbsp;退出登录</a>
             </Menu.Item>
        </Menu>
			)
	}
}

const mapStateToProps = (state) => {
    return {
        category: state.getIn(['header', 'category']),
        confing: state.getIn(['header', 'confing']),
        userInfo: state.getIn(['header', 'userInfo']),
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCategory() {
            dispatch(actionCreators.getCategory());
        },
        getUser() {
            dispatch(actionCreators.getUser());
        },
        getConfing() {
            dispatch(actionCreators.getConfing());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
