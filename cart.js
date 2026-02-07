// add the default cart screen say your cart is empty
let cart = []; // initialize an empty cart

// Function to display the cart screen (when pressing the cart button)
function openCart() {
    document.getElementById("cart").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
    document.getElementById("cart").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
}

// Function to add items to the cart
function addToCart(productName, price, image) {
  const existingItem = cart.find(function (item) {
    return item.name === productName;
  });
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      image: image,
      quantity: 1
    });
  }
  renderCart();
  openCart();
}
// Function to remove items from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

// Function to render the cart items and total price
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartEmptyMessage = document.getElementById("cart-empty");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const cartClearBtn = document.getElementById("cart-clear-btn");
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartEmptyMessage.style.display = "flex";
    cartClearBtn.style.display = "none";
    cartTotalPrice.textContent = "$0.00";
  } else {
    cartEmptyMessage.style.display = "none";
    cartClearBtn.style.display = "block";
    let total = 0;

    cart.forEach(function (item, index) {
 
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
      cartItemDiv.innerHTML =
        '<img src="' + item.image + '" alt="' + item.name + '" class="cart-item-img" />' +
        '<div class="cart-item-details">' +
          '<p class="cart-item-name">' + item.name + '</p>' +
          '<p class="cart-item-price">$' + item.price.toFixed(2) + ' x ' + item.quantity + '</p>' +
        '</div>' +
        '<button class="cart-item-remove" onclick="removeFromCart(' + index + ')">' +
          '<i class="fa-solid fa-trash"></i>' +
        '</button>';

      cartItemsContainer.appendChild(cartItemDiv);
    });

    cartTotalPrice.textContent = "$" + total.toFixed(2);
  }

  updateCartBadge();
}

// Function to update the cart badge with the total number of items
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const totalItems = cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);

  if (totalItems > 0) {
    badge.textContent = totalItems;
    badge.style.display = "inline-block";
  } else {
    badge.style.display = "none";
  }
}