import axios from "axios";
import productType from "../type/productsType";

export const getProductsData = async () => {
  const products = await axios.get(
    "http://jsonplaceholder.typicode.com/albums/1/photos"
  );

  return {
    type: productType.GET_PRODUCTS_DATA,
    payload: products,
  };
};

export const addToCart = (payload) => {
  return {
    type: productType.ADD_CART,
    payload,
  };
};

export const singleCheck = (id, checked) => {
  return {
    type: productType.SINGLE_CHECK,
    id,
    checked,
  };
};

export const allCheck = (checked) => {
  return {
    type: productType.ALL_CHECK,
    checked,
  };
};
