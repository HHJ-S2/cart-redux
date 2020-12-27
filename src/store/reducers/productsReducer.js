const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_DATA":
      return { ...action.payload };

    default:
      return state;
  }
}
