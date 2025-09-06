import { cart } from "../data/cart.js";
import { getProduct } from "../data/product.js";  
import { getDeliveryOption } from "../data/deliveryOptions.js";
import { addOrder } from "../data/orders.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';



export function renderPaymentSummary() {
    let productPrice = 0;
    let shippingPrice = 0;

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPrice += product.price * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPrice += deliveryOption.price;
    });
    
    const totalBeforeTax = productPrice + shippingPrice;
    const tax = Math.round(totalBeforeTax * 0.1);
    const total = totalBeforeTax + tax;

    const paymentSummaryHTML = `

        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (2):</div>
            <div class="payment-summary-money">
                ₹${productPrice}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
                ₹${shippingPrice}
            </div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
                ₹${totalBeforeTax}
            </div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
                ₹${tax}
            </div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
                ₹${total}
            </div>
        </div>

        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
    
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order').addEventListener('click', async () => {

        const order = {
            id: crypto.randomUUID(), 
            orderTime: dayjs().toISOString(),
            cart: cart,
            status: "Preparing",
            total: calculateTotal(cart)
        };

        addOrder(order);

        localStorage.removeItem("cart");

        window.location.href = "orders.html";
    });

    function calculateTotal(cart) {
        let productPrice = 0;
        let shippingPrice = 0;

        cart.forEach(item => {
            const product = getProduct(item.productId);
            productPrice += product.price * item.quantity;

            const deliveryOption = getDeliveryOption(item.deliveryOptionId);
            shippingPrice += deliveryOption.price;
        });

        const totalBeforeTax = productPrice + shippingPrice;
        const tax = Math.round(totalBeforeTax * 0.1);
        return totalBeforeTax + tax;
    }
}