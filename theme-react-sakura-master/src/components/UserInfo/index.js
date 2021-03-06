import { Form, Icon, Input, Button, Checkbox ,message,Tabs,Modal,Upload,Radio,DatePicker,AutoComplete } from 'antd';
import {LoginWrapper} from "./style";
import React, {PureComponent} from "react";
import moment from "moment"
import axios from "axios";
import {getAvatar, setAvatar, setToken,removeToken,removeAvatar,getToken} from '../../lib/auth';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = AutoComplete;


class UserInfo extends React.Component {


  closeUserInfoModal =() =>{
	this.props.closeUserModal();
  }

  state = {
    loading: false,
	header : getAvatar(),
	userInfo :'',
    result: [],
  };

   componentDidMount() {
	 this.getUserInfo();
   }


	handlerHeadChange = info =>{
		const res = info.file.response;
			if (info.file.status !== 'uploading') {
			  console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
		      if(res.success === 1)
				{
					this.changeHeader(res.model);
				  	setAvatar(res.model);
					message.success("更换头像成功✔");
					
				}
				else{
					message.error(res.message);
				}
			} else if (info.file.status === 'error') {
			  message.error(`file upload failed.`);
			}
	}

	handlerBeforeUpload = file =>{
		//限制图片 格式、size、分辨率
		const isJPG = file.type === 'image/jpeg';
		const isJPEG = file.type === 'image/jpeg';
		const isGIF = file.type === 'image/gif';
		const isPNG = file.type === 'image/png';
		 if (!(isJPG || isJPEG || isGIF || isPNG)) {
			  Modal.error({
				title: '只能上传JPG 、JPEG 、GIF、 PNG格式的图片~',
			  });
			  return false;
			}
		const isLt2M = file.size / 1024 / 1024 < 2;
			if (!isLt2M) {
			  Modal.error({
				title: '超过2M限制，不允许上传~',
			  });
			  return false;
			}
			return (isJPG || isJPEG || isGIF || isPNG) && isLt2M && this.checkImageWH(file);
	};

	 //返回一个 promise：检测通过则返回resolve；失败则返回reject，并阻止图片上传
	 checkImageWH(file) {
			let self = this;
			return new Promise(function(resolve, reject) {
			  let filereader = new FileReader();
			  filereader.onload = e => {
				let src = e.target.result;
				const image = new Image();
				image.onload = function() {
				  // 获取图片的宽高，并存放到file对象中
				  console.log('file width :' + this.width);
				  console.log('file height :' + this.height);
				  file.width = this.width;
				  file.height = this.height;
				  resolve();
				};
				image.onerror = reject;
				image.src = src;
			  };
			  filereader.readAsDataURL(file);
			});
  }

