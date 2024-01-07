import React from "react";
import { Link } from "react-router-dom";

const FooterButton = ({ iconImg, text }) => {
  return (
    <Link to={""}>
      <button className="flex gap-2 px-6 py-3 bg-[#515051] rounded items-center">
        <img src={iconImg} alt="" />
        <p className="text-sm font-semibold leading-4">{text}</p>
      </button>
    </Link>
  );
};

export default FooterButton;
