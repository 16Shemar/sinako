let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = ''; // Clear existing items
    total = 0;

    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - R${cartItem.price}`;
        cartItems.appendChild(li);
        total += cartItem.price;
    });

    totalElement.textContent = total;
}

function clearCart() {
    cart = [];
    updateCart();
}
