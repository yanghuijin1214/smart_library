import React from 'react';
import './App.css';
import MainL from './MainL';


class Home extends React.Component{

    render(){
      return(
        <>
        <span id="sticker1"></span>
        <span id="sticker2"></span>
        
        <MainL/>
      </>)
    }
}

export default Home;