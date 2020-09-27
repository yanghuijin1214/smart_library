import React from 'react';
import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import User from './User';

/*
class App extends React.Component{
  render(){
    
    return(
      <>
      <h1>Hi this is Library</h1>
      <span id="sticker1"></span>
      <span id="sticker2"></span>
      <User/>
      <MainL/>
    </>
    )
  }
}*/
function App(){
  return <HashRouter>
    <h1>Hi this is Library</h1>
     <Route path='/' exact={true} component={Home}></Route>
     <Route path='/login' component={Login}></Route>
  </HashRouter>
}

export default App;