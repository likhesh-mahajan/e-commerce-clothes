import React from "react";
import "./collectionitem.styles.scss";
import CustomButtom from "../custom-button/CustomButton";

// redux

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButtom onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButtom>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
