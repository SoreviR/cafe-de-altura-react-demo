import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/icons/Arrow narrow right.svg";
import restaurantImg from "../assets/images/Hero image taste.png";

const FeatureSection = () => {
  return (
    <section className="flex px-10 py-11 justify-center">
      <div className="w-[1200px] flex justify-between">
        <aside className="flex flex-col gap-4 w-[457px] justify-center">
          <h2 className="text-2xl font-medium leading-7 text-[#2A5B45]">
            Pruébalo en nuestro coffee shop
          </h2>
          <p className="text-sm font-normal leading-4">
            Visita nuestra cafetería en el centro de la ciudad para probar los
            granos de café antes de hacer tu pedido y llévate un descuento
          </p>
          <footer className="">
            <Link
              to={""}
              className="flex gap-4 items-center text-sm font-semibold leading-4 underline"
              href=""
            >
              Como llegar
              <img src={arrowIcon} alt="" />
            </Link>
          </footer>
        </aside>

        <figure>
          <img className="w-[588px] h-[390px]" src={restaurantImg} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default FeatureSection;
