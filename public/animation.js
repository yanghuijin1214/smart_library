
const library=document.querySelector('#img_library');
const list=document.getElementsByClassName('imgl');
const layer=document.querySelector("#layer");
const layerx=document.querySelector("#layer_x");
const layerimage=document.querySelector("#layer_image");
layer.style.display="none";

for(var i=0;i<list.length;i++){
    
    var aa=list[i];
    
        layer.style.display="block";
        layerimage.src=imgList[n].url;
        layer.style.width=layerimage.clientWidth+50+"px";
        layerimage.style.marginLeft="25px";
        layer.style.height=layerimage.clientHeight+100+"px";
        layerimage.style.marginTop="30px";
    
}
