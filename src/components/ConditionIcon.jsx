import React from "react";

const ConditionIcon = ({ inconSrc }) => {
  return (
    <figure>
      <img
        className="w-[52px] h-[52px] bg-[#2A5B45] p-3 rounded-[20px]"
        src={inconSrc}
        alt="card condition"
      />
    </figure>
  );
};

export default ConditionIcon;
