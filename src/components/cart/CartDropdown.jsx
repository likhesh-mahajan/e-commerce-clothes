import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/CustomButton";

import React from "react";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-ietms" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
