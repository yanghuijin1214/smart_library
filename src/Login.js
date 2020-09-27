import React from 'react';
import axios from 'axios';

class User extends React.Component{
  state={
    id:'',
    passwd:'',
    login:"off"
  }
  getId=async()=>{
    const response=await axios.get('http://localhost:3003/api/users');
    return response.data;
  }
  Login=async(id,state)=>{
    await axios.post('http://localhost:3003/api/users',{
      'id':id,
      'login':state
    })
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
  }

  CheckId(id,passwd){
     this.getId()
     .then(res=>{
       for(var i=0;i<res.length;i++){
         if(res[i].id===id&&res[i].password===passwd){
          this.setState({id:id, passwd:passwd});

          alert(`Hi ${id}!`);
          this.Login(id,'on');
          window.location.href=`http://localhost:5000/#/?id=${id}`;
          return 0;
         }
       }
       alert('Login Error');
        })
     .catch(err=>console.log(err));
     return "false";
  }
  render(){
    return(
      <>
      <h2 id="login_tx">Login</h2>
    <div id="login_div">
      <form action='/' className="login_form" method="get" onSubmit={function(e){
        e.preventDefault();
        var v=this.CheckId(e.target.id.value, e.target.passwd.value);
        if(v==="false"){
          e.target.id.value='';
          e.target.passwd.value='';
        }
      }.bind(this)}>
        <input type="text" className="input" name="id" placeholder="ID"></input>
        <input type="password" className="input" name="passwd" placeholder="PASSWORD"></input>
        <input type="submit" className="login_btn input" value="Sign In"></input>
      </form>
    </div>      
    </>
    )
  }
}


export default User;
