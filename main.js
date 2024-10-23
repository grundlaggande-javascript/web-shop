// Selecting the container element and cart elements
const productContainer = document.getElementById("product-container");

let products = []; //Empty at first

fetch("products.json")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    products = response;
    renderAllProducts()
  }).catch(response => console.log(response));
console.log("line after fetch is run");

// Function to create and add a product to the DOM
function renderProduct(product) {
  // Create the product div
  const productDiv = document.createElement("div");
  productDiv.className = "product";

  // Create and append the product name
  const productName = document.createElement("h2");
  productName.textContent = product.name;
  productDiv.appendChild(productName);

  // Create and append the product description
  const productDesc = document.createElement("p");
  productDesc.textContent = product.description;
  productDesc.className = "product-description";
  productDiv.appendChild(productDesc);

  // Create and append the product price
  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;
  productPrice.className = "product-price";
  productDiv.appendChild(productPrice);

  // Append the product div to the container
  productContainer.appendChild(productDiv);
}

// Function to display the cart
function displayCart() {
  // Clear the cart before re-rendering it
  clearContainer(cartItems);

  // Use a traditional for loop to render the cart items
  for (let i = 0; i < cart.length; i++) {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${cart[i].name} - $${cart[i].price}`;
    cartItems.appendChild(cartItem);
  }

  // Update the total price display
  totalPriceElement.textContent = totalPrice;
}

// Helper function to clear the container (used for the cart)
function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Adding all products to the page
function renderAllProducts() {
  // Use a traditional for loop to render the products
  for (let i = 0; i < products.length; i++) {
    renderProduct(products[i]);
  }
}