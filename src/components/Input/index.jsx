import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    black_900: "border border-black-900 border-solid text-blue_gray-400_01",
  },
  fill: {
    teal_800: "bg-teal-800 text-white-A700",
    white_A700: "bg-white-A700 text-gray-600_01",
  },
  gradient: { teal_800_teal_800_00: "bg-gradient1  text-white-A700" },
};
const shapes = { round: "rounded-[26px]", square: "rounded-none" };
const sizes = {
  xs: "pb-[9px] pt-[7px] px-[7px]",
  sm: "pl-2.5 pr-[11px] py-[11px]",
  md: "pb-3 pt-[15px] px-3",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
  color: PropTypes.oneOf([
    "black_900",
    "teal_800",
    "white_A700",
    "teal_800_teal_800_00",
  ]),
};

export { Input };
