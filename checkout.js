
// DROP DOWN
var overLay=document.getElementById('overlay');
var dropDown=document.getElementById('drop-down-icon');
var dropUp=document.getElementById("angle-up");
var directClothsec=document.getElementById('drop-cloth-ref');

if(products===null || products!==null){
    dropDown.onclick=function(){
       overLay.style.transform="translateY(0%)";
    }
    
    dropUp.onclick=function(){
        overLay.style.transform="translateY(-150%)";
     }
    
     directClothsec.onclick=function(){
        overLay.style.transform="translateY(-100%)"; 
     }
    }






var orderPage="https://5d76bf96515d1a0014085cf9.mockapi.io/order";
var checkoutCardDiv=document.getElementsByClassName('checkout-card')[0];
var cardcol=document.getElementById('checkout-card-col');
var order=JSON.parse(localStorage.getItem('order'));
var amount=0;
var addToCart=document.getElementById('cart-count');
console.log(order);




var products=order.products;


var orderTotal=document.getElementById("total-amount");
addToCart.innerText=order.count;
var itemCount=document.getElementById('item-count');
// itemCount.innerText=order.count;
itemCount.innerText=products.length;



for(let i=0;i<products.length;i++){
              amount+=products[i].productprice;   
            var cd=checkoutCard(products[i]);
            // checkoutCardDiv.appendChild(cd); 
            cardcol.appendChild(cd);
            

}



var orderTotal=document.getElementById('total-amount');
orderTotal.innerText=amount;








// checkout card
function checkoutCard(products){
var checkoutCardDiv=document.createElement('div');
checkoutCardDiv.classList.add('checkout-card');


    var checkoutImageDiv=document.createElement('div');
   var checkoutImage=document.createElement('img');
checkoutImage.classList.add("checkout-product-image");
checkoutImage.src=products.productPicture;
checkoutImageDiv.appendChild(checkoutImage);
checkoutCardDiv.appendChild(checkoutImageDiv);

checkDetails=document.createElement('div');
checkDetails.id="checkout-product-detail";

var checkoutProductName=document.createElement('h4');
checkoutProductName.innerText=products.name;
checkDetails.appendChild(checkoutProductName);

var productQty=document.createElement('p');
productQty.innerText="X"+products.qty;
checkDetails.appendChild(productQty);

var amount=document.createElement('p');
var span1=document.createElement('span');
span1.innerText="Amount: Rs ";
amount.appendChild(span1);

var productRate=document.createElement('span');
productRate.innerText=products.productprice;
amount.appendChild(productRate);
checkDetails.appendChild(amount);
checkoutCardDiv.appendChild(checkDetails);
console.log(checkoutCardDiv);

// return checkDetails;
return checkoutCardDiv;

}



// place order Listener
var placeOrder=document.getElementById("place-order-button");

placeOrder.addEventListener('click',function(){
    var ordertoBackend={
        totalBill:amount,
        productsOrdered:products
    }
    console.log(ordertoBackend);
    
    var xhttp=new XMLHttpRequest();
    
    xhttp.open("POST","https://5ee5029cddcea00016a371f2.mockapi.io/allOrders/createorder",true);
    xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(ordertoBackend));
    
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState===4){
    
        }
    }
    cardcol.innerHTML="";
    orderTotal.innerText="";
    itemCount.innerText="";
    localStorage.clear();
    alert("ordered successfully");
    addToCart.innerText="";
    var successfulpage=document.createElement('a');
successfulpage.href="./thankyou.html";
    
});

















    

// varprodObj = {
//     "id":productList[i].id,
//     "brand":productList[i].brand,
//     "name":productList[i].name,
//     "price":productList[i].price,
//     "preview":productList[i].preview,
//     "isAccessory":productList[i].isAccessory
//             }
     
//     orderItemArray.push(prodObj);
//         }
//     vardataObj = {
//     amount:grandTotal,
//     products:orderItemArray
//         }
    
 

// https://5ee5029cddcea00016a371f2.mockapi.io/allOrders/createorder



