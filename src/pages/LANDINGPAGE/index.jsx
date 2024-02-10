import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const LANDINGPAGEPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-poppins items-center justify-start mx-auto w-full">
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
            <Img
              className="absolute h-[717px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_image5.png"
              alt="imageFive"
            />
            <div className="absolute bottom-[36%] flex flex-row gap-[17px] inset-x-[0] items-center justify-center mx-auto w-[11%]">
              <Text
                className="text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
                Refer to Us
              </Text>
              <Button
                className="flex h-[41px] items-center justify-center w-[41px]"
                shape="round"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_group64.svg" alt="groupSixtyFour" />
              </Button>
            </div>
            <div className="absolute flex flex-col gap-[53px] inset-x-[0] justify-start mx-auto top-[30%]">
              <Text
                className="md:ml-[0] ml-[309px] text-[15px] text-white-A700"
                size="txtPoppinsSemiBold15"
              >
                Skypoint Support Services
              </Text>
              <Text
                className="md:text-5xl text-6xl text-white-A700"
                size="txtPoppinsBold60"
              >
                Best Support Cordination
              </Text>
            </div>
            <div className="absolute bottom-[8%] flex flex-row gap-10 items-center justify-center right-[9%] w-[7%]">
              <div className="border-[9px] border-solid border-white-A700 h-[30px] rounded-[50%] w-[30px]"></div>
              <div className="bg-gray-600 flex flex-col h-[30px] items-center justify-start p-2.5 rounded-[50%] w-[30px]">
                <div className="bg-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
              </div>
            </div>
            <div className="absolute bottom-[35%] h-[52px] inset-x-[0] mx-auto outline outline-[2px] outline-light_green-A400 rounded-[26px] w-[13%]"></div>
          </div>
          <Text
            className="mt-[60px] text-lg text-teal-700_b2"
            size="txtPoppinsSemiBold18"
          >
            We Love NDIS
          </Text>
          <Text
            className="mt-[13px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
            size="txtPoppinsSemiBold30"
          >
            <span className="text-teal-800 font-poppins text-left font-semibold">
              Services
            </span>
            <span className="text-black-900 font-poppins text-left font-semibold">
              {" "}
            </span>
            <span className="text-green-300 font-poppins text-left font-semibold">
              We Offer
            </span>
          </Text>
          <div className="md:gap-5 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1301px] min-h-[auto] mt-[66px] mx-auto md:px-5 w-full">
            <div className="h-[480px] relative w-full">
              <Img
                className="h-[480px] m-auto object-cover w-full"
                src="images/img_image6.png"
                alt="imageSix"
              />
              <Button
                className="absolute bottom-[6%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[158px] mx-auto rounded-[7px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Details
              </Button>
            </div>
            <div className="h-[480px] relative w-full">
              <Img
                className="h-[480px] m-auto object-cover w-full"
                src="images/img_image7.png"
                alt="imageSeven"
              />
              <Button
                className="absolute bottom-[6%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[158px] mx-auto rounded-[7px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Details
              </Button>
            </div>
            <div className="h-[480px] relative w-full">
              <Img
                className="h-[480px] m-auto object-cover w-full"
                src="images/img_image8.png"
                alt="imageEight"
              />
              <Button
                className="absolute bottom-[5%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[158px] mx-auto rounded-[7px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Details
              </Button>
            </div>
            <div className="h-[480px] relative w-full">
              <Img
                className="h-[480px] m-auto object-cover w-full"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <Button
                className="absolute bottom-[5%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[158px] mx-auto rounded-[7px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Details
              </Button>
            </div>
            <div className="h-[480px] relative w-full">
              <Img
                className="h-[480px] m-auto object-cover w-full"
                src="images/img_image11.png"
                alt="imageEleven"
              />
              <Button
                className="absolute bottom-[5%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[158px] mx-auto rounded-[7px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Details
              </Button>
            </div>
            <div className="h-[480px] relative w-full">
              <Img
                className="h-[480px] m-auto object-cover w-full"
                src="images/img_image12.png"
                alt="imageTwelve"
              />
              <Button
                className="absolute bottom-[5%] cursor-pointer font-medium inset-x-[0] leading-[normal] min-w-[158px] mx-auto rounded-[7px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                View Details
              </Button>
            </div>
          </div>
          <div className="h-[595px] md:h-[679px] max-w-[1386px] mt-[84px] mx-auto md:px-5 relative w-full">
            <div className="absolute h-[595px] inset-y-[0] my-auto right-[0] w-[69%] md:w-full">
              <div className="absolute bg-green-300 h-[587px] inset-y-[0] my-auto right-[0] w-[81%]"></div>
              <div className="absolute h-[595px] inset-[0] justify-center m-auto w-[99%] md:w-full">
                <div className="bg-white-A700 h-[595px] m-auto rounded-[466px] w-full"></div>
                <div className="absolute bottom-[9%] flex flex-col items-start justify-start right-[11%] w-3/5">
                  <div className="flex flex-row gap-4 items-center justify-start w-2/5 md:w-full">
                    <Line className="bg-green-300 h-[71px] my-[9px] w-1" />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-teal-800"
                      size="txtPoppinsSemiBold30Teal800"
                    >
                      <>
                        Community
                        <br />
                        Participation
                      </>
                    </Text>
                  </div>
                  <Text
                    className="mt-4 text-[22px] sm:text-lg text-teal-800 md:text-xl w-full"
                    size="txtPoppinsRegular22"
                  >
                    we recognize the significance of Community Participation as
                    a vital Core Support for individuals with disabilities. Our
                    aim is to assist you in achieving your goals related to
                    enhanced community interaction and participation. Here’s how
                    our Community Participation program can benefit you
                  </Text>
                  <div className="bg-green-300 flex flex-row gap-1.5 items-center justify-start ml-2 md:ml-[0] mt-[43px] p-2 rounded-[7px] w-[29%] md:w-full">
                    <div className="bg-white-A700 flex flex-col h-[25px] items-start justify-start p-1.5 rounded-[12px] w-[25px]">
                      <Img
                        className="h-px my-1.5"
                        src="images/img_group64.svg"
                        alt="arrowTwo"
                      />
                    </div>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtPoppinsMedium18">Read More</Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[587px] inset-y-[0] left-[0] my-auto object-cover rounded-[20px] w-1/2"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
          </div>
          <Text
            className="mt-[43px] text-lg text-teal-700_b2"
            size="txtPoppinsSemiBold18"
          >
            Unique About Us
          </Text>
          <Text
            className="mt-4 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
            size="txtPoppinsSemiBold30"
          >
            <span className="text-teal-800 font-poppins text-left font-semibold">
              Why Choose
            </span>
            <span className="text-black-900 font-poppins text-left font-semibold">
              {" "}
            </span>
            <span className="text-green-300 font-poppins text-left font-semibold">
              Us
            </span>
          </Text>
          <Text
            className="mt-9 text-gray-900 text-lg"
            size="txtPoppinsMedium18Gray900"
          >
            <span className="text-gray-900 font-poppins text-left font-bold">
              Personalized Support Plans
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                :At Skypoint Support Service, we value each person&#39;s
                uniqueness. For this reason, we collaborate closely with you to
                develop specialized assistance programs that complement your
                unique requirements and goals. We view your journey with us as a
                partnership in which you provide the direction.
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-bold">
              Experienced Team:
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              {" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                Skypoint Support Service benefits from the vast knowledge and
                experience of our seasoned management team. They offer strong
                leadership and direction to guarantee the provision of
                high-quality services and have a thorough awareness of the
                difficulties of the disability sector. Under their direction, we
                constantly attempt to enhance our procedures, keep abreast of
                developments in the field, and provide a welcoming and inclusive
                work environment for our employees.
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                We are not just service providers – we are your advocates, here
                to navigate the NDIS landscape alongside you.
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-bold">
              Holistic Care:{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                Skypoint Support Service prioritizes holistic care that takes
                into account all facets of your well-being in addition to
                attending to your urgent needs. Our goal is to provide you with
                the knowledge and abilities required to attain sustained
                development and self-sufficiency.
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-bold">
              Rigorous Recruitment:
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              {" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                At Skypoint Support Service, we recognize the significance of an
                adept and empathetic support team. Hence, we maintain a
                stringent recruitment process to guarantee the selection of the
                most qualified and devoted professionals. Our thorough screening
                and assessment protocols emphasize experience, qualifications,
                and unwavering dedication to person-centered care. Rest assured,
                our support workers are not only highly skilled but also deeply
                enthusiastic about making a positive impact in the lives of
                individuals with disabilities.
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-bold">
              Community Integration:{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                At Skypoint Support Service we are passionate advocates for the
                strength of community bonds. We are dedicated to actively
                encouraging and facilitating your integration into local
                communities. We believe that through this process, we can help
                foster a profound sense of belonging, allowing you to build
                meaningful social connections that enrich your life. Our
                commitment to community integration extends beyond providing
                care and support; it’s about helping you become an integral part
                of the communities where you live and thrive
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-bold">
              Exceptional Person-Centred Approach:
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              {" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              At{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              Skypoint Support Service
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              <>
                s, we firmly believe in placing the individual at the center of
                everything we do. Our person-centred approach ensures that each
                person we support receives personalised care tailored to their
                unique needs, goals, and preferences. We value open
                communication, active participation, and collaboration,
                empowering individuals to have control over their own lives and
                the services they receive.
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              <>
                <br />
              </>
            </span>
            <span className="text-gray-900 font-poppins text-left font-bold">
              Rigorous Recruitment:{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              At{" "}
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              Skypoint Support Service
            </span>
            <span className="text-gray-900 font-poppins text-left font-normal">
              , we recognize the significance of an adept and empathetic support
              team. Hence, we maintain a stringent recruitment process to
              guarantee the selection of the most qualified and devoted
              professionals. Our thorough screening and assessment protocols
              emphasize experience, qualifications, and unwavering dedication to
              person-centered care. Rest assured, our support workers are not
              only highly skilled but also deeply enthusiastic about making a
              positive impact in the lives of individuals with disabilities
            </span>
            <span className="text-gray-900 font-poppins text-left font-medium">
              .
            </span>
          </Text>
          <div className="md:h-[782px] h-[880px] max-w-[1428px] mt-[60px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <Img
                className="h-[722px] mx-auto object-cover w-full"
                src="images/img_image13.png"
                alt="imageThirteen"
              />
              <div className="bg-white-A700 flex flex-col gap-[17px] items-center justify-end mt-[-83px] mx-auto p-3.5 rounded-[20px] z-[1]">
                <Text
                  className="mt-[122px] text-lg text-teal-700_b2"
                  size="txtPoppinsSemiBold18"
                >
                  Your Trusted Partners
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtPoppinsSemiBold30"
                >
                  <span className="text-teal-800 font-poppins text-left font-semibold">
                    Experience{" "}
                  </span>
                  <span className="text-green-300 font-poppins text-left font-semibold">
                    & Expertise
                  </span>
                </Text>
              </div>
            </div>
            <div className="absolute bg-white-A700 bottom-[14%] flex flex-col inset-x-[0] items-center justify-end mx-auto outline outline-[3px] outline-teal-200 p-3 rounded-[10px] w-[17%]">
              <Img
                className="h-[180px] md:h-auto object-cover rounded-[83px] w-[81%]"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </div>
          </div>
          <Text
            className="mt-[109px] text-gray-900 text-lg"
            size="txtPoppinsRegular18"
          >
            <>
              Our dedicated staff at Skypoint Support Service is committed to
              offering innovative solutions to help you overcome any challenges
              that may stand in the way of achieving your goals. We understand
              that everyone’s journey is unique, and we tailor our services to
              address your specific needs and aspirations. Whether it’s finding
              creative approaches to accessibility or harnessing the power of
              technology, we’re here to pave the way for your success.
              <br />
              <br />
              At Skypoint Support Service, we place a strong emphasis on
              innovation and technology in our Care and Support services. We
              continuously strive to provide you with cutting-edge solutions
              that enhance your quality of life and independence. By staying at
              the forefront of advancements in disability support services, we
              ensure that you have access to the best tools and resources to
              help you reach your full potential and lead a fulfilling life.
            </>
          </Text>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[252px] mt-[34px] rounded-[7px]"
            leftIcon={
              <div className="h-[25px] mr-3 pt-[13px] pb-[11px] pl-1.5 pr-[7px] w-[25px] bg-white-A700 rounded-[12px] my-px flex justify-center items-center">
                <Img src="images/img_group64.svg" alt="Arrow 2" />
              </div>
            }
            color="green_300"
            size="sm"
            variant="fill"
          >
            <div className="font-medium leading-[normal] text-left text-lg">
              Know more about us
            </div>
          </Button>
          <footer className="bg-white-A700 flex items-center justify-center mt-[38px] md:px-5 w-full">
            <div className="flex sm:h-[540px] h-[613px] md:h-[960px] justify-end relative w-full">
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
                      <ul className="flex flex-col items-start justify-start md:mt-0 mt-2 w-[39%] md:w-full common-column-list">
                        <li>
                          <a href="javascript:">
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
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
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
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
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
                          </a>
                        </li>
                      </ul>
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
              <div className="absolute bg-white-A700 flex sm:h-[540px] h-[613px] md:h-[822px] inset-[0] justify-end m-auto pt-[73px] w-full">
                <Img
                  className="h-[540px] mt-auto mx-auto object-cover"
                  src="images/img_group82.png"
                  alt="rectangleSix"
                />
                <ul className="absolute bottom-[10%] flex flex-col inset-x-[0] justify-start mx-auto w-[85%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                        <Line className="bg-teal-200_01 h-[30px] md:h-[3px] md:mt-0 mt-0.5 w-[3px] md:w-full" />
                        <Line className="bg-teal-200_02 h-[30px] md:h-[3px] mb-0.5 md:ml-[0] ml-[515px] w-[3px] md:w-full" />
                        <Line className="bg-teal-200 h-[30px] md:h-[3px] md:ml-[0] ml-[450px] w-[3px] md:w-full" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[15px] mt-[30px]">
                        <ul className="flex flex-col items-start justify-start md:mt-0 mt-2 w-[39%] md:w-full common-column-list">
                          <li>
                            <a href="javascript:">
                              <div className="flex flex-row gap-2.5 items-end justify-start">
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
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start mt-6">
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
                            </a>
                          </li>
                          <li>
                            <a href="javascript:">
                              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start mt-5">
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
                            </a>
                          </li>
                        </ul>
                        <Img
                          className="h-[70px] md:h-auto md:ml-[0] ml-[52px] object-cover w-[70px]"
                          src="images/img_downloadremovebgpreview.png"
                          alt="downloadremoveb_One"
                        />
                        <Img
                          className="h-16 sm:h-auto ml-2.5 md:ml-[0] md:mt-0 mt-[9px] object-cover w-1/4 md:w-full"
                          src="images/img_image15.png"
                          alt="imageFifteen_One"
                        />
                        <Line className="bg-teal-200 h-[30px] md:h-[3px] mb-[61px] md:ml-[0] ml-[58px] md:mt-0 mt-[159px] w-[3px] md:w-full" />
                        <div className="flex flex-col md:gap-10 gap-20 items-start justify-start ml-2 md:ml-[0] md:mt-0 mt-[86px] w-1/5 md:w-full">
                          <div className="bg-gradient1  flex flex-row gap-2.5 items-center justify-start p-[7px] rounded-[7px] w-[68%] md:w-full">
                            <Img
                              className="h-[25px] ml-0.5 w-[25px]"
                              src="images/img_calendar.svg"
                              alt="calendar_One"
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
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="bg-teal-200_03 h-[31px] justify-center md:ml-[0] ml-[75px] mr-7 mt-[57px] sm:px-5 px-[35px] py-1 rounded-[15px] text-gray-900 text-sm"
                    >
                      <Text size="txtPoppinsMedium14">
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
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LANDINGPAGEPage;
