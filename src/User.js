import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class User extends React.Component{
  state={
    login:"off"
  } 
  Login=async(id,state)=>{
    await axios.post('http://192.168.123.122:3003/api/users',{
      'id':id,
      'login':state
    })
    .then(response=>console.log(response))
    .catch(error=>console.log(error)) 
  }

  render(){
    var a='off';

    if(this.props.id!==''){
      a='on';  
    }
    return(
    <div id="user">
        {(a==='off')?<Link to="/login" id="user_login">Login</Link>:<div id="user_image" onClick={function(){
          alert("User : "+this.props.id);
        }.bind(this)}></div>}
        {(a==='on')?<button id="logout" onClick={function(){
            var exit=window.confirm('Are you sure to log out?');
            
            if(exit){
              this.setState({login:'off'});
              console.log(this.props.id);
              this.Login(this.props.id,'off');
              window.location.href='http://localhost:5000/';
            }
        }.bind(this)}>Logout</button>:null}
    </div>      
    )
  }
}


export default User;
