import { orders } from "../data/orders.js";
import { getProduct } from "../data/product.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const params = new URLSearchParams(window.location.search);
const orderId = params.get("orderId");
const productId = Number(params.get("productId"));

const container = document.querySelector(".order-tracking");

// Find the order
const order = orders.find(o => o.id === orderId);

if (!order) {
  container.innerHTML = "<p>Order not found.</p>";
} else {
  // Find the cart item
  const cartItem = order.cart.find(item => item.productId === productId);

  if (!cartItem) {
    container.innerHTML = "<p>Product not found in this order.</p>";
  } else {
    // Always get the latest product info from product.js
    const product = getProduct(productId);

    // If product missing in products.js, show placeholder
    const imageSrc = product?.image || "images/placeholder.jpg";

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

    const deliveryDate = dayjs(order.orderTime)
      .add(deliveryOption.deliveryDay, "days")
      .format("dddd, MMMM D");

    container.innerHTML = `
      <a class="back-to-orders-link link-primary" href="orders.html">View all orders</a>
      <div class="delivery-date">Arriving on ${deliveryDate}</div>
      <div class="product-info">${product?.name || "Product Name"}</div>
      <div class="product-info">Quantity: ${cartItem.quantity}</div>
      <img class="product-image" src="${imageSrc}" alt="${product?.name || "Product"}">
      <div class="progress-labels-container">
        <div class="progress-label ${order.status === "Preparing" ? "current-status" : ""}">Preparing</div>
        <div class="progress-label ${order.status === "Shipped" ? "current-status" : ""}">Shipped</div>
        <div class="progress-label ${order.status === "Delivered" ? "current-status" : ""}">Delivered</div>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
    `;
  }
}
