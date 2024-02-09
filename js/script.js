import {menuArray} from './data.js'
const menuContainer = document.querySelector('#menu')
menuContainer.addEventListener('click', (e) => {
    if(e.target.dataset.btn) {
        addItem(e.target.dataset.btn)
    }
} )

function addItem(itemId) {
    console.log(itemId)
}

function renderPage() {
    const menuHtml = menuArray.map((menuItem) => 
        `<div class="menu_item">
            <div class="item_content">
                <p class="icon">${menuItem.emoji}</p>
                <div class="item_details">
                    <h2 class="sub-heading">${menuItem.name}</h2>
                    <p class="item_text">${menuItem.ingredients.join(', ')}</p>
                    <p id="price">$ ${menuItem.price}</p>
                </div>
            </div>
            <div class="item_btn" >
                <i class="fa-solid fa-plus" data-btn="${menuItem.name}"></i>                        
            </div>
        </div>
        <hr class="item_seperator">`).join('')
    menuContainer.innerHTML = menuHtml
}

renderPage()

