function isAuthenticated(){
  let player_1 = localStorage.getItem('player_1')
  let player_2 = localStorage.getItem('player_2')

  if(player_1 && player_2){
    return true
  }
  return false
}

function authenticateUsers(player_1,player_2){
  localStorage.setItem('player_1',player_1)
  localStorage.setItem('player_2',player_2)
}

function deauthenticateUsers(){
  localStorage.removeItem('player_1')
  localStorage.removeItem('player_2')
}

function retrieveNames(){
  let player_1 = localStorage.getItem('player_1')
  let player_2 = localStorage.getItem('player_2')

  return {
    player_1:player_1,
    player_2:player_2,
  }
}
module.exports = {
  isAuthenticated:isAuthenticated,
  authenticateUsers:authenticateUsers,
  deauthenticateUsers:deauthenticateUsers,
  retrieveNames:retrieveNames,
}