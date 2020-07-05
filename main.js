var urlHomePage="https://5d76bf96515d1a0014085cf9.mockapi.io/product";
var cartCount=document.getElementById('cart-count');
let order = JSON.parse(localStorage.getItem('order'));
cartCount.innerText = order ? order.count :'0';
console.log(order);

var clothingGrid=document.getElementById('clothing-grid');
clothingGrid.innerHTML="";
var accessoryGrid=document.getElementById('accessory-grid');

accessoryGrid.innerHTML="";





// Getting home page api response for clothing section

var xhttp=new XMLHttpRequest();
xhttp.open("GET",urlHomePage,true);
xhttp.send();
xhttp.onreadystatechange=function(){
if(xhttp.readyState===4){
    var response=JSON.parse(xhttp.responseText);
    for(let i=0;i<response.length;i++){
       
         var newProductCard=productCard(response[i]);
         clothingGrid.appendChild(newProductCard);
            }     
        }
    }


//Product Card
function productCard(productRes){

    if(productRes.isAccessory===false){
var clothingProductCard=document.createElement('div');
clothingProductCard.classList.add('clothing-product-card');
clothingProductCard.id=productRes.id;

var productPage=document.createElement('a');
productPage.href="./detail.html?id="+productRes.id;
var productImage=document.createElement('img');
productImage.classList.add("cloth-product-image");
productImage.src=productRes.preview;
productPage.appendChild(productImage);
clothingProductCard.appendChild(productPage);


var productMetaDiv=document.createElement('div');
productMetaDiv.classList.add('product-meta-data');
var clothName=document.createElement('h4');
clothName.innerText=productRes.name;
productMetaDiv.appendChild(clothName);



var clothBrand=document.createElement('h5');
clothBrand.innerText=productRes.brand;
productMetaDiv.appendChild(clothBrand);


var clothPrice=document.createElement('p');
clothPrice.innerText=productRes.price;
productMetaDiv.appendChild(clothPrice);
clothingProductCard.appendChild(productMetaDiv)
console.log(clothingProductCard);

return clothingProductCard;
    } 
}







var http=new XMLHttpRequest();
http.open("GET",urlHomePage,true);
http.send();
http.onreadystatechange=function(){
if(http.readyState===4){
    var res=JSON.parse(http.responseText);
   
    for(let i=0; i<res.length; i++){
        console.log(res.length);
        console.log(res[i]);
        if(!res[i].isAccessory===false){
         var newAccessoryCard=accessoryCard(res[i]);
         accessoryGrid.appendChild(newAccessoryCard); 
        }    
    }
}
}

//Accessory Card
function accessoryCard(accessoryRes){
    console.log(accessoryRes.isAccessory);
  


var accessoryProductCard=document.createElement('div');
accessoryProductCard.classList.add('accessory-product-card');
accessoryProductCard.id=accessoryRes.id;


var accessoryPage=document.createElement('a');
accessoryPage.href="./detail.html?id="+accessoryRes.id;
var accessoryImage=document.createElement('img');
accessoryImage.classList.add("cloth-product-image");
accessoryImage.src=accessoryRes.preview;
accessoryPage.appendChild(accessoryImage);
accessoryProductCard.appendChild(accessoryPage);


var accessoryMetaDiv=document.createElement('div');
accessoryMetaDiv.classList.add('product-meta-data');
var accessoryName=document.createElement('h4');
// accessoryName.innerText=accessoryRes.name;
accessoryTextNode=document.createTextNode(accessoryRes.name);
accessoryName.appendChild(accessoryTextNode);
accessoryMetaDiv.appendChild(accessoryName);


var accessoryBrand=document.createElement('h5');
accessoryBrand.innerText=accessoryRes.brand;
accessoryMetaDiv.appendChild(accessoryBrand);


var accessoryPrice=document.createElement('p');
accessoryPrice.innerText=accessoryRes.price;
accessoryMetaDiv.appendChild(accessoryPrice);
accessoryProductCard.appendChild(accessoryMetaDiv)
console.log(accessoryProductCard);
// console.log(accessoryProductCard)
return accessoryProductCard;
}
// }



// DROP DOWN
var overLay=document.getElementById('overlay');
var dropDown=document.getElementById('drop-down-icon');
var dropUp=document.getElementById("angle-up");
var directClothsec=document.getElementById('drop-cloth-ref');
dropDown.onclick=function(){
   overLay.style.transform="translateY(0%)";
}

dropUp.onclick=function(){
    overLay.style.transform="translateY(-150%)";
 }

 directClothsec.onclick=function(){
    overLay.style.transform="translateY(-100%)"; 
 }