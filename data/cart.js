export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: 1,
        quantity: 2
        }, {
        productId: 2,
        quantity: 1
    }];
}

function saveTOLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));

}

export function addToCart(productId){

    let matchingItem;

    cart.forEach((item) => {
        if(item.productId === productId){
            matchingItem = item;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveTOLocalStorage();

}


export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveTOLocalStorage();
}
