// Array of all products organized by category
const products = [
    // Adidas Cleats
    {
      name: "Adidas Adizero Electric II (Black/Off-white)",
      price: 199.99,
      image: "./assets/Adidas1-removebg-preview.png",
      category: "Adidas"
    },
    {
      name: "Adidas F50 Sparkfusion Elite Mid (Cloud White/Lucid Pink)",
      price: 249.99,
      image: "./assets/Adidas2-removebg-preview.png",
      category: "Adidas"
    },
    {
      name: "Adidas F50 Sparkfusion Pro (Violent Tone/Lucid Lemon/Purple Rush)",
      price: 239.99,
      image: "./assets/Adidas3-removebg-preview.png",
      category: "Adidas"
    },
    {
      name: "Adidas Predator Elite Fold-Over Tongue FG (Core Black/Carbon/Lucid/Lemon)",
      price: 249.99,
      image: "./assets/AdidasPredatorRemoveBack.png",
      category: "Adidas"
    },
    {
      name: "Adidas Predator Elite Fold-Over Tongue FG (Lucid Red/Core Black/Cloud White)",
      price: 299.99,
      image: "./assets/Adidas5-removebg-preview.png",
      category: "Adidas"
    },
    {
      name: "Adidas Copa Icon II FG Core (Black/Gold Metallic)",
      price: 199.99,
      image: "./assets/Adidas6-removebg-preview.png",
      category: "Adidas"
    },
    // Nike Cleats
    {
      name: "Nike Tiempo Maestro Elite (White/Black/Racer Blue/Pink Blast)",
      price: 219.99,
      image: "./assets/nike1No.png",
      category: "Nike"
    },
    {
      name: "Nike Mercurial Superfly 10 Elite (Racer Blue/White/Pink Blast)",
      price: 299.99,
      image: "./assets/nike2No.png",
      category: "Nike"
    },
    {
      name: "Nike Phantom 6 High Elite (Racer Blue/White/Pink Blast)",
      price: 239.99,
      image: "./assets/nike3No.png",
      category: "Nike"
    },
    {
      name: "Nike Tiempo Maestro Elite FG (Black/Ice Blue)",
      price: 229.99,
      image: "./assets/nike4No.png",
      category: "Nike"
    },
    {
      name: "Nike Tiempo Maestro Elite SE FG (Metallic Red Bronze/Metallic Rose Gold)",
      price: 279.99,
      image: "./assets/nike5No.png",
      category: "Nike"
    },
    {
      name: "Nike Phantom 6 High Elite FG (Pistachio Frost/Hyper Orange)",
      price: 229.99,
      image: "./assets/nike6No.png",
      category: "Nike"
    },
    // Mizuno Cleats
    {
      name: "Mizuno Morelia NEO IV (White/Black/Red/Kangaroo Leather)",
      price: 289.99,
      image: "./assets/mizuno-1-removebg-preview.png",
      category: "Mizuno"
    },
    {
      name: "Mizuno Morelia NEO IV Beta Elite FG (Unity Sky)",
      price: 299.99,
      image: "./assets/mizuno-2-removebg-preview.png",
      category: "Mizuno"
    },
    {
      name: "Mizuno Morelia NEO IV Turf (White/Gold)",
      price: 279.99,
      image: "./assets/mizuno-3-removebg-preview.png",
      category: "Mizuno"
    },
    {
      name: "Mizuno Alpha II (Red/Black)",
      price: 249.99,
      image: "./assets/mizuno-4-removebg-preview.png",
      category: "Mizuno"
    },
    {
      name: "Mizuno Morelia II (Black/White/Red)",
      price: 319.99,
      image: "./assets/mizuno-5-removebg-preview.png",
      category: "Mizuno"
    },
    {
      name: "Mizuno Alpha II (Black/Iridescent)",
      price: 309.99,
      image: "./assets/mizuno-6-removebg-preview.png",
      category: "Mizuno"
    }
  ];
  
  // Function to generate all product cards dynamically
  function generateCards() {
    const cleatsSection = document.getElementById("cleats-container");
  
    // Get unique categories in order
    const categories = ["Adidas", "Nike", "Mizuno"];
  
    categories.forEach(function (category) {
      // Create category title
      const categoryTitle = document.createElement("h3");
      categoryTitle.classList.add("category-title", "primary-font");
      categoryTitle.innerHTML = '<span class="special-color">' + category + '</span> Cleats';
  
      // Create cards container
      const cardsDiv = document.createElement("div");
      cardsDiv.classList.add("cards");
  
      // Filter products by category and create a card for each
      const categoryProducts = products.filter(function (product) {
        return product.category === category;
      });
  
      categoryProducts.forEach(function (product) {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
  
        const name = document.createElement("h3");
        name.classList.add("primary-font");
        name.style.fontSize = "1.1rem";
        name.textContent = product.name;
  
        const price = document.createElement("h4");
        price.classList.add("primary-font");
        price.style.fontSize = "1rem";
        price.textContent = "Price: $" + product.price.toFixed(2);
  
        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", function () {
          addToCart(product.name, product.price, product.image);
        });
  
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(button);
        cardsDiv.appendChild(card);
      });
  
      cleatsSection.appendChild(categoryTitle);
      cleatsSection.appendChild(cardsDiv);
    });
  }
  
  // Generate the cards when the page loads
  generateCards();