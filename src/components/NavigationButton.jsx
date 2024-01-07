import React from "react";
import { Link } from "react-router-dom";

const NavigationButton = ({ linkButton, textButton, buttonClass }) => {
  return (
    <li className={buttonClass}>
      <Link to={linkButton}>
        <button>{textButton}</button>
      </Link>
    </li>
  );
};

export default NavigationButton;
