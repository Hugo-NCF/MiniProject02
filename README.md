# JHA Cleats

A website for selling soccer cleats from three top brands: Adidas, Nike, and Mizuno.

## Group Members

- Jose Araya
- Hugo Cruz
- Annika Maringer

## Website Link (Using Netlify)

https://jhacleats2.netlify.app/


## Description

JHA Cleats is a website built to sell soccer cleats. The site features a dark background theme, creating a bold and modern look. The page is fully responsive, adapting from desktop to mobile screens. Product cards are generated dynamically through JavaScript, and the shopping cart persists user actions using localStorage.

## Project Files

### index.html
The main HTML file that contains the page structure: navbar, hero banner, product display section, newsletter subscription, cart sidebar, and footer. The product cards are not hardcoded -- they are injected into the `#cleats-container` div by `products.js`.

### products.js
Contains the products array (18 cleat objects, each with name, price, image, and category) and the `generateCards()` function, which dynamically creates all product cards organized by brand category (Adidas, Nike, Mizuno). Runs on page load.

### cart.js
Handles all shopping cart logic. Functions include:
- `openCart()` / `closeCart()` -- toggle the cart sidebar
- `addToCart(productName, price, image)` -- add an item or increase its quantity
- `removeFromCart(index)` -- remove a specific item
- `increaseQuantity(index)` / `decreaseQuantity(index)` -- adjust item count
- `clearCart()` -- empty the entire cart
- `payCart()` -- simulate payment with a confirmation alert and reset
- `renderCart()` -- rebuild the cart UI and update the total price
- `updateCartBadge()` -- update the item count badge on the navbar cart icon

The cart is saved to and loaded from `localStorage`, so user actions persist across sessions.

### email.js
Handles the newsletter subscription. Functions include:
- `validateEmail(email)` -- validates the email format using a regex
- `openPopup()` / `closePopup()` -- show or hide the success popup

Uses `addEventListener` on the Subscribe and Close buttons.

### styles/style.css
All styling for the site, including the navbar, banner, product cards (glassmorphic design), cart sidebar, newsletter section, popup, footer, and responsive media queries for screens under 768px.


## Page Sections

### Navbar
A fixed navigation bar at the top of the page that stays visible while scrolling. It contains the JHA Cleats logo, navigation links (Home, Shop, About Us), and icons for a shopping cart and user profile.

### Banner
The hero section that greets visitors with a large heading and a short description of the brand. It uses a two-column grid layout with text on the left and an action image on the right. On mobile, the layout switches to a single column with the image on top.

### Product Display
The main section of the site, displaying 18 cleats organized into three brand categories: Adidas, Nike, and Mizuno. Each category has its own title and a grid of product cards. Every card shows the product image, name, price, and an "Add to Cart" button. The cards are generated dynamically by `products.js` using DOM manipulation

### Shopping Cart (Sidebar)
A sidebar that displays the user's selected items with quantity controls, individual prices, and a running total. The cart persists in `localStorage`, so items remain even after the page is refreshed. The cart serves as the history of user actions -- every item added, quantity changed, or item removed is immediately reflected.

### Newsletter
A call-to-action section inviting visitors to subscribe via email. It features a background image with an email input field and a subscribe button, which validates the email and shows a success popup.

### Footer
The bottom section containing the JHA Cleats logo, two columns of navigation links, social media icons, and a copyright notice. On mobile, everything stacks into a single centered column.

## Interactive DOM Elements

- **Add to Cart** button - Adds the product to the cart and opens the sidebar
- **Cart icon** (navbar) - Opens the cart sidebar
- **Close (x)** button - Closes the cart sidebar
- **(+) Quantity** button - Increases item quantity by one
- **(-) Quantity** button - Decreases quantity by one, or removes the item if quantity is 1
- **Trash icon** - Removes the item from the cart
- **Clear Cart** button - Empties all items from the cart
- **Pay** button - Simulates payment with a confirmation alert and resets the cart
- **Subscribe** button - Validates email input and displays a success popup
- **Close Popup** button - Dismisses the subscription popup
- **Cart Overlay** - Closes the cart sidebar by clicking the dark background

## JavaScript Functions Used

- `document.getElementById()` - grab elements
- `document.createElement()` - make new elements
- `element.appendChild()` - add stuff to containers
- `element.innerHTML` / `element.textContent` - change text/content
- `element.classList.add()` / `remove()` - toggle styles
- `element.addEventListener()` - handle button clicks
- `localStorage` - save cart between sessions
- `JSON.parse()` / `JSON.stringify()` - convert cart data

## Design Principles

- **Simplicity**: Clean layout focused on one product category with no unnecessary clutter.
- **Consistency**: Uniform card design, color scheme, and spacing across all sections.
- **Visual Hierarchy**: Large headings guide the eye, followed by category titles, then product details.
- **Typography**: Serif and sans-serif font pairing creates contrast between headings and body text.
- **Responsive Design**: Media queries adapt the layout for screens under 768px.
- **Color Theory**: Dark background with a bright green accent (#A6E22E) provides strong contrast and brand identity.
