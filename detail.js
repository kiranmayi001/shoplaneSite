var productPage="https://5d76bf96515d1a0014085cf9.mockapi.io/product";

const urlParams = new URLSearchParams(window.location.search);
const requiredProductId = urlParams.get('id');
console.log(requiredProductId);
var addToCart=document.getElementById('add-cart-button');
var cartCount=document.getElementById('cart-count');
var isAccessory=false;

// var requiredProductId=window.location.href;
let order = JSON.parse(localStorage.getItem('order'));
cartCount.innerText = order ? order.count :'0';
    
var productName="";
var qty=0;
var count=0;
var productWrapper=document.getElementsByClassName('product-wrapper')[0];
var productPicture="";
var productprice=0;
var productTotalAmount=0;
var mainImage=document.createElement('img');
// productWrapper.innerHTML="";


var xhttp=new XMLHttpRequest();
xhttp.open("GET",productPage,true);
xhttp.send();
xhttp.onreadystatechange=function(){
if(xhttp.readyState===4){
    var response=JSON.parse(xhttp.responseText);
    for(let i=0;i<response.length;i++){
        if(requiredProductId===response[i].id){
            console.log(response[i].preview);
         var detailCard=ProductDetailCard(response[i]);
         productWrapper.appendChild(detailCard);   
            }
        }
    }
}



function ProductDetailCard(fetchedProduct){
 isAccessory=fetchedProduct.isAccessory;
 console.log(isAccessory);
  var containerDiv=document.createElement('div');
  containerDiv.classList.add('container-div');
    var productLeftImage=document.createElement('div');
    productLeftImage.classList.add('product-left-image');
    // var mainImage=document.createElement('img');
    mainImage.src=fetchedProduct.preview;
    productPicture=fetchedProduct.preview;
    console.log(fetchedProduct.preview);
    console.log(productPicture);
  
    mainImage.id="product-preview";
    productLeftImage.appendChild(mainImage);
    containerDiv.appendChild(productLeftImage);
    console.log(productWrapper);


var productRightDetail=document.createElement('div');
productRightDetail.classList.add('product-right-details');
var productTitle=document.createElement('h1');
productTitle.id="product-title";
productTitle.innerText=fetchedProduct.name;
productRightDetail.appendChild(productTitle);


productName=fetchedProduct.name;

var productBrand=document.createElement('h2');
productBrand.id="product-brand";
productBrand.innerText=fetchedProduct.brand;
productRightDetail.appendChild(productBrand);

var productHeading=document.createElement('h4');
productHeading.id="section-heading";
productHeading.innerText="Price is Rs ";
var p=document.createElement('p');
p.id="product-price";
p.innerText=fetchedProduct.price;
productprice=fetchedProduct.price;
productHeading.appendChild(p);
productRightDetail.appendChild(productHeading);

var sectionHeadingDescription=document.createElement('h4');
sectionHeadingDescription.classList.add('section-heading');
sectionHeadingDescription.innerText="Description";
productRightDetail.appendChild(sectionHeadingDescription);

var productDescription=document.createElement('p');
productDescription.id="product-description";
productDescription.innerText=fetchedProduct.description;
productRightDetail.appendChild(productDescription);


var productPreviewHeading=document.createElement('h4');
productPreviewHeading.classList.add('section-heading');
productPreviewHeading.innerText="Product Preview";
productRightDetail.appendChild(productPreviewHeading);


var productSelect=document.createElement('div');
productSelect.id="product-select-images";

//   var img1=document.createElement('img');
productRightDetail.appendChild(productSelect);
for(let i=0;i<fetchedProduct.photos.length;i++){
    // var img2=document.createElement('img');
    // img2.src=fetchedProduct.photos[i];
    // productSelect.appendChild(img2);
//    var bro= createPreviewImages(fetchedProduct.photos[i]);
productSelect.appendChild(createPreviewImages(fetchedProduct.photos[i],i));
}
containerDiv.appendChild(productRightDetail);
console.log(containerDiv);
return containerDiv;
}


function createPreviewImages(url,pos){
    var image=document.createElement('img');
    image.src=url;
    // image.classList.add('pre-images')
    var img=document.getElementsByClassName('active-image');
if(pos==0){
image.classList.add('active-image');
    }
   image.addEventListener('click',function(){
      for(let i=0;i<img.length;i++){
img[i].classList.remove("active-image");
   image.classList.add('active-image');
   mainImage.src=url;
      }
})
    return image;
}



addToCart.addEventListener('click',function(){

let prevOrder = JSON.parse(localStorage.getItem('order'));

 if(prevOrder) {
// If previous orders exist
    let prevProducts = prevOrder.products;
    for(let i=0; i<prevProducts.length; i++) {
        if(prevProducts[i].id===requiredProductId) {
            // If product already exists in previous orders
            prevProducts[i].qty+=1;
            prevOrder.count+=1;
            prevProducts[i].productprice+=prevProducts[i].productprice;
            console.log(prevProducts[i].productprice);
            localStorage.setItem('order', JSON.stringify(prevOrder));
            cartCount.innerText=prevOrder.count;
            return;
        }
    }
    // If product doesn't exist in previous orders
    let product = {id:requiredProductId, name:productName, qty:1,productPicture:productPicture,productprice: productprice,isAccessory:isAccessory};
    prevOrder.products.push(product);
    prevOrder.count+=1;
    localStorage.setItem('order', JSON.stringify(prevOrder));
    cartCount.innerText=prevOrder.count;
} 
 else {
// If no previous orders exist
    let order={products:[], count:0};
    let product = {id:requiredProductId, name:productName, qty:1,productPicture:productPicture,productprice: productprice,isAccessory:isAccessory};
    order.products.push(product);
    order.count+=1;
    localStorage.setItem('order',JSON.stringify(order));
    cartCount.innerText=order.count;
   
 }

});




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