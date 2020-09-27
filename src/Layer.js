import React from 'react';

class Layer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            imgList:this.props.list,
            c:this.props.index
        }
        this.layer=React.createRef();
        this.layerimage=React.createRef();
        this.width=0;
        this.height=0;

    }
    componentDidMount(){
        // const width=this.layerimage.clientWidth;
        // const height=this.layerimage.clientHeight;
        // this.width=width+50;
        // this.height=height+100;
        
    }

  render(){
      
        var c=this.state.c;

    return(
            <div id="layer" ref={(layer)=>this.layer=layer} /*style={{width:this.layerimage.clientWidth+50, height:this.layerimage.clientHeight+100}}*/>
        <img id="layer_image" ref={(layerimage)=>this.layerimage=layerimage} src={(this.state.imgList[c].url)} alt="selected_image" />
        <button id="layer_x" onClick={function(e){
            this.setState({display:"none"});
            e.preventDefault();
            this.props.onChangePage("false");
        }.bind(this)}>X</button>

        <p id="layer_text">{this.state.imgList[c].year}</p>
        <button id="layer_delete" onClick={function(c,e){
            if(window.confirm('Are you sure delete?')){
                e.preventDefault();

                this.props.onDelete(c);
                this.props.onChangePage("false");

                
            }
        }.bind(this,c)}>Delete</button>
        <button id="layer_bef" onClick={function(c,e){
                e.preventDefault();
                c--;
                if(c>=0){
                   this.setState({...this.state,c:c});
                }
                else{c=0;} 
                 }.bind(this,c)}><i className="fas fa-chevron-left"></i></button>
        <button id="layer_aft" onClick={function(c,e){e.preventDefault(); c++;
                    if(c<this.state.imgList.length){
                        this.setState({...this.state,c:c});
                     }
                     else{c=this.state.imgList.length-1;} 
                      this.setState({...this.state,c:c})}.bind(this,c)}><i className="fas fa-chevron-right"></i></button>
    </div>
        
    )
  }
}

export default Layer;