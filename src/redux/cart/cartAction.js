import { cartActionTypes } from "./cartTypes";

export const toggleHiddenCart = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
};
