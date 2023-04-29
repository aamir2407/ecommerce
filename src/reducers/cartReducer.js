import _ from "lodash";
import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FROM_CART:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
