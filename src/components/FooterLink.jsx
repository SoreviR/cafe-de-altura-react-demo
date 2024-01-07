import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({ linkPath, linkText }) => {
  return (
    <li>
      <Link to={linkPath}>{linkText}</Link>
    </li>
  );
};

export default FooterLink;
