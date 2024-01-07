import React from "react";
import bagIcon from "../assets/icons/cart-bag-icon.png";
import { Link } from "react-router-dom";

const CartBagIcon = () => {
  return (
    <figure className="flex gap-2">
      <Link to="/cart" className="cart-bag-icon" href="">
        <img src={bagIcon} alt="cart icon" />
      </Link>
      <p className="cart-count text-xs font-normal leading-4 px-2 py-1 bg-Grey-color rounded-full hidden"></p>
    </figure>
  );
};

export default CartBagIcon;
