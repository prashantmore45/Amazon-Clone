import { cart, removeFromCart } from '../data/cart.js';
import { products } from '../data/product.js';



let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="cart-item-container">
            <div class="delivery-date">
                Delivery date: Tuesday, Sept 3
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                    src="${product.image}">

                <div class="cart-item-details">
                    <div class="product-name">
                    ${product.name}
                    </div>
                    <div class="product-price">
                    ₹${product.price}
                    </div>
                    <div class="product-quantity">
                    <span>
                        Quantity: <span class="quantity-label">2</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                        Update
                    </span>
                    <span class="delete-quantity-link link-primary" id="deletebtn">
                        Delete
                    </span>
                    </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="delivery-option-1">
                        <div>
                            <div class="delivery-option-date">
                                Tuesday, Sept 3
                            </div>
                            <div class="delivery-option-price">
                                FREE Shipping
                            </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="delivery-option-1">
                        <div>
                            <div class="delivery-option-date">
                                Monday, Sept 2
                            </div>
                            <div class="delivery-option-price">
                                ₹49 - Shipping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
)

document.getElementById("orders").innerHTML = productsHTML;

function upadteCartQuantity(){

    let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        addToCart(productId);

        upadteCartQuantity();
        
    });
});


