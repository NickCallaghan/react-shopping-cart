import { v4 as uuid } from "uuid";

function addToCart(cartProducts, productToAdd) {
  //This function takes the cart items and a new item which is to be added. It returns an updated array of cart items.

  // if there are no products in the cart return new item only.
  if (cartProducts.length === 0) return [productToAdd];

  //Determine if the product is already in the cart

  // *** This could probably be more efficient as we are mapping over the cart items twice. Could refector later to get the index in array in the first operation then update the item quantity directly without mapping in the second operation.  ***//
  const productInCart = cartProducts.find(
    (product) => product.id === productToAdd.id
  )
    ? true
    : false;

  if (!productInCart) {
    // If not in cart return the cart items array with new item appended
    return [...cartProducts, productToAdd];
  } else {
    // If already in cart. Map over cart and update the quantity for the product being added
    let newCartProducts = cartProducts.map((product) =>
      //if this is the product being added
      product.id === productToAdd.id
        ? //Update Qty
          { ...product, qty: product.qty + productToAdd.qty }
        : // else retrun the cart item unmodified
          product
    );
    return newCartProducts;
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: addToCart(state.items, action.newCartProduct),
      };
    default:
      return state;
  }
};

export default cartReducer;
