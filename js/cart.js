var listproducts=[
  {
    Image:"../pic/cart/phone.png",
    name:'Iphone 15 Pro Max',
    firstprice:2000.00,
    quantity:1,
    total:2000.00,
  },
  {
    Image:"../pic/cart/watch.png",
    name:'Apple Watch (2nd Gen)',
    firstprice:400.00,
    quantity:1,
    total:400.00,
  },
];
function render(){
  let subtotal=0;
  listproducts.forEach(function(listproduct){
    subtotal+=listproduct.quantity*listproduct.firstprice;
  })
  let carttotal=subtotal;
  for(var i=0;i<listproducts.length;i++){
    listproducts[i].total=listproducts[i].firstprice*listproducts[i].quantity;
  }
  const html=listproducts.map(function(listproduct){
    return `
    <div class="item1">
      <div class="i1">
        <img src="${listproduct.Image}">
        <div class="t3">
            <p>${listproduct.name}</p>
            <p class="price" style="color: #FF6543;">$${listproduct.firstprice}</p>
        </div>
      </div>
      <div class="i2">
          <button class="minus">-</button>
          <div class="in1"><span>${listproduct.quantity}</span></div>
          <button class="plus">+</button>
      </div>
      <div class="i3"><p>$${listproduct.total}</p></div>
      <button class="i4"><img src="../pic/cart/c.png"></button>
    </div>`
  }).join('');
  document.querySelector('.items').innerHTML=html;
  document.querySelector('.t5').innerHTML=
  `
    <div class="t5-0">
      <p class="t5-1">SUBTOTAL</p><span class="t5-2">$${subtotal.toFixed(2)}</span>
    </div>
    <div class="t5-0">
      <p class="t5-1">TOTAL</p><span class="t5-2">$${carttotal.toFixed(2)}</span>
    </div>
  `;
  const minusbut=document.querySelectorAll('.minus');
  const plusbut=document.querySelectorAll('.plus');
  const delbut=document.querySelectorAll('.i4');
  function updatesolg(index,quantity){
    if(quantity<0){
      return;
    }
    listproducts[index].quantity=quantity;
    render();
  }
  function remove(index){
    listproducts.splice(index,1)
    render(); 
  }
  for(let i=0;i<delbut.length;i++){
    plusbut[i].addEventListener('click',function(){
      updatequantity(i,listproducts[i].quantity+1);
    })
    minusbut[i].addEventListener('click',function(){
      updatequantity(i,listproducts[i].quantity-1);
    })
    delbut[i].addEventListener('click',function(){
      remove();
    })
  }
}
render()