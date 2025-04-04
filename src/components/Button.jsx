import React from "react";

const Button = ({ disabled, onClick, type, className, children }) => {
  return (
    <button
      className={`${className} bg-black py-2 px-4 text-center text-white rounded-sm font-black cursor-pointer`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
