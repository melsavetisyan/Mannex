let div1 = document.querySelector('.div7_grid_cont_product');
let div2 = document.querySelector('.div7_grid_cont_title');
let div3 = document.querySelector('.div7_grid_cont_buttons');
let div4 = document.querySelector('.grid-container');
let div5 = document.querySelector('.div7_grid_cont_h5');

function f2() {
    fetch("https://retoolapi.dev/fHtZfi/data")
    .then((res) => res.json())
    .then((users) => {
        users.forEach((item) => {
            let div = document.createElement("div");
            div.dataset.id = item.id;
            div.classList.add("grid-item");
            div.innerHTML = `<div class="div7_grid_cont">
            <div class="div7_grid_cont_product"> <!-- div1 -->
                <img class="div7_grid_cont_product_img" src="${item.URL}">
            </div>
            <div class="div7_grid_cont_title" > <!-- div2 -->
                <h5 class="div7_grid_cont_h5">Michelin</h5>
                <p class="div7_grid_cont_p">${item.P_index}</p>
            </div>
            <div class="div7_grid_cont_buttons"> <!-- div3 -->
                <button class="div7_grid_cont_pbutton">${item.Price}</button>
                <div class="div7_grid_cont_pl_min">
                    <a class="d7gcpm_min" href="#"><img src="./Icons/min.svg" alt="Min"></a>
                    <p class="cd7gcpm_qount">1</p>
                    <a class="d7gcpm_max" href="#"><img src="./Icons/max.svg" alt="Max"></a>
                </div>
                <div>
                    <img class="div7_grid_cont_addtc" src="./Icons/icon_shop.svg" alt="Add to card">
                </div>
            </div>
            </div>`;
            div4.append(div);           
        });
    });
}

f2();