import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Header from "components/Header";

const ContactusPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-gradient2  flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="bg-gray-200 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[29px] sm:px-5 w-full">
              <Img
                className="sm:flex-1 h-[97px] md:h-auto sm:ml-[0] ml-[71px] object-cover w-[18%] sm:w-full"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <Text
                className="sm:ml-[0] ml-[100px] text-teal-800 text-xl"
                size="txtPoppinsSemiBold20"
              >
                Home
              </Text>
              <Text
                className="sm:ml-[0] ml-[60px] text-teal-800 text-xl"
                size="txtPoppinsSemiBold20"
              >
                Our Organization
              </Text>
              <Text
                className="sm:ml-[0] ml-[60px] text-teal-800 text-xl"
                size="txtPoppinsSemiBold20"
              >
                Our Service
              </Text>
              <a
                href="javascript:"
                className="sm:ml-[0] ml-[60px] text-teal-800 text-xl"
              >
                <Text size="txtPoppinsSemiBold20">Contact Us</Text>
              </a>
              <Text
                className="sm:ml-[0] ml-[60px] text-teal-800 text-xl"
                size="txtPoppinsSemiBold20"
              >
                FAQ
              </Text>
            </div>
            <div className="h-[717px] md:px-5 relative w-full">
              <div className="h-[717px] m-auto w-full">
                <Img
                  className="absolute h-[717px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image5_717x1440.png"
                  alt="imageFive"
                />
                <Button
                  className="absolute bottom-[36%] flex h-[41px] inset-x-[0] items-center justify-center mx-auto w-[41px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img src="images/img_group64.svg" alt="groupEightySix" />
                </Button>
                <div className="absolute flex flex-col gap-12 inset-x-[0] justify-start mx-auto top-[30%]">
                  <Text
                    className="md:ml-[0] ml-[89px] text-[15px] text-white-A700"
                    size="txtPoppinsSemiBold15"
                  >
                    Skypoint Support Services
                  </Text>
                  <Text
                    className="md:text-5xl text-6xl text-white-A700"
                    size="txtPoppinsBold60"
                  >
                    Contact Us
                  </Text>
                </div>
                <div className="absolute bottom-[8%] flex flex-row gap-10 items-center justify-center right-[9%] w-[7%]">
                  <div className="border-[9px] border-solid border-white-A700 h-[30px] rounded-[50%] w-[30px]"></div>
                  <div className="bg-gray-600 flex flex-col h-[30px] items-center justify-start p-2.5 rounded-[50%] w-[30px]">
                    <div className="bg-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                  </div>
                </div>
                <Input
                  name="groupEightyFour"
                  placeholder="Home"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-600_01 text-base text-left w-full"
                  wrapClassName="bottom-[35%] flex left-[39%] mb-[252px] ml-[559px] w-[13%]"
                  prefix={
                    <Img
                      className="mt-auto mb-0.5 h-[22px] mr-2.5 bottom-[0] right-[1%] absolute"
                      src="images/img_home.svg"
                      alt="home"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="absolute bottom-[35%] cursor-pointer font-medium leading-[normal] min-w-[183px] right-[38%] rounded-[26px] text-base text-center"
                size="lg"
                variant="gradient"
                color="teal_800_teal_800_00"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="flex h-[69px] md:h-[94px] justify-end md:ml-[0] ml-[100px] mt-[51px] md:px-5 relative w-[19%]">
          <Line className="bg-teal-200_01 h-[30px] mb-[5px] mt-auto w-[3px]" />
          <div className="absolute md:h-[43px] h-[69px] inset-[0] justify-center m-auto w-full">
            <Text
              className="absolute left-[0] text-green-300 text-lg top-[0]"
              size="txtPoppinsSemiBold18Green300"
            >
              Enquire Now
            </Text>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-max"
              size="txtPoppinsSemiBold30"
            >
              <span className="text-teal-800 font-poppins text-left font-semibold">
                Connect
              </span>
              <span className="text-black-900 font-poppins text-left font-semibold">
                {" "}
              </span>
              <span className="text-green-300 font-poppins text-left font-semibold">
                With Us
              </span>
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[41px] w-full">
          <div className="flex flex-col gap-[7px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1009px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[52%] md:w-full">
                <div className="bg-white-A700 flex flex-row gap-[15px] items-center justify-start md:pr-10 sm:pr-5 pr-[246px] rounded-[20px] w-full">
                  <div className="bg-teal-200 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[42%]">
                    <Img
                      className="h-10 w-10"
                      src="images/img_call.svg"
                      alt="call_One"
                    />
                  </div>
                  <Text
                    className="text-[22px] sm:text-lg text-teal-800 md:text-xl"
                    size="txtPoppinsMedium22"
                  >
                    0452 370 284
                  </Text>
                </div>
                <div className="h-[87px] relative w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-start justify-start my-auto rounded-[20px] w-[96%]">
                    <div className="bg-teal-800 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[23%] md:w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_call.svg"
                        alt="call_Two"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-row gap-[15px] h-full inset-[0] items-center justify-center m-auto md:pr-10 sm:pr-5 pr-[246px] rounded-[20px] w-full">
                    <div className="bg-teal-200 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-[42%]">
                      <Img
                        className="h-10 w-10"
                        src="images/img_entypochat.svg"
                        alt="entypochat"
                      />
                    </div>
                    <Text
                      className="text-[22px] sm:text-lg text-teal-800 md:text-xl"
                      size="txtPoppinsMedium22"
                    >
                      0452 370 284
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-[15px] items-center justify-start md:pr-10 sm:pr-5 pr-[55px] rounded-[20px] w-full">
                  <div className="bg-teal-200 flex sm:flex-1 flex-col items-center justify-end p-[23px] sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-1/4 sm:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_icbaselineemail.svg"
                      alt="icbaselineemail_One"
                    />
                  </div>
                  <Text
                    className="sm:flex-1 text-[22px] sm:text-lg text-teal-800 md:text-xl w-[73%] sm:w-full"
                    size="txtPoppinsMedium22"
                  >
                    info@skypointsupportservice.com.au
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col font-abhayalibresemibold gap-[22px] h-[275px] items-center justify-end mb-9 md:mt-0 mt-5 outline outline-[3px] outline-teal-200 p-[7px] rounded-[20px] shadow-bs w-[275px]">
                <Img
                  className="h-[180px] md:h-auto object-cover rounded-[83px] w-[64%] sm:w-full"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-center text-green-900 sm:text-xl"
                  size="txtAbhayaLibreSemiBold24"
                >
                  <>
                    Skypoint Support
                    <br /> Services
                  </>
                </Text>
              </div>
            </div>
            <div className="sm:h-[1705px] h-[1778px] md:h-[2557px] md:px-5 relative w-full">
              <div className="flex flex-col gap-9 h-full items-center justify-start m-auto w-full">
                <div className="h-[1129px] md:h-[1296px] relative w-full">
                  <div className="h-[1129px] md:h-[1296px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-[31px] justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[100px] w-[65%] md:w-full">
                          <div className="bg-white-A700 flex sm:flex-col flex-row gap-[15px] items-center justify-start md:mt-0 mt-[27px] md:pr-10 sm:pr-5 pr-[60px] rounded-[20px]">
                            <div className="bg-teal-200 flex flex-col items-center justify-end p-[23px] sm:px-5 rounded-bl-[20px] rounded-tl-[20px] w-1/4 sm:w-full">
                              <Img
                                className="h-10 w-10"
                                src="images/img_fluentbuilding16filled.svg"
                                alt="fluentbuildingOne"
                              />
                            </div>
                            <Text
                              className="text-[22px] sm:text-lg text-teal-800 md:text-xl w-[72%] sm:w-full"
                              size="txtPoppinsMedium22"
                            >
                              10 - 12 Anzac Avenue, Hillcrest QLD 4118
                            </Text>
                          </div>
                          <Text
                            className="bg-clip-text bg-gradient3  sm:text-[21px] md:text-[23px] text-[25px] text-transparent"
                            size="txtPoppinsSemiBold25"
                          >
                            Share On
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[984px] items-start justify-start p-[41px] md:px-10 sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group91.svg')",
                          }}
                        >
                          <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-start justify-start mb-[266px] mt-[167px] w-[57%] md:w-full">
                            <Img
                              className="h-[469px] sm:h-auto object-cover rounded-[84px] w-[64%] md:w-full"
                              src="images/img_rectangle8.png"
                              alt="rectangleEight"
                            />
                            <div className="flex flex-col items-start justify-start md:mt-0 mt-[35px] w-[26%] md:w-full">
                              <Text
                                className="text-green-300 text-lg"
                                size="txtPoppinsSemiBold18Green300"
                              >
                                Get in Touch
                              </Text>
                              <div className="flex flex-row gap-[7px] items-start justify-start mt-1 w-full">
                                <Line className="bg-teal-200_01 h-[30px] mb-[11px] mt-[3px] w-[3px]" />
                                <Text
                                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                                  size="txtPoppinsSemiBold30"
                                >
                                  <span className="text-teal-800 font-poppins text-left font-semibold">
                                    Message{" "}
                                  </span>
                                  <span className="text-green-300 font-poppins text-left font-semibold">
                                    Us
                                  </span>
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[729px] object-cover right-[0] top-[1%]"
                      src="images/img_ellipse13.png"
                      alt="ellipseThirteen"
                    />
                  </div>
                  <div className="absolute bg-white-A700 bottom-[10%] flex flex-col items-center justify-start outline outline-[2px] outline-teal-800 p-[23px] sm:px-5 right-[15%] rounded-[20px] w-[42%]">
                    <div className="flex flex-col items-start justify-start mb-[5px] w-[99%] md:w-full">
                      <Text
                        className="text-blue_gray-400_01 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Full Name
                      </Text>
                      <Input
                        name="frameThirtyOne"
                        placeholder="Full Name"
                        className="leading-[normal] p-0 placeholder:text-blue_gray-400_01 text-left text-sm w-full"
                        wrapClassName="mt-[5px] w-full"
                        type="text"
                        shape="square"
                        color="black_900"
                        size="sm"
                        variant="outline"
                      ></Input>
                      <div className="flex flex-row items-center justify-between mt-3 w-[61%] md:w-full">
                        <Text
                          className="text-blue_gray-400_01 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Mobile/Landline
                        </Text>
                        <Text
                          className="text-blue_gray-400_01 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Email
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between mt-[5px] w-full">
                        <Input
                          name="frameThirtyTwo"
                          placeholder="Mobile/Landline"
                          className="!placeholder:text-blue_gray-400_01 !text-blue_gray-400_01 leading-[normal] p-0 text-left text-sm w-full"
                          wrapClassName="border border-black-900 border-solid sm:flex-1 sm:w-full"
                          type="number"
                          shape="square"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        ></Input>
                        <Input
                          name="frameThirtyFour"
                          placeholder="Email"
                          className="!placeholder:text-blue_gray-400_01 !text-blue_gray-400_01 leading-[normal] p-0 text-left text-sm w-full"
                          wrapClassName="border border-black-900 border-solid sm:flex-1 sm:w-full"
                          type="email"
                          shape="square"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <Text
                        className="mt-3 text-blue_gray-400_01 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Services
                      </Text>
                      <Input
                        name="frameThirtyThree"
                        placeholder="Services"
                        className="!placeholder:text-blue_gray-400_01 !text-blue_gray-400_01 leading-[normal] p-0 text-left text-sm w-full"
                        wrapClassName="border border-black-900 border-solid flex mt-[5px] w-full"
                        suffix={
                          <Img
                            className="mt-px mb-auto h-5 ml-[35px]"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="square"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                      <Text
                        className="mt-3.5 text-blue_gray-400_01 text-sm"
                        size="txtPoppinsRegular14"
                      >
                        Message
                      </Text>
                      <TextArea
                        className="bg-white-A700 border border-black-900 border-solid leading-[normal] mt-[3px] pb-[35px] pl-2.5 sm:pr-5 pr-[35px] pt-[15px] placeholder:text-blue_gray-400_01 text-blue_gray-400_01 text-left text-sm w-full"
                        name="frameThirtyFive"
                        placeholder="Message"
                      ></TextArea>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[89px] mt-[31px] rounded-[5px] text-base text-center"
                        color="teal_800"
                        size="sm"
                        variant="fill"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:h-[1225px] sm:h-[540px] h-[613px] justify-end pt-[73px] relative w-full">
                  <Img
                    className="h-[540px] mt-auto mx-auto object-cover"
                    src="images/img_group82.png"
                    alt="rectangleSix"
                  />
                  <div className="absolute bottom-[10%] flex flex-col inset-x-[0] justify-start mx-auto w-[92%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
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
                    <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between md:ml-[0] ml-[15px] mt-5 w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[15px] w-[36%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-end justify-start w-2/5 md:w-full">
                          <Img
                            className="h-[25px] mb-0.5 mt-[5px] w-[25px]"
                            src="images/img_call.svg"
                            alt="call_Three"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtPoppinsSemiBold22"
                          >
                            0452 370 284
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start mt-6 w-[99%] md:w-full">
                          <Img
                            className="h-[25px] sm:mt-0 mt-[3px] w-[25px]"
                            src="images/img_icbaselineemail.svg"
                            alt="icbaselineemail_Two"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtPoppinsSemiBold22"
                          >
                            info@skypointsupportservice.com.au
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-5 w-full">
                          <Img
                            className="h-[25px] w-[25px]"
                            src="images/img_fluentbuilding16filled.svg"
                            alt="fluentbuildingOne_One"
                          />
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtPoppinsSemiBold22"
                          >
                            10 - 12 Anzac Avenue, Hillcrest QLD 4118
                          </Text>
                        </div>
                      </div>
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
                              Give us an opportunity to explain how we can help
                              you to be independent.
                            </>
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[78%] md:w-full">
                          <Text
                            className="md:mt-0 mt-[7px] text-base text-white-A700 w-[61%] sm:w-full"
                            size="txtPoppinsMedium16"
                          >
                            <>
                              We recognize the Traditional Owners of the
                              property on which we work and their ongoing
                              custodianship and relationship to the land,
                              rivers, and communities.
                            </>
                          </Text>
                          <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[11px] md:ml-[0] ml-[75px] md:mt-0 mt-[73px] w-[3px] md:w-full" />
                          <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[5px] w-[26%] md:w-full">
                            <Input
                              name="frameEight"
                              placeholder="Book Now"
                              className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-left text-lg w-full"
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
                    <div className="flex flex-row gap-[25px] items-center justify-end md:ml-[0] ml-[982px] mt-2.5 w-[18%] md:w-full">
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
                    <Text
                      className="bg-teal-200_03 h-[31px] justify-center max-w-[1114px] md:max-w-full md:ml-[0] ml-[72px] mr-32 mt-[57px] sm:px-5 px-[35px] py-1 rounded-[15px] text-gray-900 text-sm w-full"
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
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-abhayalibresemibold md:gap-10 gap-[966px] justify-start right-[13%] top-[3%] w-[46%]">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[157px] w-[77%] md:w-full">
                  <div className="bg-gray-200 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-2.5 w-full">
                    <Img
                      className="h-8"
                      src="images/img_volume_green_a700.svg"
                      alt="volume_One"
                    />
                    <Button
                      className="flex h-[30px] items-center justify-center ml-12 sm:ml-[0] sm:mt-0 my-0.5 rounded-[50%] w-[30px]"
                      shape="circle"
                      color="light_blue_700"
                      size="sm"
                      variant="fill"
                    >
                      <Img src="images/img_save.svg" alt="save" />
                    </Button>
                    <Button
                      className="flex h-[30px] items-center justify-center ml-12 sm:ml-[0] sm:mt-0 my-0.5 rounded-[7px] w-[30px]"
                      color="blue_800"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </Button>
                    <Img
                      className="h-8 ml-12 sm:ml-[0]"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                    <Img
                      className="h-[26px] ml-12 sm:ml-[0]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-[26px] ml-12 sm:ml-[0]"
                      src="images/img_info_pink_a400.svg"
                      alt="info_One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2 items-center justify-end mr-[424px] outline outline-[3px] outline-teal-200 p-2 rounded-[10px] w-[36%] md:w-full">
                  <Img
                    className="h-[143px] md:h-auto mt-0.5 object-cover rounded-[63px] w-[59%] sm:w-full"
                    src="images/img_image1_143x126.png"
                    alt="imageOne_One"
                  />
                  <Text
                    className="text-[15px] text-center text-green-900"
                    size="txtAbhayaLibreSemiBold15"
                  >
                    <>
                      Skypoint Support
                      <br /> Services
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactusPage;
