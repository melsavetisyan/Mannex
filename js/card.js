let cardBascket = document.querySelector(".cards");
let parentBascket = document.querySelector(".parent_bascket");
let sumBtn = document.querySelector('.sum-btn')
let arr = [];
let allSum;
let sum = 0;
if (!localStorage.hasOwnProperty("bascket")) {
  parentBascket.innerHTML = `<div class="card_main_empty_div">
  <div class="card_main_empty_div1">
    <h2 class="cmed1h2">Корзина</h2>
  </div>
  <div class="card_main_empty_div2">
    <img class="cmed2_img" src="../Icons/empty_card.svg" alt="Empty Card">
  </div>
  <div class="card_main_empty_div3">
    <p class="cmed3_p">Пока что здесь ничего нет, перейдите в <br> каталог и добавьте интересующий товар</p>                    
  </div>
  <div class="card_main_empty_div4">
  <button class="cmed4button"><a href="../garage_home.html">Перейти в каталог</a></button>
  </div>
  </div>`;
} else {
  let dataReceived = JSON.parse(localStorage.getItem("bascket"));
  dataReceived.forEach((e) => {
    fetch(`https://retoolapi.dev/cG7rV9/data/${e.id}`)
      .then((arr) => arr.json())
      .then((car) => {
        let div = document.createElement("div");
        div.innerHTML = `<div class="product-card">
        <div class="product-img"><img src="${car.img}" alt="" /></div>
        <div class="product-name"><p>${car.brand}</p></div>
        <div class="product-text">
        <p>${car.about}</p>
        </div>
        <div class="product-price">
        <p>${car.price}р.</p>
        <span class="mention">
        <span class="minus"></span>${e.count}<span class="plus"></span></span>
        <button><img src="../Icons/icon_shop.svg" alt="" /></button></div> `;
        cardBascket.append(div)
        sum += +car.price;
        allSum = sum * e.count  
      })
       .then(() => {
        arr.push(allSum) 
       })
       .finally(()=>  sumBtn.innerHTML = arr[arr.length-1]
      )
  });
}