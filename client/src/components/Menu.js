import React,{Component} from 'react'
import {Row,Col,Button,Icon} from 'antd'
import PropTypes from 'prop-types'
import userAuth from '../auth/userAuth'
class Menu extends Component{
  render(){
    return(
      <div className="container" style={{marginTop:'2%',textAlign:'center'}}>
        <Row>
          <Col span={8} offset={8}>
            <Row type="flex" justify="center">
              <Col span={12}>
                <div> <strong style={{color:'#FCD400'}}>X</strong>: {this.props.player_1}</div>
              </Col>
              <Col span={12}>
                <div><strong style={{color:'#F54849'}}>O</strong>: {this.props.player_2}</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop:'3%'}}>
          <Col span={8} offset={8}>
            <Row type="flex" justify="center">
              <Col span={8}>
                <Button className="customButton" onClick={this.props.createNewGame}>New Game</Button>
              </Col>
              <Col span={8}>
                <Button className="customButton"><Icon type="rollback" /></Button>
              </Col>
              <Col span={8}>
                <Button className="customButton" onClick={this.props.logout}>Logout</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Menu

Menu.propTypes={
  createNewGame:PropTypes.func.isRequired,
  logout:PropTypes.func.isRequired,
  player_1:PropTypes.string.isRequired,
  player_2:PropTypes.string.isRequired,
}