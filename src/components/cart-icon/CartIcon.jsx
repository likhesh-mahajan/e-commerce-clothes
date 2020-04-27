import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./carticon.styles.scss";

// onClick Action
import { connect } from "react-redux";
import { toggleHiddenCart } from "../../redux/cart/cartAction";

const CartIcon = ({ toggleHiddenCart }) => {
  return (
    <div className="cart-icon" onClick={toggleHiddenCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHiddenCart: () => dispatch(toggleHiddenCart()),
  };
};

export default connect(null, mapDispatchToProps)(CartIcon);
