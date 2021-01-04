import productType from "../type/productsType";

const initialState = {
  cartItems: [],
  cartCheckList: [],
};

export default function productReducer(state = initialState, action) {
  const { payload, id, checked } = action;
  const { cartItems, cartCheckList } = state;

  switch (action.type) {
    case productType.GET_PRODUCTS_DATA:
      const products = Object.assign({}, payload);
      return { ...state, products };

    case productType.ADD_CART:
      return { ...state, cartItems: cartItems.concat(payload) };

    case productType.DELETE_CART:
      return {
        ...state,
        cartItems: cartItems.filter((item) => item.id !== id),
      };

    case productType.SINGLE_CHECK:
      if (checked) {
        cartCheckList.push(id);
      } else {
        state.cartCheckList = cartCheckList.filter((item) => item !== id);
      }
      return { ...state };

    case productType.ALL_CHECK:
      if (action.checked) {
        cartItems.forEach((item) => cartCheckList.push(item.id));
      } else {
        state.cartCheckList = [];
      }
      return { ...state };

    default:
      return state;
  }
}
