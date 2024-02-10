import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer
        className={props.className}
        style={{ backgroundImage: "url('images/img_group82.png')" }}
      >
        <ul className="flex flex-col items-center justify-center mb-[62px] md:ml-[0] ml-[89px] mr-[37px] mt-[72px] w-[92%] md:w-full common-column-list">
          <li>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[151px]">
              <Line className="bg-teal-200_01 h-[30px] md:h-[3px] mb-0.5 md:mt-0 mt-[7px] w-[3px] md:w-full" />
              <Text
                className="mb-0.5 md:ml-[0] ml-[11px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtPoppinsSemiBold25WhiteA700"
              >
                Contact Details
              </Text>
              <Line className="bg-teal-200_02 h-[30px] md:h-[3px] md:ml-[0] ml-[307px] md:mt-0 my-1 w-[3px] md:w-full" />
              <Text
                className="mb-0.5 md:ml-[0] ml-[9px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtPoppinsSemiBold25WhiteA700"
              >
                We Love NDIS
              </Text>
              <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[3px] md:ml-[0] ml-[271px] md:mt-0 mt-1.5 w-[3px] md:w-full" />
              <Text
                className="ml-1.5 md:ml-[0] md:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtPoppinsSemiBold25WhiteA700"
              >
                Appointments
              </Text>
            </div>
          </li>
          <li>
            <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between md:ml-[0] ml-[15px] mt-5">
              <ul className="flex flex-col items-start justify-start md:mt-0 mt-[15px] w-[36%] md:w-full common-column-list">
                <li>
                  <div className="flex flex-row gap-2.5 items-end justify-start">
                    <Img
                      className="h-[25px] mb-0.5 mt-[5px] w-[25px]"
                      src="images/img_call.svg"
                      alt="call_One"
                    />
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtPoppinsSemiBold22"
                    >
                      0452 370 284
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start mt-6">
                    <Img
                      className="h-[25px] sm:mt-0 mt-[3px] w-[25px]"
                      src="images/img_icbaselineemail.svg"
                      alt="icbaselineemail_One"
                    />
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtPoppinsSemiBold22"
                    >
                      info@skypointsupportservice.com.au
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-5">
                    <Img
                      className="h-[25px] w-[25px]"
                      src="images/img_fluentbuilding16filled.svg"
                      alt="fluentbuildingOne"
                    />
                    <Text
                      className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                      size="txtPoppinsSemiBold22"
                    >
                      10 - 12 Anzac Avenue, Hillcrest QLD 4118
                    </Text>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-[13px] justify-start w-[61%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start ml-1.5 md:ml-[0] w-full">
                  <Img
                    className="h-[70px] md:h-auto mb-[3px] md:mt-0 mt-[7px] object-cover w-[70px]"
                    src="images/img_downloadremovebgpreview.png"
                    alt="downloadremoveb"
                  />
                  <Img
                    className="md:flex-1 h-16 sm:h-auto ml-2.5 md:ml-[0] md:mt-0 mt-4 object-cover w-[39%] md:w-full"
                    src="images/img_image15.png"
                    alt="imageFifteen"
                  />
                  <Text
                    className="mb-2 md:ml-[0] ml-[67px] text-base text-white-A700"
                    size="txtPoppinsMedium16"
                  >
                    <>
                      Let’s schedule a meeting
                      <br />
                      Give us an opportunity to explain how we can help you to
                      be independent.
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[78%] md:w-full">
                  <Text
                    className="md:mt-0 mt-[7px] text-base text-white-A700 w-[61%] sm:w-full"
                    size="txtPoppinsMedium16"
                  >
                    <>
                      We recognize the Traditional Owners of the property on
                      which we work and their ongoing custodianship and
                      relationship to the land, rivers, and communities.
                    </>
                  </Text>
                  <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[11px] md:ml-[0] ml-[75px] md:mt-0 mt-[73px] w-[3px] md:w-full" />
                  <div className="flex flex-col gap-[21px] items-start justify-start ml-1.5 md:ml-[0] w-[26%] md:w-full">
                    <Input
                      name="frameEight"
                      placeholder="Book Now"
                      className="font-medium font-poppins leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg w-full"
                      wrapClassName="flex rounded-[7px] w-full"
                      prefix={
                        <Img
                          className="mt-0.5 mb-auto h-[25px] mr-2.5"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      }
                      size="xs"
                      variant="gradient"
                      color="teal_800_teal_800_00"
                    ></Input>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtPoppinsSemiBold25WhiteA700"
                    >
                      Share On
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-end md:ml-[0] ml-[982px] mr-[97px] mt-2.5">
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="white_A700_7e"
                size="sm"
                variant="outline"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_mdifacebook.svg"
                  alt="mdifacebook"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="white_A700_7e"
                size="sm"
                variant="outline"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_bitwitter.svg"
                  alt="bitwitter"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="white_A700_7e"
                size="sm"
                variant="outline"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_volume.svg"
                  alt="volume"
                />
              </Button>
              <Button
                className="flex h-10 items-center justify-center w-10"
                shape="circle"
                color="white_A700_7e"
                size="sm"
                variant="outline"
              >
                <Img
                  className="h-[25px]"
                  src="images/img_info.svg"
                  alt="info"
                />
              </Button>
            </div>
          </li>
          <li>
            <Text
              className="bg-teal-200_03 h-[31px] justify-center md:ml-[0] ml-[73px] mr-[127px] mt-[57px] sm:px-5 px-[35px] py-1 rounded-[15px] text-gray-900 text-sm"
              size="txtPoppinsMedium14"
            >
              <span className="text-gray-900 font-poppins text-left font-medium">
                Copyright © 2023{" "}
              </span>
              <span className="text-gray-900 font-poppins text-left font-normal">
                Skypoint Support Service
              </span>
              <span className="text-gray-900 font-poppins text-left font-medium">
                {" "}
                |
              </span>
            </Text>
          </li>
        </ul>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
