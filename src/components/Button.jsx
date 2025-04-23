import React from "react";

const Button = ({ disabled, onClick, type, className, children }) => {
  return (
    <button
      className={` py-2 px-4 text-center  rounded-sm font-black cursor-pointer ${
        className ? className : " bg-black text-white "
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
