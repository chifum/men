import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold30Teal800: "font-poppins font-semibold",
  txtPoppinsSemiBold25Teal800: "font-poppins font-semibold",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtAbhayaLibreSemiBold18: "font-abhayalibresemibold font-semibold",
  txtPoppinsSemiBold18Green300: "font-poppins font-semibold",
  txtAbhayaLibreSemiBold24: "font-abhayalibresemibold font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold15: "font-poppins font-semibold",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsBold60: "font-bold font-poppins",
  txtPoppinsMedium18Black900: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsSemiBold20Gray900: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold20WhiteA700: "font-poppins font-semibold",
  txtPoppinsRegular22: "font-normal font-poppins",
  txtPoppinsSemiBold25: "font-poppins font-semibold",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsMedium18Gray900: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtAbhayaLibreSemiBold15: "font-abhayalibresemibold font-semibold",
  txtPoppinsSemiBold25WhiteA700: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
