import { Form, Icon, Input, Button, Checkbox ,message,Modal } from 'antd';
import {LoginWrapper} from "./style";
import React, {PureComponent} from "react";
import moment from "moment"
import axios from "axios";
import {getAvatar, setAvatar, setToken,removeToken,removeAvatar,getToken} from '../../lib/auth';


class SafetySetting extends React.Component {


	

	

  state = {
    loading: false,
	confirmDirty: false,
	countDown : 59,
	phoneExist : true,

  };

 


	
	sendMessage = () => {
   
		const { form } = this.props;
		const phone = form.getFieldValue('phone');
		var exist = true;
		if(phone === null)
			{
				message.warning("你还没有输入你的手机号呢！");
			}
		axios(
			{
				 method: 'post',
				 url :   '/auth/findPhoneIsExist',
				 params: {
							phone : phone,
						}	
			}
		).then((res) => {
				if(res.success === 0)
			{
				  message.warning("你的手机号还没有注册呢！");
				  this.setState({ phoneExist: true },()=>{
					exist = true;
				  });
			}
			else
			{
				this.setState({phoneExist : false},()=>{
				axios(
					{
					method : 'post',
					url : '/getCode',
					params : {
						phone : phone,
						sign : 'changePassword'
					}

					}).then((res) =>{
					if(res.success === 1)
					{
						 this.setState({ loading: true });
						 this.count();
						 message.success("发送短信轰炸成功!(^^ゞ")
					}
					else
					{
						message.warning("Fail");
					}
					})
				})
			}
			})
  };

  count = () =>{
	let {countDown} = this.state;
	let siv = setInterval(()=> {
		this.setState({countDown : (countDown--)},()=>{
			if(countDown <= -1)
			{
				clearInterval(siv);

				this.setState({loading: false,countDown: 59})
			}
		});
	},1000);
  }



   handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

   closeSettingModal = () =>{
	this.props.closeSettingModal();
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两个密码怎么不同的!??😡');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  logout=() =>{
	axios.get('/auth/logout').then((res) =>{
			if(res.success === 1)
			{
				removeToken();
				removeAvatar();
				setTimeout(()=>{
						window.location.reload(true);
		
				},1000)
			}
		})
  }




  handleSettingSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
			const { form } = this.props;
			const phone = form.getFieldValue('phone');
			const password = form.getFieldValue('password');
			const gender = form.getFieldValue('gender');
			const username = form.getFieldValue('username');
			const authCode = form.getFieldValue('auth_code')

		axios({
                method: 'post',
                url: '/auth/changePassword',
                params: {
                   phone : phone,
				   newPassword : password,
				   authCode : authCode
                }
            }).then((res) => {
                if (res.success === 1) {
                    Modal.success(
						{
						title:'修改密码成功!✔',
						content:'快去用新密码登录吧👉'
						
							});
					this.closeSettingModal();
					this.logout();
					setTimeout(()=>{
									window.location.reload(true);
		
				},2000)
					
                }
				else if(res.resultCode === "00018")
				{
					message.warning(res.message);
				}
				else if(res.resultCode === "00019")
				{
					message.warning(res.message);
				}
				else if(res.resultCode === "00021")
				{
					message.warning(res.message);	
				}
				else if(res.resultCode === "00011")
				{
					message.warning(res.message);
				}
				else
				{
					message.warning("服务器异常");
				}

            });
      }
    });
  };


	
  
 

  render() {
    const { getFieldDecorator } = this.props.form;

	
    return (
	<LoginWrapper>
      <Form  layout="horizontal" onSubmit={this.handleSettingSubmit} >
			<Form.Item hasFeedback>
			  {getFieldDecorator('phone', {
				rules: [{ required: true, message: '请输入你的手机号d=====(￣▽￣*)b' },
					 {
						pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的手机号'
					  }
					],
			  })(
				<Input
				  prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
				  placeholder="请输入你的手机号🤭"
				/>,
			  )}
			</Form.Item>
			<Form.Item hasFeedback>
			  {getFieldDecorator('auth_code', {
				rules: [{ required: true, message: '点击右边那玩意获取验证码🤫' },
				{
					 min:4,max:4,
					 message:'我好像只设置了4位验证码喔!'
					},],
			  })(
				<Input
				  prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />}
				  placeholder="点击右边那玩意获取验证码🤫"
				  style={{ width: 250 }}
				/>,
			  )}
			<Button type="primary" style={{float : "right"}} loading={this.state.loading} onClick={this.sendMessage}>
				 {this.state.loading ? this.state.countDown +'秒重新发送' : '获取验证码'}
			</Button>
			</Form.Item>
		

			<Form.Item hasFeedback>
			  {getFieldDecorator('password', {
				rules: [{ required: true, message: '您还没有输入密码呢！！！' },
					 {
					validator: this.validateToNextPassword,
				  },],
			  })(
				<Input
				  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				  type="password"
				  placeholder="偷偷输入密码吧！我保证不看！😣"
				/>,
			  )}
			</Form.Item>

			<Form.Item hasFeedback>
			  {getFieldDecorator('confirm', {
				rules: [{ required: true, message: '您没输入确定密码呢！！！' },
				 {
					validator: this.compareToFirstPassword,
				  },],
			  })(
				<Input
				  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				  type="password"
				  placeholder="再输入一次密码来确定密码吧！🧐"
				  onBlur={this.handleConfirmBlur}
				/>,
			  )}
			</Form.Item>

			<Form.Item>
			  <Button type="primary" htmlType="submit" className="login-form-button" block>
				确认修改密码
			  </Button>
			</Form.Item>
		  </Form>
	</LoginWrapper>
    );
  }
}

export default Form.create()(SafetySetting);