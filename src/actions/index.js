import { ADD_TO_CART, DELETE_FROM_CART, SHOW_CART } from "./types";
import axios from "axios";

export const addToCart = (formValues) => async (dispatch, getState) => {
  console.log(getState);

  dispatch({ type: ADD_TO_CART, payload: {} });
};

export const fetchCart = () => async (dispatch) => {
  dispatch({ type: SHOW_CART, payload: [] });
};

export const getAllProducts = () => async (dispatch) => {
  let res = await axios.get("https://fakestoreapi.com/products");
  console.log(res);
  let data = res.data;
  return data;
};
