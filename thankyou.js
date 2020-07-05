

// DROP DOWN
var overLay=document.getElementById('overlay');
var dropDown=document.getElementById('drop-down-icon');
var dropUp=document.getElementById("angle-up");
var directClothsec=document.getElementById('drop-cloth-ref');
dropDown.onclick=function(){
   overLay.style.transform="translateY(0%)";
}

dropUp.onclick=function(){
    overLay.style.transform="translateY(-100%)";
 }

 directClothsec.onclick=function(){
    overLay.style.transform="translateY(-100%)"; 
 }