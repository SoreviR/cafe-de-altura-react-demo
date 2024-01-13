import React from "react";
import Button from "./Button";

const ProductCard = ({ productImg, productBrand, productPrice }) => {
  return (
    <div className="group hover:bg-[#e3ded7] p-6 gap-6 rounded-lg border border-[#e3ded7] flex flex-col items-center">
      <figure className="">
        <img src={productImg} alt="" />
      </figure>
      <h5 className="text-sm font-semibold leading-4">{productBrand}</h5>
      <p className="text-sm font-normal leading-4">
        {productPrice.toFixed(2)} €
      </p>

      <Button
        buttonText="Añadir"
        linkPath="/shop"
        buttonClass="rounded-[4px] p-2 bg-[#2a5b45b3] text-white group-hover:bg-[#2a5b45]"
      />
    </div>
  );
};

export default ProductCard;
