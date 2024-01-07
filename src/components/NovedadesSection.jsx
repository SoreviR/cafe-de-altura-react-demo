import React from "react";
import CardWrapper from "./CardWrapper";
import { Link } from "react-router-dom";
import arrowIcon from "../assets/icons/Arrow narrow right.svg";

const NovedadesSection = () => {
  return (
    <div className="flex items-center flex-col p-10 gap-10">
      <h2 className="text-2xl font-medium leading-7 text-[#2A5B45]">
        Novedades
      </h2>
      <CardWrapper />
      <Link
        to={"/shop"}
        className="button-store flex gap-4 items-center text-sm font-semibold leading-4 underline"
      >
        Ver todos
        <img src={arrowIcon} alt="arrow" />
      </Link>
    </div>
  );
};

export default NovedadesSection;
