import React,{Component} from 'react'
import {Row,Col,Form,Input,Icon,Button} from 'antd'
import userAuth from '../auth/userAuth'
class Login extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        userAuth.authenticateUsers(values['player_1'],values['player_2'])
        this.props.history.push('/game')
      }
    });
  };
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div style={{marginTop:'10%',textAlign:'center'}}>
        <Row>
          <Col span={8}/>
          <Col span={8}>
            <Row>
            <Col span={8}/>
              <Col span={8}>
                <Form onSubmit={this.handleSubmit}>
                  <div style={{color:'#fff',fontSize:'1.3em',width:'200px',marginBottom:'4%'}}>Enter player names:</div>
                  <Form.Item style={{width:'200px'}}>
                    {getFieldDecorator('player_1', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                        placeholder="Player 1"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item style={{width:'200px'}}>
                    {getFieldDecorator('player_2', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Player 2"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit"  className="customButton">Enter</Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col span={8}/>
        </Row>
      </div>
    )
  }
}
export default Form.create()(Login);
