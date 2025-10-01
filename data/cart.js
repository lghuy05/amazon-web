export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [];
}

export function addtoCart(productId) {
  let flag = false;
  cart.forEach((product) => {
    if (product.productId === productId) {
      product.quantity += 1;
      flag = true;
    }
  })

  if (!flag) {
    cart.push({ productId: productId, quantity: 1, deliveryOptionsId: '1' });

  }
  savetoStorage();

}

export function removefromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  savetoStorage();
}
export function savetoStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function updateDeliveryOption(productId, deliveryOptionsId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionsId = deliveryOptionsId;
  savetoStorage();
}
