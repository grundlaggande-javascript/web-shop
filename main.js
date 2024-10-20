// Sample data for products
const products = [
    {
        name: 'Laptop',
        description: 'A high-performance laptop for professionals.',
        price: 999,  // Use numeric value for easier calculations
    },
    {
        name: 'Smartphone',
        description: 'The latest model smartphone with cutting-edge features.',
        price: 699,
    },
    {
        name: 'Headphones',
        description: 'Noise-cancelling headphones for immersive sound.',
        price: 199,
    },
    {
        name: 'Smartwatch',
        description: 'A smart wearable device with health tracking.',
        price: 249,
    }
];

// Cart data
let cart = [];
let totalPrice = 0;

// Selecting the container element and cart elements
const productContainer = document.getElementById('product-container');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Function to create and add a product to the DOM
function renderProduct(product) {
    // Create the product div
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    // Create and append the product name
    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    // Create and append the product description
    const productDesc = document.createElement('p');
    productDesc.textContent = product.description;
    productDesc.className = 'product-description';
    productDiv.appendChild(productDesc);

    // Create and append the product price
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;
    productPrice.className = 'product-price';
    productDiv.appendChild(productPrice);

    // Create and append the "Add to Cart" button
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.className = 'add-to-cart-btn';

    // Add event listener to the button to add the product to the cart
    addToCartBtn.addEventListener('click', () => {
        addToCart(product);
    });

    productDiv.appendChild(addToCartBtn);

    // Append the product div to the container
    productContainer.appendChild(productDiv);
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);  // Add product to cart array
    totalPrice += product.price;  // Update total price
    displayCart();  // Update cart display
}

// Function to display the cart
function displayCart() {
    // Clear the cart before re-rendering it
    clearContainer(cartItems);

    // Use a traditional for loop to render the cart items
    for (let i = 0; i < cart.length; i++) {
        const cartItem = document.createElement('li');
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

// Initial render
renderAllProducts();
