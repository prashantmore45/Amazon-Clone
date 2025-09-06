// import { products } from "../data/product.js";

// // 🔄 Always clear old orders first
// localStorage.removeItem("orders");

// const sampleOrders = [
//   {
//     id: "ORD-1",
//     orderTime: new Date().toISOString(),
//     total: 1700,
//     status: "Preparing",
//     cart: [
//       { productId: 1, quantity: 1, deliveryOptionId: "1" }, // ✅ box1_image.jpg
//       { productId: 2, quantity: 2, deliveryOptionId: "2" }  // ✅ box2_image.jpg
//     ]
//   },
//   {
//     id: "ORD-2",
//     orderTime: new Date().toISOString(),
//     total: 2000,
//     status: "Shipped",
//     cart: [
//       { productId: 3, quantity: 1, deliveryOptionId: "2" }  // ✅ box3_image.jpg
//     ]
//   },
//   {
//     id: "ORD-3",
//     orderTime: new Date().toISOString(),
//     total: 12000,
//     status: "Delivered",
//     cart: [
//       { productId: 4, quantity: 1, deliveryOptionId: "3" }  // ✅ box4_image.jpg
//     ]
//   }
// ];

// // Save seeded orders
// localStorage.setItem("orders", JSON.stringify(sampleOrders));

// console.log("✅ Sample orders seeded into localStorage:", sampleOrders);
