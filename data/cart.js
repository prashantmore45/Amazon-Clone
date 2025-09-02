export let cart = [{
    productId: 1,
    quantity: 2
}, {
    productId: 2,
    quantity: 1
}];

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;

        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}


export function removeFromCart(productId) {

    const index = cart.findIndex(cartItem => cartItem.productId === Number(productId));

    if (index !== -1) {
        cart.splice(index, 1);
    }
}

