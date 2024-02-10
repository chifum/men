import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[20px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    light_blue_700: "bg-light_blue-700",
    blue_800: "bg-blue-800",
    teal_800: "bg-teal-800 text-white-A700",
    blue_gray_500: "bg-blue_gray-500",
    white_A700: "bg-white-A700 text-black-900",
    green_300: "bg-green-300 text-white-A700",
  },
  gradient: { teal_800_teal_800_00: "bg-gradient  text-white-A700" },
  outline: { white_A700_7e: "outline outline-[3px] outline-white-A700_7e" },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "gradient", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_700",
    "blue_800",
    "teal_800",
    "blue_gray_500",
    "white_A700",
    "green_300",
    "teal_800_teal_800_00",
    "white_A700_7e",
  ]),
};

export { Button };
