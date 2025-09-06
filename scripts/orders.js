import { orders } from "../data/orders.js";
import { getProduct } from "../data/product.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

function renderOrders() {
  const container = document.querySelector(".orders-grid");
  let html = "";

  if (orders.length === 0) {
    container.innerHTML = `<p>No orders found.</p>`;
    return;
  }

  orders.forEach(order => {
    let orderItemsHTML = "";

    order.cart.forEach(cartItem => {
      const product = getProduct(cartItem.productId);
      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

      const deliveryDate = dayjs(order.orderTime)
        .add(deliveryOption.deliveryDay, "days")
        .format("MMMM D, YYYY");

      orderItemsHTML += `
        <div class="product-image-container">
          <img src="${product.image}">
        </div>
        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-delivery-date">Arriving on: ${deliveryDate}</div>
          <div class="product-quantity">Quantity: ${cartItem.quantity}</div>
          <button class="buy-again-button button-primary" data-product-id="${product.id}">
            <i class="fa-solid fa-rotate-right"></i>
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>
        <div class="product-actions">
          <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
            <button class="track-package-button button-secondary">Track package</button>
          </a>
        </div>
      `;
    });

    html += `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${dayjs(order.orderTime).format("MMMM D, YYYY")}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>₹${order.total}</div>
            </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>
        <div class="order-details-grid">
          ${orderItemsHTML}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

renderOrders();
