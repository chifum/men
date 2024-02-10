import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header from "components/Header";

const OURSERVICEPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
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
                src="images/img_image5_1.png"
                alt="imageFive"
              />
              <Button
                className="absolute bottom-[36%] flex h-[41px] inset-x-[0] items-center justify-center mx-auto w-[41px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_group64.svg" alt="groupFifty" />
              </Button>
              <div className="absolute flex flex-col gap-[45px] inset-x-[0] justify-start mx-auto top-[30%]">
                <Text
                  className="md:ml-[0] ml-[97px] text-[15px] text-white-A700"
                  size="txtPoppinsSemiBold15"
                >
                  Skypoint Support Services
                </Text>
                <Text
                  className="md:text-5xl text-6xl text-white-A700"
                  size="txtPoppinsBold60"
                >
                  Our Service
                </Text>
              </div>
              <div className="absolute bottom-[8%] flex flex-row gap-10 items-center justify-center right-[9%] w-[7%]">
                <div className="border-[9px] border-solid border-white-A700 h-[30px] rounded-[50%] w-[30px]"></div>
                <div className="bg-gray-600 flex flex-col h-[30px] items-center justify-start p-2.5 rounded-[50%] w-[30px]">
                  <div className="bg-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                </div>
              </div>
              <Input
                name="groupFortyEight"
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
              Services
            </Button>
          </div>
          <div className="md:gap-5 gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1315px] min-h-[auto] mt-[98px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-1 flex-col md:gap-10 gap-[190px] justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[310px] relative w-full">
                <div className="absolute h-[295px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  Disability Support Worker
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[143px] ml-8 md:ml-[0] mr-[230px] text-center text-lg"
                shape="round"
                color="green_300"
                size="sm"
                variant="fill"
              >
                Read More
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-[13px] items-center justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[310px] relative w-full">
                <div className="absolute h-[295px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_295x405.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  NDIS Support Coordinator
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-[86%] md:w-full">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPoppinsMedium14"
                >
                  SkyPoint Support Service is dedicated to providing exceptional
                  support coordination services to individuals with diverse
                  needs. Our Support Coordinators play a pivotal role in
                  ensuring that each person receives tailored assistance and has
                  access to the necessary resources to achieve their goals.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[143px] md:ml-[0] ml-[3px] text-center text-lg"
                  shape="round"
                  color="green_300"
                  size="sm"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-[13px] items-center justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[310px] relative w-full">
                <div className="absolute h-[295px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  Daily Living Skills
                </Text>
              </div>
              <div className="flex flex-col gap-[51px] items-start justify-start w-[87%] md:w-full">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPoppinsMedium14"
                >
                  At SkyPoint Support Service, we recognize the importance of
                  daily living skills in fostering independence and enhancing
                  the quality of life for individuals we serve. Our dedicated
                  team focuses on providing personalized assistance to develop
                  and strengthen these essential skills.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[143px] md:ml-[0] ml-[5px] text-center text-lg"
                  shape="round"
                  color="green_300"
                  size="sm"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col md:gap-10 gap-[189px] justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[311px] relative w-full">
                <div className="absolute h-[295px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_1.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  Employment Pathways
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[143px] ml-8 md:ml-[0] mr-[230px] text-center text-lg"
                shape="round"
                color="green_300"
                size="sm"
                variant="fill"
              >
                Read More
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[307px] relative w-full">
                <div className="absolute h-[295px] inset-[0] justify-center m-auto w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_2.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  Mental Health
                </Text>
              </div>
              <Text
                className="mt-[15px] text-gray-900 text-sm w-[91%] sm:w-full"
                size="txtPoppinsMedium14"
              >
                At SkyPoint Support Service, we understand the crucial link
                between mental health and overall well-being. Our dedicated
                mental health support services are designed to provide
                compassionate care, foster emotional resilience, and promote a
                positive and supportive environment for individuals facing
                diverse challenges.
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[143px] mt-[30px] text-center text-lg"
                shape="round"
                color="green_300"
                size="sm"
                variant="fill"
              >
                Read More
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-[13px] items-center justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[310px] relative w-full">
                <div className="absolute h-[295px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_3.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  Support Independent Living
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-[87%] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtPoppinsMedium14Black900"
                >
                  SkyPoint Support Service is dedicated to empowering
                  individuals to achieve and maintain independent living. Our
                  comprehensive support services are designed to enhance
                  autonomy, build life skills, and create a supportive
                  environment for those striving for greater self-sufficiency.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[143px] text-center text-lg"
                  shape="round"
                  color="green_300"
                  size="sm"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col md:gap-10 gap-[189px] justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[311px] relative w-full">
                <div className="absolute h-[295px] inset-x-[0] mx-auto top-[0] w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_4.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  NDIS Transport
                </Text>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[143px] ml-8 md:ml-[0] mr-[230px] text-center text-lg"
                shape="round"
                color="green_300"
                size="sm"
                variant="fill"
              >
                Read More
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="md:h-[295px] h-[307px] relative w-full">
                <div className="absolute h-[295px] inset-[0] justify-center m-auto w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_5.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-800 w-max"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  Short Term Accomodation
                </Text>
              </div>
              <Text
                className="mt-[15px] text-gray-900 text-sm w-[91%] sm:w-full"
                size="txtPoppinsMedium14"
              >
                SkyPoint Support Service is pleased to provide Short-Term
                Accommodation options tailored to meet the diverse needs of
                individuals seeking temporary housing solutions. Our commitment
                is to offer a safe, welcoming, and supportive environment during
                short-term stays.
              </Text>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[143px] mt-[51px] text-center text-lg"
                shape="round"
                color="green_300"
                size="sm"
                variant="fill"
              >
                Read More
              </Button>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-[15px] items-center justify-start outline outline-[1px] outline-teal-800 pb-[35px] rounded-[20px] w-full">
              <div className="flex flex-col relative w-full">
                <div className="h-[295px] mx-auto w-full">
                  <div className="bg-gradient5  h-[255px] mx-auto w-full"></div>
                  <Img
                    className="absolute h-[295px] inset-[0] justify-center m-auto object-cover rounded-[239px] w-full"
                    src="images/img_ellipse11_6.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Text
                  className="mt-[-25.85px] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-teal-800 z-[1]"
                  size="txtPoppinsSemiBold25Teal800"
                >
                  <>
                    Community Participation <br />
                    Program
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[34px] items-start justify-start w-[87%] md:w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtPoppinsMedium14Black900"
                >
                  SkyPoint Support Service is excited to introduce our Community
                  Participation Program, designed to promote social inclusion,
                  engagement, and enriching experiences for individuals seeking
                  to actively participate in their communities.
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[143px] text-center text-lg"
                  shape="round"
                  color="green_300"
                  size="sm"
                  variant="fill"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="md:h-[1311px] sm:h-[618px] h-[708px] ml-0.5 md:ml-[0] mt-[78px] md:px-5 relative w-full">
            <div className="absolute bg-white-A700 bottom-[0] flex md:h-[1233px] sm:h-[540px] h-[613px] inset-x-[0] justify-end mx-auto w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end mt-auto mx-auto p-[62px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group82.png')" }}
              >
                <div className="flex flex-col gap-[57px] items-center justify-start mt-4 w-[93%] md:w-full">
                  <div className="flex flex-col gap-[30px] justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[81%] md:w-full">
                      <Line className="bg-teal-200_01 h-[30px] md:h-[3px] md:mt-0 mt-0.5 w-[3px] md:w-full" />
                      <Line className="bg-teal-200_02 h-[30px] md:h-[3px] mb-0.5 md:ml-[0] ml-[515px] w-[3px] md:w-full" />
                      <Line className="bg-teal-200 h-[30px] md:h-[3px] md:ml-[0] ml-[450px] w-[3px] md:w-full" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[15px] w-[99%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-2 w-[39%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-end justify-start w-2/5 md:w-full">
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
                        <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start mt-6 w-[99%] md:w-full">
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
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-5 w-full">
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
                      </div>
                      <Img
                        className="h-[70px] md:h-auto md:ml-[0] ml-[52px] object-cover w-[70px]"
                        src="images/img_downloadremovebgpreview.png"
                        alt="downloadremoveb"
                      />
                      <Img
                        className="h-16 sm:h-auto ml-2.5 md:ml-[0] md:mt-0 mt-[9px] object-cover w-1/4 md:w-full"
                        src="images/img_image15.png"
                        alt="imageFifteen"
                      />
                      <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[61px] md:ml-[0] ml-[58px] md:mt-0 mt-[159px] w-[3px] md:w-full" />
                      <div className="flex flex-col md:gap-10 gap-20 items-start justify-start ml-2 md:ml-[0] md:mt-0 mt-[86px] w-1/5 md:w-full">
                        <div className="bg-gradient1  flex flex-row gap-2.5 items-center justify-start p-[7px] rounded-[7px] w-[68%] md:w-full">
                          <Img
                            className="h-[25px] ml-0.5 w-[25px]"
                            src="images/img_calendar.svg"
                            alt="calendar"
                          />
                          <Text
                            className="text-lg text-white-A700"
                            size="txtPoppinsMedium18"
                          >
                            Book Now
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[25px] items-center justify-between w-full">
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
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-200_03 flex flex-col items-start justify-end p-1 rounded-[15px]">
                    <Text
                      className="md:ml-[0] ml-[332px] text-gray-900 text-sm"
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
              <div className="absolute bg-white-A700 flex md:h-[1233px] sm:h-[540px] h-[613px] inset-[0] justify-end m-auto pt-[73px] w-full">
                <Img
                  className="h-[540px] mt-auto mx-auto object-cover"
                  src="images/img_group82.png"
                  alt="rectangleSix"
                />
                <div className="absolute bottom-[10%] flex flex-col inset-x-[0] justify-start mx-auto w-[92%]">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[89%] md:w-full">
                    <Line className="bg-teal-200_01 h-[30px] md:h-[3px] mb-0.5 md:mt-0 mt-2 w-[3px] md:w-full" />
                    <Text
                      className="mb-[3px] ml-3 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtPoppinsSemiBold25WhiteA700"
                    >
                      Contact Details
                    </Text>
                    <Line className="bg-teal-200_02 h-[30px] md:h-[3px] md:ml-[0] ml-[306px] md:mt-0 my-[5px] w-[3px] md:w-full" />
                    <Text
                      className="mb-0.5 ml-3 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtPoppinsSemiBold25WhiteA700"
                    >
                      We Love NDIS
                    </Text>
                    <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[3px] md:ml-[0] ml-[268px] md:mt-0 mt-[7px] w-[3px] md:w-full" />
                    <Text
                      className="ml-3 md:ml-[0] md:mt-0 mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtPoppinsSemiBold25WhiteA700"
                    >
                      Appointments
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between md:ml-[0] ml-[15px] mt-5 w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[15px] w-[36%] md:w-full">
                      <div className="flex flex-row gap-2.5 items-end justify-start w-2/5 md:w-full">
                        <Img
                          className="h-[25px] mb-0.5 mt-[5px] w-[25px]"
                          src="images/img_call.svg"
                          alt="call_Two"
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
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[61%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                        <Img
                          className="h-[70px] md:h-auto mb-[3px] md:mt-0 mt-[7px] object-cover w-[70px]"
                          src="images/img_downloadremovebgpreview.png"
                          alt="downloadremoveb_One"
                        />
                        <Img
                          className="md:flex-1 h-16 sm:h-auto ml-2.5 md:ml-[0] md:mt-0 mt-4 object-cover w-[39%] md:w-full"
                          src="images/img_image15.png"
                          alt="imageFifteen_One"
                        />
                        <Text
                          className="mb-2 md:ml-[0] ml-[73px] text-base text-white-A700"
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
                            We recognize the Traditional Owners of the property
                            on which we work and their ongoing custodianship and
                            relationship to the land, rivers, and communities.
                          </>
                        </Text>
                        <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[11px] md:ml-[0] ml-[69px] md:mt-0 mt-[73px] w-[3px] md:w-full" />
                        <div className="flex flex-col gap-[21px] items-start justify-start ml-2 md:ml-[0] w-[27%] md:w-full">
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
                            className="ml-1 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
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
                        alt="mdifacebook_One"
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
                        alt="bitwitter_One"
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
                        alt="volume_One"
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
                        alt="info_One"
                      />
                    </Button>
                  </div>
                  <Text
                    className="bg-teal-200_03 h-[31px] justify-center max-w-[1114px] md:max-w-full md:ml-[0] ml-[75px] mr-[131px] mt-[57px] sm:px-5 px-[35px] py-1 rounded-[15px] text-gray-900 text-sm w-full"
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
            <div className="absolute bg-white-A700 flex flex-col font-abhayalibresemibold gap-2 inset-x-[0] items-center justify-end mx-auto outline outline-[3px] outline-teal-200 p-2 rounded-[10px] top-[0] w-[17%]">
              <Img
                className="h-[143px] md:h-auto mt-0.5 object-cover rounded-[63px] w-[59%] sm:w-full"
                src="images/img_image1_143x126.png"
                alt="imageOne"
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
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start md:ml-[0] ml-[1280px] mt-[1397px] md:px-5 w-[25px]"
            style={{ backgroundImage: "url('images/img_info.svg')" }}
          >
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_info.svg"
              alt="info_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OURSERVICEPage;
