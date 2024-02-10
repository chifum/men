import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const FAQPage = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-start w-full">
            <Header className="bg-gradient2  flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="bg-gray-200 flex sm:flex-col flex-row font-poppins sm:gap-5 items-center justify-start mr-0.5 p-[29px] sm:px-5 w-full">
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
            <div className="font-poppins h-[717px] md:px-5 relative w-full">
              <div className="h-[717px] m-auto w-full">
                <Img
                  className="absolute h-[717px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_image5_2.png"
                  alt="imageFive"
                />
                <Button
                  className="absolute bottom-[36%] flex h-[41px] inset-x-[0] items-center justify-center mx-auto w-[41px]"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img src="images/img_group64.svg" alt="groupTwentySix" />
                </Button>
                <div className="absolute flex flex-col gap-[51px] inset-x-[0] justify-start mx-auto top-[30%]">
                  <Text
                    className="text-[15px] text-white-A700"
                    size="txtPoppinsSemiBold15"
                  >
                    Skypoint Support Services
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[18px] md:text-5xl text-6xl text-white-A700"
                    size="txtPoppinsBold60"
                  >
                    FAQ
                  </Text>
                </div>
                <div className="absolute bottom-[8%] flex flex-row gap-10 items-center justify-center right-[9%] w-[7%]">
                  <div className="border-[9px] border-solid border-white-A700 h-[30px] rounded-[50%] w-[30px]"></div>
                  <div className="bg-gray-600 flex flex-col h-[30px] items-center justify-start p-2.5 rounded-[50%] w-[30px]">
                    <div className="bg-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                  </div>
                </div>
                <Input
                  name="groupTwentyFour"
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
                FAQ
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[101px] mt-[51px] text-green-300 text-lg"
              size="txtPoppinsSemiBold18Green300"
            >
              Understanding
            </Text>
            <div className="flex flex-row font-poppins gap-2 items-center justify-start md:ml-[0] ml-[100px] md:px-5 w-[19%] md:w-full">
              <Line className="bg-teal-200_01 h-[30px] my-1.5 w-[3px]" />
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtPoppinsSemiBold30"
              >
                <span className="text-teal-800 font-poppins text-left font-semibold">
                  What is the{" "}
                </span>
                <span className="text-green-300 font-poppins text-left font-semibold">
                  NDIS
                </span>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[101px] mt-[21px] text-gray-900 text-lg w-[82%] sm:w-full"
              size="txtAbhayaLibreSemiBold18"
            >
              <span className="text-gray-900 font-poppins text-left font-medium">
                The National Disability Insurance Scheme (
              </span>
              <a
                href="javascript:"
                className="text-gray-900 font-poppins text-left font-medium underline"
              >
                NDIS
              </a>
              <span className="text-gray-900 font-poppins text-left font-medium">
                ) is an Australian government initiative that provides funding
                and support for people with disabilities. It is designed to help
                people with disabilities live an ordinary life and participate
                in the community. The{" "}
              </span>
              <a
                href="javascript:"
                className="text-gray-900 font-poppins text-left font-medium underline"
              >
                NDIS
              </a>
              <span className="text-gray-900 font-poppins text-left font-medium">
                {" "}
                provides individualized plans, funding for support services, and
                access to assistive technology. The scheme is funded through
                taxes and is administered by the National Disability Insurance
                Agency (NDIA).
              </span>
            </Text>
            <Text
              className="md:ml-[0] ml-[100px] mt-10 text-gray-900 text-lg"
              size="txtPoppinsMedium18Gray900"
            >
              <>
                At Skypoint Support Services, we would like to make a difference
                in the lives of those with disability and make life easier,
                fairer and get people involved and participating within their
                communities.
                <br />
                Our staff provide in home support for people with disabilities
                to help them lead more independent and fulfilling lives. Our
                staff are committed to providing compassionate and personalized
                care to our clients, giving them the tools and support they need
                to reach their goals.
              </>
            </Text>
            <Text
              className="md:ml-[0] ml-[648px] mt-[60px] text-green-300 text-lg"
              size="txtPoppinsSemiBold18Green300"
            >
              As A Participant
            </Text>
          </div>
        </div>
        <div className="sm:h-[3367px] h-[3763px] md:h-[8909px] md:ml-[0] ml-[92px] md:px-5 relative w-[81%] md:w-full">
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start outline outline-[1px] outline-blue_gray-400_02 pb-[322px] right-[0] rounded-[10px] w-[51%]">
            <div className="bg-green-A200 flex flex-row sm:gap-10 items-center justify-between p-[9px] rounded-tl-[10px] rounded-tr-[10px] w-full">
              <Text
                className="ml-2.5 mt-2 text-base text-white-A700"
                size="txtPoppinsSemiBold16"
              >
                What is Skypoint Solution Service ?
              </Text>
              <Img
                className="h-[11px] mr-[5px]"
                src="images/img_arrowdown_white_a700_11x14.svg"
                alt="arrowdown"
              />
            </div>
          </div>
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-[97%] md:w-full">
            <div className="flex h-[3367px] md:h-[8909px] justify-end mx-auto w-full">
              <div className="flex flex-col gap-[5px] h-full items-start justify-start mb-0.5 ml-auto mr-[439px] mt-auto w-[9%]">
                <Text
                  className="text-green-300 text-lg"
                  size="txtPoppinsSemiBold18Green300"
                >
                  Need Help
                </Text>
                <Line className="bg-teal-200_01 h-[30px] w-[3px]" />
              </div>
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-40">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Step 1
                    </Text>
                    <Text
                      className="mt-[588px] text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Step 2
                    </Text>
                    <Text
                      className="mt-[332px] text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Step 3
                    </Text>
                    <Text
                      className="mt-[575px] text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Step 4
                    </Text>
                    <Text
                      className="mt-[470px] text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Step 5
                    </Text>
                    <Text
                      className="mt-[335px] text-gray-900 text-xl"
                      size="txtPoppinsSemiBold20Gray900"
                    >
                      Step 6
                    </Text>
                  </div>
                  <div className="md:h-[3075px] h-[3100px] ml-1.5 md:ml-[0] md:mt-0 mt-[85px] relative w-[5%] md:w-full">
                    <Line className="absolute bg-teal-200_02 h-[3075px] inset-[0] justify-center m-auto w-[3px]" />
                    <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[2%] w-full">
                      <Button
                        className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                        shape="circle"
                        color="blue_gray_500"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_fluentemojipagewithcurl.svg"
                          alt="fluentemojipage"
                        />
                      </Button>
                      <Button
                        className="flex h-[50px] items-center justify-center md:ml-[0] ml-[3px] mt-[567px] rounded-[50%] w-[50px]"
                        shape="circle"
                        color="blue_gray_500"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_mdiarrowdecisionoutline.svg"
                          alt="mdiarrowdecisio"
                        />
                      </Button>
                      <Button
                        className="flex h-[50px] items-center justify-center md:ml-[0] ml-[3px] mt-[311px] rounded-[50%] w-[50px]"
                        shape="circle"
                        color="blue_gray_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_streamlinegrou.svg"
                          alt="streamlinegrou"
                        />
                      </Button>
                      <Button
                        className="flex h-[50px] items-center justify-center md:ml-[0] ml-[3px] mt-[557px] rounded-[50%] w-[50px]"
                        shape="circle"
                        color="blue_gray_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_mdiapprove.svg"
                          alt="mdiapprove"
                        />
                      </Button>
                      <Button
                        className="flex h-[50px] items-center justify-center md:ml-[0] ml-[3px] mt-[449px] rounded-[50%] w-[50px]"
                        shape="circle"
                        color="blue_gray_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_television.svg"
                          alt="television"
                        />
                      </Button>
                      <Button
                        className="flex h-[50px] items-center justify-center mt-[318px] rounded-[50%] w-[50px]"
                        shape="circle"
                        color="blue_gray_500"
                        size="md"
                        variant="fill"
                      >
                        <Img
                          className="h-6"
                          src="images/img_materialsymbol.svg"
                          alt="materialsymbol"
                        />
                      </Button>
                    </div>
                    <Button
                      className="absolute flex h-[30px] inset-x-[0] items-center justify-center mx-auto rounded-[50%] top-[0] w-[30px]"
                      shape="circle"
                      color="blue_gray_500"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_arrowdown_white_a700.svg"
                        alt="arrowdown_One"
                      />
                    </Button>
                    <Button
                      className="absolute bottom-[0] flex h-[30px] inset-x-[0] items-center justify-center mx-auto rounded-[50%] w-[30px]"
                      shape="circle"
                      color="blue_gray_500"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                    </Button>
                  </div>
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start md:ml-[0] ml-[27px] w-[87%] md:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                      size="txtPoppinsSemiBold30"
                    >
                      <span className="text-teal-800 font-poppins text-left font-semibold">
                        The NDIS{" "}
                      </span>
                      <span className="text-green-300 font-poppins text-left font-semibold">
                        Journey
                      </span>
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="bg-white-A700 flex flex-col gap-2 items-start justify-start p-[13px] w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-800"
                          size="txtPoppinsSemiBold25Teal800"
                        >
                          Access NDIS
                        </Text>
                        <Text
                          className="mb-[30px] md:ml-[0] ml-[18px] text-gray-900 text-lg"
                          size="txtPoppinsRegular18"
                        >
                          <span className="text-gray-900 font-poppins text-left font-normal">
                            <>
                              The first step is to apply for NDIS Access by
                              completing the Access Request Form [ARF). If you
                              are a person with disability aged 7 - 65 years who
                              would like to join the NDIS, you will need to meet
                              the access requirements. To find out more, visit
                              the NDIS access criteria page.
                              <br />
                              If you are applying on behalf of a child under 7
                              years, please Visit Help for children under 7 page
                              and then contact your local Early Childhood
                              Partner.
                              <br />
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-poppins text-left font-semibold">
                            <>
                              If you think you meet these requirements you can
                              apply in one of two ways:
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-poppins text-left font-normal">
                            <>
                              • You can make a Verbal Access Request by calling
                              NDIA on
                              <br />
                              1800 800 110
                              <br />• Fill out an Access Request Form [ARF, and
                              send it to us.
                              <br />
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-poppins text-left font-semibold">
                            <>
                              To apply for the NDIS you will need to provide:
                              <br />
                            </>
                          </span>
                          <span className="text-gray-900 font-poppins text-left font-normal">
                            <>
                              <br />• Completed Access Request Form
                              <br />• Information about your
                              <br />• Age
                              <br />• Residency
                              <br />• Disability
                            </>
                          </span>
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-4 justify-start mt-[50px] p-3 w-full">
                        <Text
                          className="md:ml-[0] ml-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-800"
                          size="txtPoppinsSemiBold25Teal800"
                        >
                          NDIS Decision
                        </Text>
                        <Text
                          className="mb-[42px] md:ml-[0] mx-[42px] text-gray-900 text-lg"
                          size="txtPoppinsMedium18Gray900"
                        >
                          <>
                            The NDIA will contact you to let you know their
                            decision on your application, this should be done
                            within 21 days. If you do not hear from them within
                            21 days of all information being lodged, you should
                            follow up for an update unless the NDIA has advised
                            you of the delay prior.
                            <br />
                            <br />
                            If your application gets accepted then you become an
                            NDIS
                            <br />
                            Participant, you can always ask for explanation if
                            your application was found to be ineligible. Review
                            on decision must be made within three months of
                            being notified of the decision
                          </>
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[21px] justify-start mt-[50px] p-[15px] w-full">
                        <Text
                          className="ml-3 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-800"
                          size="txtPoppinsSemiBold25Teal800"
                        >
                          Planning Meeting
                        </Text>
                        <Text
                          className="mb-[43px] md:ml-[0] mx-[27px] text-gray-900 text-lg"
                          size="txtPoppinsMedium18Gray900"
                        >
                          <>
                            Planning meeting
                            <br />
                            Planning meeting can be at your closest NDIA office
                            or over the phone, you may invite your family,
                            friends or support team to the planning meeting. The
                            NDIA Planner will ask you information on
                            <br />
                            <br />• Your Community and Mainstream Supports
                            <br />• Management of everyday activities
                            <br />• Your safety, including equipment,
                            accommodation or help to take care of yourself or
                            your home
                            <br />• Goals you want to pursue
                            <br />• How you want to manage your NDIS plan
                            <br />• Support you need to use your NDIS plan.
                            <br />
                            <br />
                            Complete booklet 2 - Planning. If you don&#39;t have
                            a physical copy, you can download a copy.
                            <br />
                            <br />
                            Find a quiet place to have the call where you can
                            focus.
                            <br />
                            Planning meetings can take over an hour depending on
                            your situation.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[50px] items-center justify-start mt-[50px] w-full">
                        <div className="bg-white-A700 flex flex-col gap-[21px] justify-start p-[15px] w-full">
                          <Text
                            className="ml-3 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-800"
                            size="txtPoppinsSemiBold25Teal800"
                          >
                            Plan Approval & Implementation{" "}
                          </Text>
                          <Text
                            className="mb-[34px] md:ml-[0] mx-[27px] text-gray-900 text-lg"
                            size="txtPoppinsMedium18Gray900"
                          >
                            <>
                              Plan Approval & Implementation
                              <br />
                              After the planning meeting, a NDIS planner will
                              contact you to outline the funded supports in your
                              NDIS Plan and the NDIS planner will send a copy of
                              the NDIS Plan to you. NDIS participants can choose
                              how to manage the NDIS funds they receive.
                              <br />
                              <br />• Self-Managed
                              <br />• Plan Managed
                              <br />• Agency Managed
                              <br />
                              <br />
                              One of our experienced Support Coordinators can
                              assist you to organise funded supports and
                              implement the approved
                              <br />
                              NDIS plan with you.
                            </>
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-col gap-[21px] justify-start p-[15px] w-full">
                          <Text
                            className="ml-3 md:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-teal-800"
                            size="txtPoppinsSemiBold25Teal800"
                          >
                            Service Booking{" "}
                          </Text>
                          <Text
                            className="mb-[29px] md:ml-[0] mx-[27px] text-gray-900 text-lg"
                            size="txtPoppinsMedium18Gray900"
                          >
                            <span className="text-gray-900 font-poppins text-left font-medium">
                              <>
                                Once you have identified the support and can
                                make contact with the service providers to
                                request services you need, one of our
                                experienced Support Coordinators can assist you
                                in this process.
                                <br />
                                <br />
                                Sign the agreement with your provider(s) that
                                sets out what supports will be provided and how
                                they will be delivered.
                                <br />
                                <br />
                              </>
                            </span>
                            <span className="text-gray-900 font-poppins text-left font-semibold">
                              You have choice and control in the delivery of
                              your supports.
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-6 justify-start mt-[50px] p-3 w-full">
                        <Text
                          className="md:ml-[0] ml-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-800"
                          size="txtPoppinsSemiBold25Teal800"
                        >
                          Plan Review
                        </Text>
                        <Text
                          className="mb-[23px] md:ml-[0] mx-[30px] text-gray-900 text-lg"
                          size="txtPoppinsMedium18Gray900"
                        >
                          <>
                            During your next scheduled plan review meeting, NDIS
                            will talk to you about the new flexible approaches
                            that they may take with you to review your NDIS
                            plan.
                            <br />
                            <br />
                            This may be a<br />
                            <br />• New NDIS plan with the same supports,
                            <br />• New NDIS plan with minor changes to your
                            current supports, or;
                            <br />• A full plan review.
                            <br />
                            <br />
                            If you are not satisfied with a decision made by the
                            NDIA, or if your circumstances have changed then you
                            are able to request a review of your plan outside of
                            the scheduled review.
                            <br />
                            <br />
                            There are 3 different types of reviews:
                            <br />
                            <br />• Internal review (Review of a Reviewable
                            Decision / RORD)
                            <br />• Request for plan review (Unscheduled Plan
                            Review)
                            <br />• Administrative Appeals Tribunal (AAT) review
                          </>
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[441px] mt-[151px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                        size="txtPoppinsSemiBold30"
                      >
                        <span className="text-teal-800 font-abhayalibreextrabold text-left font-extrabold">
                          Frequently Asked{" "}
                        </span>
                        <span className="text-green-300 font-abhayalibreextrabold text-left font-extrabold">
                          Question
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[426px] ml-[26px] mt-[-47.84px] object-cover w-[36%] z-[1]"
              src="images/img_image16.png"
              alt="imageSixteen"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-5 pr-0.5 w-full">
          <div className="flex flex-col items-end justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start md:px-5 w-[41%] md:w-full">
              <div className="bg-teal-800 flex flex-row sm:gap-10 items-center justify-between p-3 rounded-[10px] w-full">
                <Text
                  className="ml-[7px] mt-[3px] text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  How will I receive the plan ?
                </Text>
                <Img
                  className="h-3.5 mr-[3px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu"
                />
              </div>
              <div className="bg-teal-800 flex sm:flex-col flex-row sm:gap-10 items-center justify-between p-3 rounded-[10px] w-full">
                <Text
                  className="sm:ml-[0] ml-[7px] sm:mt-0 mt-[3px] text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  How do I know if I am eligible for NDIS Support services ?
                </Text>
                <Img
                  className="h-3.5 mr-[3px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu_One"
                />
              </div>
              <div className="bg-teal-800 flex sm:flex-col flex-row gap-7 items-center justify-between p-3 rounded-[10px] w-full">
                <Text
                  className="sm:ml-[0] ml-[7px] sm:mt-0 mt-0.5 text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  <>
                    How can I access Skypoint Support Service &#39; NDIS Support
                    services ?
                  </>
                </Text>
                <Img
                  className="h-3.5 mr-[3px]"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu_Two"
                />
              </div>
              <div className="bg-teal-800 flex flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[10px] w-full">
                <Text
                  className="ml-1.5 text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  Who is a Carer ?
                </Text>
                <Img
                  className="h-3.5"
                  src="images/img_overflowmenu.svg"
                  alt="overflowmenu_Three"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[35px] items-center justify-start mt-[35px] md:px-5 w-4/5 md:w-full">
              <Input
                name="frameFortySeven"
                placeholder="NDIS versus NDIA"
                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-[15px] text-left w-full"
                wrapClassName="rounded-[10px] w-full"
                color="teal_800"
                size="md"
                variant="fill"
              ></Input>
              <div className="bg-teal-800 flex flex-col items-start justify-end p-3 rounded-[10px]">
                <Text
                  className="md:ml-[0] ml-[7px] mt-[3px] text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  Are all you support workers trained and insured ?
                </Text>
              </div>
              <div className="bg-teal-800 flex flex-col items-start justify-start p-[13px] rounded-[10px]">
                <Text
                  className="ml-1.5 md:ml-[0] text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  Does the NDIS affect the DSP ?
                </Text>
              </div>
              <div className="bg-teal-800 flex flex-col items-start justify-start p-[13px] rounded-[10px]">
                <Text
                  className="ml-1.5 md:ml-[0] text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  Who is the NDIA?
                </Text>
              </div>
              <div className="bg-teal-800 flex flex-col items-start justify-end p-3 rounded-[10px]">
                <Text
                  className="md:ml-[0] ml-[7px] mt-[3px] text-[15px] text-white-A700"
                  size="txtPoppinsMedium15"
                >
                  Can I pick the services I want?
                </Text>
              </div>
            </div>
            <div className="h-[708px] mt-[70px] md:px-5 relative w-full">
              <div className="bg-white-A700 flex flex-col font-abhayalibresemibold gap-2 items-center justify-end mb-[-37px] mx-auto outline outline-[3px] outline-teal-200 p-2 rounded-[10px] w-[17%] z-[1]">
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
              <Footer
                className="bg-cover bg-no-repeat flex flex-col h-[540px] items-center justify-center mt-auto mx-auto w-full"
                style={{ backgroundImage: "url('images/img_group82.png')" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
