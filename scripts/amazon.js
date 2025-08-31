import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';



let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="box" >

            <div class="box-content">

                <div class="box-name">
                    ${product.name}
                </div>
                    
                <div class="box-img" ">
                    <img src="${product.image}">
                </div>

                <div class="box-rating">
                    <img class="box-rating-stars" 
                    src="ratings/ratings/rating-${product.rating.stars * 10}.png">
                    <div class="box-rating-count">
                        ${product.rating.count}
                    </div>
                </div>
                <div class="box-price">
                    <span class="price-symbol">
                        ₹
                    </span>
                    <span class="price-value">
                        ${product.price}
                    </span>
                </div>

                <div class="box-quantity">
                    <select>
                        <option selected-value="1">1</option>
                        <option selected-value="2">2</option>
                        <option selected-value="3">3</option>
                        <option selected-value="4">4</option>
                        <option selected-value="5">5</option>
                        <option selected-value="6">6</option>
                        <option selected-value="7">7</option>
                        <option selected-value="8">8</option>
                        <option selected-value="9">9</option>
                        <option selected-value="10">10</option>
                    </select>
                </div>


                <button class="add-to-cart js-add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>

            </div>

        </div>`;
    }
)

document.querySelector('.js-shop').innerHTML = productsHTML;

function updateCartQuantity(){

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

        updateCartQuantity();
        
    });
});