import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ABOUTUSPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
                src="images/img_image5_717x1442.png"
                alt="imageFive"
              />
              <Button
                className="absolute bottom-[36%] flex h-[41px] inset-x-[0] items-center justify-center mx-auto w-[41px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_group64.svg" alt="groupTwelve" />
              </Button>
              <div className="absolute flex flex-col gap-[47px] inset-x-[0] justify-start mx-auto top-[30%]">
                <Text
                  className="md:ml-[0] ml-[58px] text-[15px] text-white-A700"
                  size="txtPoppinsSemiBold15"
                >
                  Skypoint Support Services
                </Text>
                <Text
                  className="md:text-5xl text-6xl text-white-A700"
                  size="txtPoppinsBold60"
                >
                  About Us
                </Text>
              </div>
              <div className="absolute bottom-[8%] flex flex-row gap-10 items-center justify-center right-[9%] w-[7%]">
                <div className="border-[9px] border-solid border-white-A700 h-[30px] rounded-[50%] w-[30px]"></div>
                <div className="bg-gray-600 flex flex-col h-[30px] items-center justify-start p-2.5 rounded-[50%] w-[30px]">
                  <div className="bg-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                </div>
              </div>
              <Input
                name="groupTen"
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
              About Us
            </Button>
          </div>
          <Text
            className="md:ml-[0] ml-[149px] mt-[90px] text-center text-gray-900 text-lg w-[79%] sm:w-full"
            size="txtPoppinsMedium18Gray900"
          >
            Skypoint Support Service, based in Queensland (QLD), is a dedicated
            disability services provider. Our mission is to provide
            individualized, high-quality NDIS support services that are tailored
            to match the abilities, interests, and aspirations of each
            participant. We are committed to empowering our participants,
            enabling them to take charge of their own choices when it comes to
            the support and lifestyle they wish to pursue.
          </Text>
          <div className="h-[643px] md:h-[707px] ml-1 md:ml-[0] mt-16 md:px-5 relative w-full">
            <div className="h-[643px] m-auto w-full">
              <div className="flex m-auto w-full">
                <div className="flex h-[643px] justify-end my-auto w-[68%] md:w-full">
                  <Img
                    className="h-[15px] mb-[282px] ml-[177px] mt-auto w-[15px]"
                    src="images/img_arrowdown_white_a700.svg"
                    alt="arrowdown"
                  />
                  <div className="absolute h-[643px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="h-[643px] m-auto object-cover w-full"
                      src="images/img_rectangle10.png"
                      alt="rectangleTen"
                    />
                    <Img
                      className="absolute h-[30px] right-[32%] top-[12%]"
                      src="images/img_megaphone.svg"
                      alt="megaphone"
                    />
                  </div>
                </div>
                <Img
                  className="h-[643px] ml-[-212px] my-auto z-[1]"
                  src="images/img_rectangle11.svg"
                  alt="rectangleEleven"
                />
              </div>
              <div className="absolute bg-white-A700 flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-[34px] sm:px-5 right-[17%] rounded-[15px] w-[38%]">
                <div className="flex flex-col gap-[11px] items-start justify-start mb-[15px] w-[95%] md:w-full">
                  <div className="flex flex-row gap-[17px] items-start justify-start md:ml-[0] ml-[5px] w-[67%] md:w-full">
                    <Line className="bg-teal-200_01 h-[30px] mb-2.5 mt-1 w-[3px]" />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtPoppinsSemiBold30"
                    >
                      <span className="text-teal-800 font-poppins text-left font-semibold">
                        Customer{" "}
                      </span>
                      <span className="text-green-300 font-poppins text-left font-semibold">
                        Support
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="text-gray-900 text-lg w-full"
                    size="txtPoppinsRegular18"
                  >
                    Our dedicated and enthusiastic team is committed to helping
                    participants unlock their full potential and embrace life to
                    the fullest. We support participants in engaging with their
                    communities, building meaningful connections, maintaining
                    physical well-being, gaining new skills and knowledge, and
                    enjoying themselves in ways that align with their personal
                    preferences.
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-[23px] items-center justify-start left-[43%] top-[36%] w-[5%]">
              <Img
                className="h-12 w-12"
                src="images/img_healthiconsic.svg"
                alt="healthiconsic"
              />
              <Button
                className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                shape="circle"
                color="green_300"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-[30px]"
                  src="images/img_mdiemailcertified.svg"
                  alt="mdiemailcertifi"
                />
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-3 items-start justify-start md:ml-[0] ml-[127px] mt-[65px] md:px-5 w-[32%] md:w-full">
            <Line className="bg-teal-200_01 h-[30px] sm:h-[3px] mb-2.5 sm:mt-0 mt-1 w-[3px] sm:w-full" />
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtPoppinsSemiBold30"
            >
              <span className="text-teal-800 font-poppins text-left font-semibold">
                Person - Centered{" "}
              </span>
              <span className="text-green-300 font-poppins text-left font-semibold">
                Approach
              </span>
            </Text>
          </div>
          <div className="bg-white-A700 flex flex-col font-abhayalibresemibold gap-[22px] h-[275px] items-center justify-end md:ml-[0] ml-[989px] mt-[3px] outline outline-[3px] outline-teal-200 p-[7px] md:px-5 rounded-[20px] shadow-bs w-[275px]">
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
          <div className="font-poppins h-[637px] ml-1 md:ml-[0] mt-[62px] md:px-5 relative w-full">
            <div className="h-[100px] md:h-[57px] mb-[-43px] mx-auto w-[100px] z-[1]">
              <div className="bg-white-A700 h-[100px] my-auto rounded-[50px] w-[96%]"></div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[100px]">
                <Img
                  className="h-[100px] md:h-auto object-cover w-[100px]"
                  src="images/img_downloadremovebgpreview_100x100.png"
                  alt="downloadremoveb"
                />
              </div>
            </div>
            <div className="bg-gradient4  flex flex-col items-center justify-start mt-auto mx-auto p-[81px] md:px-10 sm:px-5 w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start pb-[31px] sm:pr-5 pr-[31px] rounded-[20px] w-[89%] md:w-full">
                <div className="flex flex-col justify-start w-[99%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="md:flex-1 h-[333px] sm:h-auto object-cover rounded-[163px] w-[37%] md:w-full"
                      src="images/img_image18.png"
                      alt="imageEighteen"
                    />
                    <Text
                      className="text-black-900 text-lg"
                      size="txtPoppinsMedium18Black900"
                    >
                      <span className="text-black-900 font-poppins text-left font-normal">
                        <>
                          Skypoint Solution Service is committed to delivering
                          the highest quality of care and support services to
                          all our participants. We are dedicated to creating an
                          inclusive and supportive environment where you can
                          thrive, grow, and achieve your goals.
                          <br />
                          <br />
                          Whether you’re a participant seeking reliable NDIS
                          support or a family member exploring options, we
                          invite you to join us on this journey of empowerment
                          and transformation. Contact us today to learn more
                          about how
                        </>
                      </span>
                      <span className="text-black-900 font-poppins text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-black-900 font-poppins text-left font-semibold">
                        Skypoint Solution Service can be your trusted partner in
                        your NDIS journey.
                      </span>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[45px] items-center justify-end md:ml-[0] ml-[405px] mt-0.5 w-[38%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[183px] rounded-[26px] text-center text-sm"
                      color="teal_800"
                      size="lg"
                      variant="fill"
                    >
                      Contact Now
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[183px] rounded-[26px] text-center text-sm"
                      color="green_300"
                      size="lg"
                      variant="fill"
                    >
                      View Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[43px] items-start justify-start max-w-[1248px] mt-[31px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[243px] items-center justify-start md:mt-0 mt-[82px] w-[49%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                <div className="flex flex-row gap-[17px] items-center justify-start w-[34%] md:w-full">
                  <Line className="bg-teal-200_01 h-[30px] mb-[5px] mt-[9px] w-[3px]" />
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtPoppinsSemiBold30"
                  >
                    <span className="text-teal-800 font-poppins text-left font-semibold">
                      Our{" "}
                    </span>
                    <span className="text-green-300 font-poppins text-left font-semibold">
                      Mission
                    </span>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start mt-3 p-[30px] sm:px-5 rounded-[15px] w-full">
                  <Text
                    className="mb-[33px] text-black-900 text-lg w-[99%] sm:w-full"
                    size="txtPoppinsMedium18Black900"
                  >
                    <>
                      Our driving force at the core of our organization is to
                      create a positive impact on the people and communities we
                      serve. We&#39;re fuelled by a shared purpose that inspires
                      everything we do, from our company values to our visionary
                      goals.
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 h-[623px] md:h-[877px] mt-[254px] relative w-[95%] sm:w-full">
                  <Img
                    className="h-[577px] mx-auto object-cover w-full"
                    src="images/img_image19.png"
                    alt="imageNineteen"
                  />
                  <Img
                    className="absolute h-[623px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image20.png"
                    alt="imageTwenty"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-start w-[98%] md:w-full">
                <div className="flex flex-row gap-[17px] items-center justify-start w-[32%] md:w-full">
                  <Line className="bg-teal-200_01 h-[30px] my-[7px] w-[3px]" />
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtPoppinsSemiBold30"
                  >
                    <span className="text-teal-800 font-poppins text-left font-semibold">
                      Our{" "}
                    </span>
                    <span className="text-green-300 font-poppins text-left font-semibold">
                      Values
                    </span>
                  </Text>
                </div>
                <div className="flex h-[201px] justify-end relative w-full">
                  <Img
                    className="h-[15px] mb-[77px] ml-[94px] mt-auto w-[15px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                  <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[30px] sm:px-5 rounded-[15px] w-full">
                    <Text
                      className="mb-[33px] text-black-900 text-lg w-[99%] sm:w-full"
                      size="txtPoppinsMedium18Black900"
                    >
                      <>
                        &quot;At the heart of our approach to all relationships
                        lies creativity, respect, courage, and responsiveness.
                        We hold the trust placed in us in high regard, and
                        strive to exceed expectations by delivering reliable
                        support
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full">
              <div className="bg-white-A700 h-[577px] relative w-[95%] sm:w-full">
                <Img
                  className="h-[577px] m-auto object-cover w-full"
                  src="images/img_image19.png"
                  alt="imageNineteen_One"
                />
                <Img
                  className="absolute h-[577px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image20_577x559.png"
                  alt="imageTwenty_One"
                />
              </div>
              <div className="flex flex-row gap-[17px] items-center justify-start mt-[143px] w-[30%] md:w-full">
                <Line className="bg-teal-200_01 h-[30px] mb-[5px] mt-[9px] w-[3px]" />
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsSemiBold30"
                >
                  <span className="text-teal-800 font-poppins text-left font-semibold">
                    Our{" "}
                  </span>
                  <span className="text-green-300 font-poppins text-left font-semibold">
                    Vision
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-3 p-[30px] sm:px-5 rounded-[15px] w-full">
                <Text
                  className="mb-[33px] text-black-900 text-lg w-[99%] sm:w-full"
                  size="txtPoppinsMedium18Black900"
                >
                  Once upon a time, there was a group of passionate individuals
                  who came together with one goal in mind - to help people
                  living with disabilities lead a life of dignity and
                  independence.
                </Text>
              </div>
              <div className="bg-white-A700 h-[623px] md:h-[938px] mt-[315px] relative w-[95%] sm:w-full">
                <Img
                  className="h-[577px] mx-auto object-cover w-full"
                  src="images/img_image19.png"
                  alt="imageNineteen_Two"
                />
                <div className="absolute h-[623px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[623px] m-auto object-cover w-full"
                    src="images/img_image20.png"
                    alt="imageTwenty_Two"
                  />
                  <Img
                    className="absolute h-[623px] inset-[0] justify-center m-auto object-cover w-full"
                    src="images/img_image21.png"
                    alt="imageTwentyOne"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins h-[708px] mt-[59px] md:px-5 relative w-full">
            <div className="bg-white-A700 flex flex-col font-abhayalibresemibold gap-2 items-center justify-end mb-[-37px] mx-auto outline outline-[3px] outline-teal-200 p-2 rounded-[10px] w-[17%] z-[1]">
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
            <Footer
              className="bg-cover bg-no-repeat flex flex-col h-[540px] items-center justify-center mt-auto mx-auto w-full"
              style={{ backgroundImage: "url('images/img_group82.png')" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ABOUTUSPage;
