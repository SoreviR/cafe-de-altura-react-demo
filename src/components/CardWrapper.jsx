import React from "react";
import { coffeData } from "./GetDataApi";
import ProductCard from "./ProductCard";

const CardWrapper = () => {
  const newProductsArray = [
    "Costa Rica Tarrazú",
    "Colombia Los Naranjos",
    "Laos Amanecer",
    "Etiopía Yrgacheff",
  ];

  return (
    <div className="w-[1200px] flex gap-6">
      {newProductsArray.map((product, i) => {
        const productInfo = coffeData.find((item) => item.brand === product);

        return (
          <ProductCard
            key={i}
            productImg={productInfo.img_url}
            productBrand={productInfo.brand}
            productPrice={productInfo.price}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
