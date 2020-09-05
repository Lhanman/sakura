import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import {LoginWrapper} from "./style";
import React, {PureComponent} from "react";
import { setAvatar, setToken,setUsername} from '../../lib/auth';
import axios from "axios";

class Login extends React.Component {

		 state = {
			loading: false,
		  };

 

  showRegisterModal = ()=>{
		this.props.showRegister();
  }

  showForgetModal = ()=>{
	this.props.showForget();
  }

  closeLoginModal =()=>{
	this.props.closeModal();
  }
  changeState=(flag) =>{
	 this.setState(({ loading }) => {
      let newLoading = loading
      newLoading = flag;

      return {
        loading: newLoading,
      };
		 });
  }

  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
		this.changeState(true)
		const { form } = this.props;
		const phone = form.getFieldValue('phone');
		const password = form.getFieldValue('password');
		 axios({
                method: 'post',
                url: '/auth/login',
                params: {
                   phone : phone,
				   password : password
                }
            }).then((res) => {
                if (res.success === 1) {
					this.changeState(false)
                    setToken(res.model.token);
                    setAvatar(res.model.avatar);
					setUsername(res.model.name)
                    this.setState({isUser: true});
                    message.success('入舱成功！✔');
					this.closeLoginModal();
					setTimeout(()=>{
									window.location.reload(true);
		
				},1000)
                }
				else
				{
					this.changeState(false)
					message.warning(res.message);
					
				}
            });
      }
    });
  };

  render() {
	const { loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
	<LoginWrapper>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入你的手机号d=====(￣▽￣*)b' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入你的手机号d=====(￣▽￣*)b"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '您还没有输入密码呢！！！' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="偷偷输入密码吧！我保证不看！🤭"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox>记住一万年!(欺诈)</Checkbox>)}
          <a className="login-form-forgot" onClick={this.showForgetModal}>
            忘记密码/(ㄒoㄒ)/~~
          </a>
          <Button type="primary" loading={loading} htmlType="submit" className="login-form-button">
            冲冲冲！
          </Button>
          <a onClick={this.showRegisterModal}>现在就去注册(●'◡'●)</a>
        </Form.Item>
      </Form>
	</LoginWrapper>
    );
  }
}

export default Form.create()(Login);
