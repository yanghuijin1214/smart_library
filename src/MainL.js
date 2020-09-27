import React from 'react';
import './App.css';
import Layer from './Layer';
import axios from 'axios';
import User from './User';

class MainL extends React.Component{
    constructor(props){
      super(props);
      this.state={
        id:'',
        imgList:[],
        index:0,
        layer:"none"
      }
    }
    
    getImg=async()=>{
      const response=await axios.get('http://192.168.123.122:3003/api/users');
      //const body=await response.json();
      return response.data;
    }
    deleteImg=async(index)=>{
      await axios.post('http://192.168.123.122:3003/api/users',{
        'id':this.state.id,
          'imgID':index
      })
      .then(response=>console.log(response))
      .catch(error=>console.log(error))
    }


    componentDidMount(){
      console.log("locaiton is here "+window.location.href);
      var a=window.location.href;
      a=a.split('=');
      console.log(a[1]);
      
      if(a[1]!==undefined){
        this.setState({id:a[1]});
      }

       this.getImg()
       .then(res=>{
         for(var i=0;i<res.length;i++){
           if(res[i].id===this.state.id){
             if(res[i].online==='on'){
               this.setState({imgList:res[i].imgList});
               break;
             }
            else{
              alert('Connection Error!');
              window.location.href='http://localhost:5000/';
            }
            
           }
         }
          })
       .catch(err=>console.log(err));
       
    }

  render(){
      var lists=[];
      var imglist=this.state.imgList;
      

      imglist.map(obj =>{
      return lists.push(<li className="imgl" key={obj.id} onClick={function(id,e){
        
        this.setState({index:id-1, layer:"block"});
      }.bind(this,obj.id)}><img src={(obj.url)} alt={(obj.url)}/><p>{obj.year}</p></li>);
      })
    return(
       <>
       <User id={this.state.id}/>
      <div id="img_library">
          <div id="sliderWrap">
              <ul id="sliderList">
                {(this.state.id!=='')?lists:<p id="slider_sign">Please Log in!</p>}
              </ul>
          </div>
      </div>
      {(this.state.layer==="block")?<Layer index={this.state.index} list={this.state.imgList}

        onChangePage={function(bool){
          if(bool==="false"){
              this.setState({
                  layer:"none"
              });
          }}.bind(this)} 

      onDelete={function(index){
        var _contents = Array.from(this.state.imgList);
        this.deleteImg(index);
        _contents.splice(index,1);
        for(var j=index;j<_contents.length;j++){
          _contents[j].id-=1; 
        }
        console.log(_contents);
        this.setState({
          imgList:_contents
        });        
        alert("deleted!!");
      }.bind(this)}/>:null}
      </>
    )
  }
}


export default MainL;
