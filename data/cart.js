export let cart = JSON.parse(localStorage.getItem('cart') || '[]').map(item => ({
  ...item,
  productId: Number(item.productId) 
}));;

if (!cart) {
    cart = [{
        productId: 1,
        quantity: 2,
        deliveryOptionId: '1'
    }, {
        productId: 2,
        quantity: 1,
        deliveryOptionId: '2'
    }];
} else {
    cart = cart.map(item => ({
        ...item,
        productId: Number(item.productId)
    }));
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}

export function addToCart(productId) {

    productId = Number(productId);
    
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
            quantity: 1,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();
}


export function removeFromCart(productId) {

    const index = cart.findIndex(cartItem => cartItem.productId === Number(productId));

    if (index !== -1) {
        cart.splice(index, 1);
    }

    saveToStorage();
}

