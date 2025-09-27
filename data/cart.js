export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [];
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
