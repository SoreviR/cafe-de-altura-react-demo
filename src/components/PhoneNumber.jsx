import React from "react";
import { Link } from "react-router-dom";
import phoneIcon from "../assets/icons/Phone.svg";

const PhoneNumber = () => {
  return (
    <div className="flex gap-6">
      <Link to="/phone-number" className="flex items-center gap-2">
        <img className="w-6 h-6" src={phoneIcon} alt="phone icon" />
        <p className="text-sm font-semibold">+34 919 49 05 18</p>
      </Link>
    </div>
  );
};

export default PhoneNumber;
