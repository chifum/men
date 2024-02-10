import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[25px] md:ml-[0] ml-[60px] md:mt-0 my-[19px] w-[25px]"
          src="images/img_call.svg"
          alt="call"
        />
        <Text
          className="ml-5 md:ml-[0] md:mt-0 my-4 text-white-A700 text-xl"
          size="txtPoppinsSemiBold20WhiteA700"
        >
          0452 370 284
        </Text>
        <Img
          className="h-[25px] md:ml-[0] ml-[63px] md:mt-0 my-[19px] w-[25px]"
          src="images/img_icbaselineemail.svg"
          alt="icbaselineemail"
        />
        <Text
          className="mb-3.5 ml-5 md:ml-[0] md:mt-0 mt-[18px] text-white-A700 text-xl"
          size="txtPoppinsSemiBold20WhiteA700"
        >
          info@skypointsupportservice.com.au
        </Text>
        <Line className="bg-white-A700 h-[38px] md:h-px md:ml-[0] ml-[435px] md:mt-0 my-3 md:w-full w-px" />
        <Button
          className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[183px] ml-3.5 md:ml-[0] mr-[77px] md:mt-0 my-[11px] text-center text-xl"
          shape="square"
          color="teal_800"
          size="xs"
          variant="fill"
        >
          Appointment
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
