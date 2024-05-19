document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    const cartCount = document.getElementById('cart-count');
    const viewCartButton = document.getElementById('view-cart-button');
    const signInButton = document.getElementById('sign-in-button');

    let cart = [];

    searchButton.addEventListener('click', () => {
        alert(`Searching for: ${searchInput.value}`);
    });

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-product-id');
            const productName = productElement.querySelector('p').innerText;
            const productPrice = productElement.querySelector('p:nth-child(3)').innerText;

            cart.push({
                id: productId,
                name: productName,
                price: productPrice
            });

            cartCount.innerText = cart.length;
            alert(`${productName} has been added to your cart.`);
        });
    });

    viewCartButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty.');
        } else {
            let cartContent = 'Your cart contains:\n';
            cart.forEach((item, index) => {
                cartContent += `${index + 1}. ${item.name} - ${item.price}\n`;
            });
            alert(cartContent);
        }
    });

    signInButton.addEventListener('click', () => {
        const userName = prompt('Please enter your username:');
        if (userName) {
            alert(`Welcome, ${userName}!`);
        }
    });
});
