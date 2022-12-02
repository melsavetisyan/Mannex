// Burger menu // 
const burgerBtn = document.querySelector('.md_menu_mobile');
const navBar = document.querySelector('.md_menu');
const navBarList = document.querySelector('.md_menu_ul');
let menuImg = document.querySelector('.md_mm_img')
burgerBtn.addEventListener('click',()=> {
  if(navBar.classList.toggle('burger')) {
    menuImg.src = './photo/open.png'
  }else{
    menuImg.src = './photo/close.png'
  }
  navBarList.classList.toggle('burger-list');
})


// Slider //
let img = document.querySelector(".slide-img");
let nextSlide = document.querySelector(".nextslide");
let prevSlide = document.querySelector(".prevslide");
let arr = [
  "./photo/slide1.png",
  "./photo/slide2.png",
  "./photo/slide3.png",
  "./photo/slide4.png",
  "./photo/slide1.png",
  "./photo/slide2.png",
  "./photo/slide3.png",
  "./photo/slide1.png",
];
let i = 0;
let count = document.querySelector(".count-of-slider");
count.innerHTML = `<span class="numbers1">01</span><span class="numbers2">/0${arr.length}</span> `;
function nextSlider() {
  if (i == arr.length - 1) {
    i = 0;
  } else {
    i++;
  }
  img.src = arr[i];
  count.innerHTML = `<span class="numbers1">0${
    i + 1
  }/</span><span class="numbers2">0${arr.length}</span> `;
}
nextSlide.addEventListener("click", nextSlider);

function prevSlider() {
  if (i <= arr.length - 1 && i > 0) {
    i--;
  } else if (i == 0) {
    i = arr.length - 1;
  }
  img.src = arr[i];
  count.innerHTML = `<span class="numbers1">0${
    i + 1
  }/</span><span class="numbers2">0${arr.length}</span> `;
}
prevSlide.addEventListener("click", prevSlider);
//          //
// Paginatin//
//         //
const countItemsPerPage = window.innerWidth > 1124 ? 6 : 4;
const parent = document.querySelector(".cards");
const pageCount = document.querySelector(".pagess");
const loadAnimation = document.querySelector(".loader");
let currentPage = 1;
let response;
let allData = [];
async function allDataCollector() {
  const data = await fetch("https://retoolapi.dev/cG7rV9/data");
  allData = await data.json();
}
async function dataReceived() {
  const data = await fetch(
    `https://api-generator.retool.com/cG7rV9/data?_page=${currentPage}&_limit=${countItemsPerPage}`
  );
  response = await data.json();
  loadAnimation.style.display = "none";
}
async function changePage(page) {
  await allDataCollector();
  await dataReceived();
  const pageNum = () => Math.ceil(allData.length / countItemsPerPage);

  if (page <= 1) {
    page = 1;
  }
  if (page > pageNum()) {
    page = pageNum();
  }
  pageCount.innerHTML = page;

  drawElement(parent, response);
  addBascket(response);
  let move = 1;
  let count = [];
  let pageDots = [];
  let elem;
  let right = page + move + 1;
  let left = page - move;
  for (let i = 1; i <= pageNum(); i++) {
    if (i === 1 || i === pageNum() || (i >= left && i < right)) {
      count.push(i);
    }
  }
  for (let i of count) {
    if (elem) {
      if (i - elem == 2) {
        pageDots.push(elem + 1);
      } else if (i - elem != 1) {
        pageDots.push("...");
      }
    }
    pageDots.push(i);
    elem = i;
  }
  pageCount.innerHTML = "";
  for (let j of pageDots) {
    let span = document.createElement("span");
    span.innerText = j;
    span.addEventListener("click", () => changePage(j + 1));
    pageCount.append(span);
  }
  currentPage = page;
}

window.onload = () => {
  changePage(1);
};
function drawElement(parent, response) {
  parent.innerHTML = "";
  response.forEach((item) => {
    const div = document.createElement("div");
    div.dataset.id = item.id;
    div.classList.add("product-card");
    div.innerHTML = `<div class="product-img"><img src="${item.img}"  alt="" ></div>
       <div class="product-name"><p>${item.brand}</p></div>
       <div class="product-text">
       <p>${item.about}</p>
     </div>
     <div class="product-price">
     <p class="count-price">${item.price}p.</p>
     <span class="mention">
       <span class="minus">-</span><span>1</span><span class="plus">+</span></span>
     <button class="add-btn"><img src="./Icons/icon_shop.svg" alt="" /></button></div>`;
    parent.append(div);
  });
}
function addBascket(response) {
  let addBtn = document.querySelectorAll(".add-btn");
  let plus = document.querySelectorAll(".plus");
  let minus = document.querySelectorAll(".minus");
  plus.forEach((e) =>
    e.addEventListener("click", () => {
      let count = +e.previousElementSibling.innerText + 1;
      e.previousElementSibling.innerText = count;
      response.filter((i) => {
        if (i.id == +e.parentElement.parentElement.parentElement.dataset.id) {
          e.parentElement.previousElementSibling.innerText = i.price * count;
        }
      });
    })
  );
  minus.forEach((e) =>
    e.addEventListener("click", () => {
      if (+e.nextElementSibling.innerText > 1) {
        let count = +e.nextElementSibling.innerText - 1;
        e.nextElementSibling.innerText = count;
        response.filter((i) => {
          if (i.id == +e.parentElement.parentElement.parentElement.dataset.id) {
            e.parentElement.previousElementSibling.innerText = i.price * count;
          }
        });
      }
    })
  );
  let arr = [];
  addBtn.forEach((i) =>
    i.addEventListener("click", () => {
      arr.push(
        createBascketItem(
          i.parentElement.parentElement.dataset.id,
          i.previousElementSibling.children[1].innerText
        )
      );
      let uniqueItem = [...new Map(arr.map((i) => [i.id, i])).values()];
      localStorage.setItem("bascket", JSON.stringify(uniqueItem));
    })
  );
}
function createBascketItem(id, count) {
  return {
    id,
    count,
  };
}
