// add the default cart screen say your cart is empty

let cart = []; // initialize an empty cart


// Function to display the cart screen (when pressing the cart button)
function displayCart() {
    document.getElementById("cart").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
    document.getElementById("cart").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
}


// // Function to add an item to the cart (when pressing add to cart button)
// function addtoCart(name, price, image) {
//     let item = {
//         name: name,
//         price: price,
//         image: image
//     };
//     cart.push(item); // add the item to the cart array
//     console.log(cart); // log the current state of the cart
// }

// // Function to delete an item from the cart (when pressing delete button in cart sidebar)
// function clearCart(index) {
//     if (index >= 0 && index < cart.length) {
//         cart.splice(index, 1); // remove the item at the specified index
//         console.log("Item removed from cart");
//     } else {
//         console.log("Invalid index");
//     }
// }

// /* when press add to cart, have the cart screen pop up 
// from the right side covering 1/5 of the page */

// /* on cart screen have a delete button, and an add more button, 
// and a checkout button with an alert that says "Purchased Items!" */