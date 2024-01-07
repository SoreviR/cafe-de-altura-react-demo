import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonText, linkPath, buttonClass }) => {
  return (
    <Link to={linkPath} className={buttonClass}>
      <button className="text-sm font-semibold">{buttonText}</button>{" "}
    </Link>
  );
};

export default Button;
