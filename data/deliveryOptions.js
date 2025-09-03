export const deliveryOptions = [{
    id: '1',
    deliveryDay: 7,
    price: 0
}, {
    id: '2',
    deliveryDay: 3,
    price: 49

}];


export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
            deliveryOption = option;
        }
    });

    return deliveryOption || deliveryOptions[0];
}