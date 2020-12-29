const initialState = {
  cartItems: [],
};

export default function productReducer(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case "GET_PRODUCTS_DATA":
      const products = Object.assign({}, payload);
      return { ...state, products };

    case "ADD_CART":
      return { ...state, cartItems: state.cartItems.concat(payload) };

    default:
      return state;
  }
}
