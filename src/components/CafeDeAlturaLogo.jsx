import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/icons/ps_coffee-hot.png";

const CafeDeAlturaLogo = () => {
  return (
    <figure className="flex items-center gap-2">
      <Link to="/" className="text-2xl font-normal">
        cafedealtura.com
      </Link>

      <img className="w-5 h-6" src={logoIcon} alt="logo icon" />
    </figure>
  );
};
export default CafeDeAlturaLogo;
