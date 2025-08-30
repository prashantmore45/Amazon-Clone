// SEARCH FUNCTIONALITY
const searchInput = document.querySelector(".search-input");
const productBoxes = document.querySelectorAll(".box");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    productBoxes.forEach(box => {
        const name = (box.dataset.name || "").toLowerCase(); // safe check
        box.style.display = name.includes(query) ? "block" : "none";
    });
});

// CART FUNCTIONALITY
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCountElement = document.querySelector(".nav-cart");

function updateCartCount() {
    cartCountElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cart.length})`;
}

updateCartCount();

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.dataset.id;
        cart.push(productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    });
});


// ====== FILTERS FUNCTIONALITY ======
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");

function filterProducts() {
    const category = categoryFilter.value;
    const priceOrder = priceFilter.value;

    let boxesArray = Array.from(productBoxes);

    // Filter by category
    boxesArray.forEach(box => {
        if (category === "all" || box.dataset.category === category) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });

    // Sort by price
    boxesArray.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        if (priceOrder === "low") return priceA - priceB;
        if (priceOrder === "high") return priceB - priceA;
        return 0;
    });

    // Reorder products in DOM
    const shopContainer = document.querySelector(".shop");
    boxesArray.forEach(box => shopContainer.appendChild(box));
}

// Add event listeners
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
