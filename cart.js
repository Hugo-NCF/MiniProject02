// add the default cart screen say your cart is empty
function createBox() {
    // 1. Create a new div element
    const newDiv = document.createElement("div");

    // 2. Set the content and style
    newDiv.innerHTML = "Hello! I am a dynamically created box.";
    newDiv.style.width = "200px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.border = "2px solid black";
    newDiv.style.padding = "10px";
    newDiv.style.marginTop = "10px";

    // 3. Append the new element to the body
    document.body.appendChild(newDiv);
}
/* when press add to cart, have the cart screen pop up 
from the right side covering 1/5 of the page */

/* on cart screen have a delete button, and an add more button, 
and a checkout button with an alert that says "Purchased Items!" */