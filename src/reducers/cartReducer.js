const addToCart = (cartProducts, productToAdd) => {
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
};

const getCartNoOfItems = (cartItems) => {
  return cartItems.reduce((acc, current) => {
    return acc + current.qty;
  }, 0);
};

const getCartTotal = (cartItems) => {
  return cartItems.reduce((acc, current) => {
    return acc + current.qty * current.price;
  }, 0);
};

const cartReducer = (state, action) => {
  let updatedCart;
  switch (action.type) {
    // ADJUST BASKET QUANTITIES OR ADD NEW ITEM TO CART
    case "ADJUST":
      updatedCart = {
        ...state,
        items: addToCart(state.items, action.cartAdjustment),
      };
      updatedCart.noOfItems = getCartNoOfItems(updatedCart.items);
      updatedCart.total = getCartTotal(updatedCart.items);
      return updatedCart;
    // REMOVE PRODUCT FROM CART ENTIRLY
    case "REMOVE":
      updatedCart = {
        ...state,
        items: state.items.filter((product) => product.id !== action.id),
      };
      updatedCart.noOfItems = getCartNoOfItems(updatedCart.items);
      updatedCart.total = getCartTotal(updatedCart.items);
      return updatedCart;
    default:
      return state;
  }
};

export default cartReducer;
