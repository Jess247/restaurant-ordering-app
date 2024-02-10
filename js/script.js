import {menuArray} from './data.js'
const menuContainer = document.querySelector('#menu')
const orderSection = document.querySelector('#order-section')
const newItems = document.querySelector('#new-items')
let totalPrice = 0
menuContainer.addEventListener('click', (e) => {
    if(e.target.dataset.btn) {
        addItem(e.target.dataset.btn)
    }
} )

function addItem(itemId) {
    const currentItem = menuArray[itemId]
    totalPrice += currentItem.price
    orderSection.classList.remove('hidden')
    newItems.innerHTML += `
    <div class="ordered-item" id="ordered-item">
        <div id="ordered-item-inner">
            <h4 >${currentItem.name}</h4>
            <button class="remove-btn" id="remove-btn">remove</button>
        </div>
        <p id="ordered-item-price">$${currentItem.price}</p>
    </div>
    `
    document.querySelector('#total-price').textContent = `$ ${totalPrice}`
    console.log(totalPrice)
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
                <i class="fa-solid fa-plus" data-btn="${menuItem.id}"></i>                        
            </div>
        </div>
        <hr class="item_hr">`).join('')
    menuContainer.innerHTML = menuHtml
}

renderPage()

