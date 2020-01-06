import React,{Component} from 'react';
import Menu from './components/Menu'
import Board from './components/Board'
import Turn from './components/Turn'
import userAuth from './auth/userAuth'
import { Modal,Button } from 'antd'; 
class App extends Component{
  constructor(props){
    super(props)
    this.cols=3
    this.rows=3
    this.state={
      turn:'',
      winner:'',
      player_1:'',
      player_2:'',
      modalVisibility:false,
      theGrid:Array(this.rows).fill().map(() => Array(this.cols).fill())
    }
  }
  componentDidMount(){
    if(!userAuth.isAuthenticated()){
      this.props.history.push('/')
    }
    
    let players = userAuth.retrieveNames()
    this.setState({player_1:players['player_1'],player_2:players['player_2']})
  }
  createNewGame = () =>{
    this.setState({
      theGrid:Array(this.rows).fill().map(() => Array(this.cols).fill()),
      turn: Math.floor(Math.random() * Math.floor(2)) === 0 ? 'X': 'O'
    })
  }

  makeMove = (i,j)=>{
    if(this.state.turn === ''){
      this.createNewGame()
    } else {
      let tempArr = this.state.theGrid
      if(tempArr[i][j] !== 'X' && tempArr[i][j] !== 'O'){
        tempArr[i][j] = this.state.turn
        this.setState({ turn: this.state.turn === 'X'?'O':'X'})
      }
      this.checkIfWin() 
    }
  }

  checkIfWin = ()=>{
    var board=this.state.theGrid
    //Row
    for(var i=0;i<this.rows;i++){
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== undefined){
  
        if(board[i][0]==='X'){
          console.log('Player 1 wins')
          this.showModal(this.state.player_1)
        }
        else{
          console.log('Player 2 wins')
          this.showModal(this.state.player_2)
        }
      }
    }
  
    //Cols
    for(i=0;i<this.rows;i++){
      if (board[0][i] === board[1][i] &&board[1][i] === board[2][i] && board[0][i] !==undefined){
  
        if(board[0][i]==='X'){
          console.log('Player 1 wins')
          this.showModal(this.state.player_1)
        }
        else{
          console.log('Player 2 wins')
          this.showModal(this.state.player_2)
        }
      }
    }
  
    //Diagonial
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !==undefined){
      if(board[0][0]==='X'){
        console.log('Player 1 wins')
        this.showModal(this.state.player_1)
      }
      else{
        console.log('Player 2 wins')
        this.showModal(this.state.player_2)
      }
    }
  
    //Diagonial
    if (board[0][2] === board[1][1] &&board[1][1] === board[2][0] &&board[0][2] !==undefined){
  
      if(board[0][2]==='X'){
        console.log('Player 1 wins')
        this.showModal(this.state.player_1)
      }
      else{
        console.log('Player 2 wins')
        this.showModal(this.state.player_2)
      }
    }
  }

  showModal = (win) =>{
    this.setState({ winner:win,modalVisibility:true })
  }
  closeModal = ()=>{
    this.setState({ modalVisibility:false })
  }
  logout = ()=>{
    userAuth.deauthenticateUsers()
    this.props.history.push('/')
  }
  render(){
    return(
      <div>
        <Turn 
          turn={this.state.turn}
        />
        <Board 
          theGrid={this.state.theGrid}
          makeMove={(i,j)=>this.makeMove(i,j)}
        />
        <Menu 
          createNewGame={this.createNewGame}
          logout={this.logout}
          player_1={this.state.player_1}
          player_2={this.state.player_2}
        />
        <Modal
          visible={this.state.modalVisibility}
          title="Tic Tac Toe Results"
          style={{ background: '#15202B',color:'#fff' }}
          onCancel={()=>{this.createNewGame();this.closeModal()}}
          footer={[
            <Button key="back" onClick={()=>{this.createNewGame();this.closeModal()}} className="customButton">
              New Game
            </Button>,
            <Button key="submit" type="primary" onClick={this.logout} className="customButton">
              Logout
            </Button>,
          ]}
        >
          <div>
            <strong>The player "{this.state.winner}" wins.</strong>
          </div>
        </Modal>
      </div>
    )
  }
}

export default App