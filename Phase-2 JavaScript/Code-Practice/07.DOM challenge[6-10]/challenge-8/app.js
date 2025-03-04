// /**
//  * Write your challenge solution here
//  */
function modifyContent(name, change) {
    let item = cartArray.find((i) => i.name === name);
    if (!item) return;
  
    item.count += change;
    if (item.count <= 0) {
      removeItem(name);
    } else {
      item.element.querySelector(".quantity").textContent = item.count;
      item.element.querySelector(".item-price").textContent = (item.price * item.count).toFixed(2);
      totalPrice += change * item.price;
      updatePrice();
    }
  }
  
const cart = document.querySelector("#cart-items");
const emptyCart = document.querySelector(".empty-cart");
const cartTotal = document.querySelector("#cart-total");

let totalPrice = 0;
let cartArray = [];

function addToCart(name, price) {
    let existingItem = cartArray.find((item) => item.name === name);
  
    if (existingItem) {
      existingItem.count++;
      existingItem.element.querySelector(".quantity").textContent = existingItem.count;
      existingItem.element.querySelector(".item-price").textContent = (existingItem.price * existingItem.count).toFixed(2);
    } else {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
  
      itemDiv.innerHTML = `
              ${name} 
              <div class="quantity-controls">
                  <button class="subtract-btn">-</button>
                  <span class="quantity">1</span>
                  <button class="add-btn">+</button>
                  $<span class="item-price">${price.toFixed(2)}</span>
                  <button class="remove-btn">Remove</button>
              </div>
          `;
  
      cartArray.push({ name, price, count: 1, element: itemDiv });
      cart.appendChild(itemDiv);
  
      itemDiv
        .querySelector(".add-btn")
        .addEventListener("click", () => modifyQuantity(name, 1));
      itemDiv
        .querySelector(".subtract-btn")
        .addEventListener("click", () => modifyQuantity(name, -1));
      itemDiv
        .querySelector(".remove-btn")
        .addEventListener("click", () => removeItem(name));
    }
  
    if (cartArray.length === 1) emptyCart.remove();
  
    totalPrice += price;
    updatePrice();
  }

function modifyQuantity(name, change) {
    let item = cartArray.find((i) => i.name === name);
    if (!item) return;
  
    item.count += change;
    if (item.count <= 0) {
      removeItem(name);
    } else {
      item.element.querySelector(".quantity").textContent = item.count;
      item.element.querySelector(".item-price").textContent = (item.price * item.count).toFixed(2);
      totalPrice += change * item.price;
      updatePrice();
    }
  }

function removeItem(name) {
  let itemIndex = cartArray.findIndex((i) => i.name === name);
  if (itemIndex === -1) return;

  let item = cartArray[itemIndex];
  totalPrice -= item.price * item.count;
  cart.removeChild(item.element);
  cartArray.splice(itemIndex, 1);

  if (cartArray.length === 0) cart.appendChild(emptyCart);
  updatePrice();
}

function updatePrice() {
  cartTotal.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
}

