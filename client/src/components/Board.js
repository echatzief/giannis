import React,{Component} from 'react'
import {Row,Col} from 'antd'
import PropTypes from 'prop-types';

class Board extends Component{
  render(){
    return(
      <div style={{marginTop:'3%',textAlign:'center'}}>
        <Row>
          <Col span={8} offset={8}>
            <Row type="flex" justify="center">
              <Col span={9} className="box" id={"0_0"} onClick={()=>this.props.makeMove(0,0)}>
                {
                  this.props.theGrid[0][0] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[0][0]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[0][0]}</h4>
                }
              </Col>
              <Col span={6} className="box" id={"0_1"} onClick={()=>this.props.makeMove(0,1)}>
                {
                  this.props.theGrid[0][1] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[0][1]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[0][1]}</h4>
                }
              </Col>
              <Col span={9} className="box" id={"0_2"} onClick={()=>this.props.makeMove(0,2)}>
                {
                  this.props.theGrid[0][2] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[0][2]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[0][2]}</h4>
                }
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col span={9} className="box" id={"1_0"} onClick={()=>this.props.makeMove(1,0)}>
                {
                  this.props.theGrid[1][0] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[1][0]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[1][0]}</h4>
                }
              </Col>
              <Col span={6} className="box" id={"1_1"} onClick={()=>this.props.makeMove(1,1)}>
                {
                  this.props.theGrid[1][1] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[1][1]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[1][1]}</h4>
                }
              </Col>
              <Col span={9} className="box" id={"1_2"} onClick={()=>this.props.makeMove(1,2)}>
                {
                  this.props.theGrid[1][2] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[1][2]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[1][2]}</h4>
                }
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col span={9} className="box" id={"2_0"} onClick={()=>this.props.makeMove(2,0)}>
                {
                  this.props.theGrid[2][0] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[2][0]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[2][0]}</h4>
                }
              </Col>
              <Col span={6} className="box" id={"2_1"} onClick={()=>this.props.makeMove(2,1)}>
                {
                  this.props.theGrid[2][1] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[2][1]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[2][1]}</h4>
                }
              </Col>
              <Col span={9} className="box" id={"2_2"} onClick={()=>this.props.makeMove(2,2)}>
                {
                  this.props.theGrid[2][2] === 'X'
                  ? <h4 style={{color:'#FCD400',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[2][2]}</h4>
                  : <h4 style={{color:'#F54849',fontSize:'100px',width:'80px',height:'80px',marginLeft:'25px'}}>{this.props.theGrid[2][2]}</h4>
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Board

Board.propTypes={
  theGrid:PropTypes.array.isRequired,
  makeMove:PropTypes.func.isRequired,
}