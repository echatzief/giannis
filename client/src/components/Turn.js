import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Turn extends Component{
  pickTurn = ()=>{
    if(this.props.turn !==''){
      if(this.props.turn === 'X'){
        return(
          <div>It's <strong style={{color:'#FCD400'}}>{this.props.turn}</strong> Turn</div>
        )
      } else {
        return(
          <div>It's <strong style={{color:'#F54849'}}>{this.props.turn}</strong> Turn</div>
        )
      }
    } else {
      return(
        <div>Create a new game</div>
      )
    }
  }
  render(){
    return(
      <div className="container" style={{marginTop:'3%',textAlign:'center'}}>
        {this.pickTurn()}
      </div>
    )
  }
}
export default Turn


Turn.propTypes={
  turn:PropTypes.string.isRequired,
}