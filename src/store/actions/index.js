import axios from "axios";
const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";
const ADD_CART = "ADD_CART";

export const getProductsData = async () => {
  const products = await axios.get(
    "http://jsonplaceholder.typicode.com/albums/1/photos"
  );

  return {
    type: GET_PRODUCTS_DATA,
    payload: products,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};