  	 getUserInfo() {
        axios.post('/auth/getUserPersonalInfo').then((res) => {
            if (res.success === 1) {
                this.setState({
                    userInfo: res.model
                })
				
            }
        });
    }





changeHeader=(url) =>{
	this.setState({ header: url });
}


handleSearch = value => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['qq.com', '163.com', 'gmail.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  };
  
 changeState=(flag) =>{
	 this.setState(({ loading }) => {
      let newLoading = loading
      newLoading = flag;

      return {
        loading: newLoading,
      };
		 });
  }
 

logout=() =>{
	
			removeToken();
			removeAvatar();
			setTimeout(()=>{
				window.location.reload(true);
			},5000)
		 }

  
  handleSave = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
		 this.changeState(true)
		const { form } = this.props;
		const username = form.getFieldValue('username');
		const birthday = moment(form.getFieldValue('birthday')).format('YYYY-MM-DD');
		const gender = form.getFieldValue('gender');
		const personalBrief = form.getFieldValue('personalBrief');
		const email = form.getFieldValue('email');
		
		 axios({
                method: 'post',
                url: '/auth/savePersonalData',
                params: {
                   username : username,
				   birthday : birthday,
				   gender : gender,
				   email : email,
				   personalBrief : personalBrief
                }
            }).then((res) => {
                if (res.success === 1) {
					this.changeState(false)
                  Modal.success(
						{
						title:'保存个人资料成功!✔',
						content:'五秒之后将退出登录⏰'
						
							});
					this.closeUserInfoModal();
					
					this.logout();
						
                }
				else if(res.resultCode === "00023")
				{
					this.changeState(false)
					message.warning(res.message);
				}
				else if(res.resultCode === "00024")
				{
					this.changeState(false)
					message.warning(res.message);
				}
				else if(res.resultCode === "00010")
				{
					this.changeState(false)
					message.warning('该用户名已被占用了！');
				}
				else if(res.resultCode === "00020")
				{
					this.changeState(false)
					message.error('你还没有登陆，未具有权限');
				}
            });
      }
    });
  };

  render() {
	const { loading } = this.state;
    const { getFieldDecorator } = this.props.form;
	const props = {
		  name: 'file',	
		  action : "http://lhanman.cn/api/blog/auth/uploadHead",
			  headers: {
				authorization: getToken(),
				
			  },
		    beforeUpload : this.handlerBeforeUpload,
			onChange: this.handlerHeadChange,
		};

	const formItemLayout = {
		  labelCol: {
			xs: { span: 24 },
			sm: { span: 5 },
		  },
		  wrapperCol: {
			xs: { span: 30 },
			sm: { span: 12 },
		  },
		};
	const { result } = this.state;
	const children = result.map(email => <Option key={email}>{email}</Option>);
	const username = this.state.userInfo.username;
	const gender = this.state.userInfo.gender;
	const personalBrief = this.state.userInfo.personalBrief;
	const birthday = this.state.userInfo.birthday;
	const email = this.state.userInfo.email;
    return (
	<LoginWrapper>
				<div className="headPortrait">
                                <img id="headPortrait" src={this.state.header}/>

                          </div>
							<Upload {...props}  >
								<Button type="primary" style={{float : "right"}}>
								  <Icon type="upload" /> 更换头像
								</Button>
							</Upload>
							 

			 <Form {...formItemLayout} onSubmit={this.handleSave} className="login-form">
						
					<Form.Item label="用户名" hasFeedback>
					  {getFieldDecorator('username', {
						rules: [
							{
							required: true, message: '请输入您的昵称d=====(￣▽￣*)b' 
							},
							{
							 min:2,max:8,
							 message:'昵称长度要在2~8之间喔!'
							},
							],
							initialValue:username
					  })(
						<Input
						  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
						  placeholder="输入您的用户名"
						  
						/>,
					  )}
					</Form.Item>
					<Form.Item label="手机">
					<div className="phoneTable">
                                <div className="phone" id="personalPhone">{this.state.userInfo.phone}&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                 <Icon type="check"/>已验证
								</div>
					</Form.Item>
					
					<Form.Item label="性别">
						{getFieldDecorator('gender',{
							initialValue:gender
						})(
							<Radio.Group name="radiogroup">
							  <Radio value="male"><Icon type="man"/></Radio>
							  <Radio value="female"><Icon type="woman"/></Radio>
							</Radio.Group>,
						  )}
					</Form.Item>

					<Form.Item label="生日">
						{getFieldDecorator('birthday',{
							 initialValue: moment(birthday, 'YYYY-MM-DD')
						})(
								<DatePicker placeholder = "输入你的birthday鸭" />
								)}
					</Form.Item>
					<Form.Item label="个人邮箱">
					 {getFieldDecorator('email',{
						rules: [

							{

							pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,

							message: ' 邮箱格式不正确 ',

							},

							{

							max: 30,

							message: ' 邮箱不得超过 30 字符 ',

							},
							],
						initialValue:email
					 })(
					 <AutoComplete style={{ width: 200 }} onSearch={this.handleSearch} placeholder="请输入您的个人邮箱">
						{children}
					 </AutoComplete>
						 )}
					</Form.Item>

					<Form.Item label="个人简介">
						{getFieldDecorator('personalBrief',{
							rules: [
							{
							 max:50,
							 message:'简介不能超过50字喔!'
							},
							],
							initialValue:personalBrief
						})(
							<TextArea placeholder="输入你的个人简介吧✨" autoSize />
						)}
					</Form.Item>
					
					
					  <Button type="primary" loading={loading} htmlType="submit" className="login-form-button" block>
						保 存
					  </Button>
			
					
		  </Form>
						
	</LoginWrapper>
    );
  }
}

export default Form.create()(UserInfo);
