/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tanuJain from "./../assets/images/speakers/tanu_jain.jpg";

import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import Crousel from "./Crousel";
import { Link } from "react-router-dom";
function HomePageCarousal() {
	const [slides, setSlides] = useState(3);
	const [height, setHeight] = useState(100);
	const screenWidth = window.innerWidth;

	useEffect(() => {
		if (screenWidth < 768) {
			setSlides(1);
			setHeight(50);
		} else if (screenWidth < 713) {
			setSlides(1);
			setHeight(10);
		}
	}, [screenWidth]);

	// Create refs for navigation buttons
	const prevButtonRef = useRef(null);
	const nextButtonRef = useRef(null);

	return (
		<div className='max-h-[4000px] h-full pb-44'>
			<div className='bg-red-600 flex justify-center items-center md:h-32 h-14 w-full'>
				<h1 className='md:text-5xl text-2xl font-bold text-white px-8 tracking-widest font-serif'>
					SPEAKERS
				</h1>
			</div>

			{/* <Swiper
				className='flex items-center flex-row justify-center'
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={slides}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
				}}
				navigation={true}
				modules={[EffectCoverflow, Autoplay, Navigation]}
			> */}
			{/* tanu jain */}
			<SwiperSlide className='flex justify-center'>
				<div className='flex flex-col justify-center md:mb-10 pb-7 '>
					{/* <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600"></div> */}
					<div className='md:h-[450px]  md:w-[850px] z-10 flex md:gap-44 md:my-12 my-8 md:mx-0 mx-3  border-2 border-red-600 rounded-2xl relative'>
						<div className='md:w-[850px] flex md:gap-4 rounded-2xl bg-zinc-900 p-3 md:flex-row flex-col'>
							<div className='overflow-hidden rounded-xl md:w-1/2 md:none md:block hidden'>
								<div className='h-full w-full rounded-xl md:overflow-hidden img-bghover img-bg'></div>
							</div>

							<div className='md:hidden flex justify-center items-center rounded-xl'>
								<img
									src={tanuJain}
									alt='tanu'
									className='object-fill'
								/>
							</div>

							<div className='md:w-1/2 flex flex-col justify-between gap-3 p-3 '>
								<h1 className='md:text-3xl text-2xl font-semibold md:text-left text-center font-serif md:bg-zinc-900 bg-red-600 '>
									Tanu Jain
								</h1>
								<p className='md:text-left text-center mt-3'>
									Tanu Jain is a 2015 batch IAS officer. After
									becoming an IAS officer, she continued her
									social service works as well as motivational
									speaking sessions. Recently, Tanu Jain
									decided to quit her job as an IAS officer
									and become a full-time teacher.
								</p>
								<div className='flex z-20 gap-6 md:justify-between md:w-[50%] justify-center md:h-auto mt-3'>
									<a
										href='https://www.instagram.com/dr.tanujain/'
										rel='noreferrer '
										target='_blank'
									>
										<button className='Btn1 '>
											<span className='svgContainer1'>
												<svg
													fill='white'
													className='svgIcon'
													viewBox='0 0 448 512'
													height='1.5em'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
												</svg>
											</span>
											<span className='BG1' />
										</button>
									</a>

									{/* <button className='Btn2'>
											<span className='svgContainer2'>
												<svg
													fill='black'
													viewBox='0 0 496 512'
													height='1.6em'
												>
													<path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
												</svg>
											</span>
											<span className='BG2' />
										</button> */}
									<a
										href='https://www.linkedin.com/in/dr-tanu-jain-4aa28a131/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'
										rel='noreferrer '
										target='_blank'
									>
										<button className='Btn3'>
											<span className='svgContainer3'>
												<svg
													viewBox='0 0 448 512'
													height='1.6em'
													xmlns='http://www.w3.org/2000/svg'
													className='svgIcon'
													fill='white'
												>
													<path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
												</svg>
											</span>
											<span className='BG3' />
										</button>
									</a>

									<a
										href='https://twitter.com/DrTanuJain1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
										rel='noreferrer '
										target='_blank'
									>
										<button className='Btn4'>
											<span className='svgContainer4'>
												<svg
													viewBox='0 0 512 512'
													height='1.7em'
													xmlns='http://www.w3.org/2000/svg'
													className='svgIcon'
													fill='black'
												>
													<path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
												</svg>
											</span>
											<span className='BG4' />
										</button>
									</a>
								</div>

								<div className='md:hidden flex justify-evenly items-center text-red-600 font-semibold'>
									<h1 className='text-sm'>
										Session Time : 12 PM
									</h1>
									<h1 className='text-sm'>
										Date : 15 february
									</h1>
								</div>

								<h1 className='md:block hidden mt-2'>
									Session Time : 12 PM
								</h1>
								<h1 className='md:block hidden mt-2'>
									Date : 15 february
								</h1>

								<Link to='/tanujain'>
									<button className='button w-full mt-1 mb-3'>
										<span className='button_lg'>
											<span className='button_sl' />
											<span className='button_text'>
												More Information
											</span>
										</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</SwiperSlide>

			{/* sudhir kumar */}
			{/* <SwiperSlide className="flex justify-center">
          <div className="flex h-full flex-col justify-center">
            <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600"></div>
            <div className="h-[450px] w-[850px] z-10 flex gap-44 my-12 border-2 border-red-600 rounded-2xl">
              <div className="h-full w-[850px] flex gap-4 rounded-2xl bg-zinc-900 p-3">
              <div className="overflow-hidden rounded-xl w-1/2">
                <div className="h-full w-full rounded-xl overflow-hidden img-bghover img-bg2"></div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between gap-3 p-3 ">
                  <h1 className="text-3xl">Sudhir Kumar</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure perferendis pariatur fuga ipsum obcaecati vero ipsa,
                    error minima accusamus doloremque quos, nulla architecto!
                    Mollitia alias eos vel voluptate, deserunt eum!
                  </p>
                  <div className="flex z-20 gap-6">
                    <button className="Btn1 ">
                      <span className="svgContainer1">
                        <svg
                          fill="white"
                          className="svgIcon"
                          viewBox="0 0 448 512"
                          height="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                      <span className="BG1" />
                    </button>

                    <button className="Btn2">
                      <span className="svgContainer2">
                        <svg fill="black" viewBox="0 0 496 512" height="1.6em">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </span>
                      <span className="BG2" />
                    </button>

                    <button className="Btn3">
                      <span className="svgContainer3">
                        <svg
                          viewBox="0 0 448 512"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                      <span className="BG3" />
                    </button>

                    <button className="Btn4">
                      <span className="svgContainer4">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="black"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                      <span className="BG4" />
                    </button>
                  </div>
                  <h1>Session Time : 12pm</h1>
                  <h1>Date : 15 february</h1>
                  <Link to="/sudhir">
                    <button className="button w-full">
                      <span className="button_lg">
                        <span className="button_sl" />
                        <span className="button_text">More Information</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
			{/*  Sampada Saraf Gurjar */}
			{/* <SwiperSlide className="flex justify-center">
          <div className="flex h-full flex-col justify-center">
            <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600"></div>
            <div className="h-[450px] w-[850px] z-10 flex gap-44 my-12 border-2 border-red-600 rounded-2xl">
              <div className="h-full w-[850px] flex gap-4 rounded-2xl bg-zinc-900 p-3">
              <div className="overflow-hidden rounded-xl w-1/2">
                <div className="h-full w-full rounded-xl overflow-hidden img-bghover img-bg3"></div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between gap-3 p-3 ">
                  <h1 className="text-3xl"> Sampada Saraf Gurjar</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure perferendis pariatur fuga ipsum obcaecati vero ipsa,
                    error minima accusamus doloremque quos, nulla architecto!
                    Mollitia alias eos vel voluptate, deserunt eum!
                  </p>
                  <div className="flex z-20 gap-6">
                    <button className="Btn1 ">
                      <span className="svgContainer1">
                        <svg
                          fill="white"
                          className="svgIcon"
                          viewBox="0 0 448 512"
                          height="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                      <span className="BG1" />
                    </button>

                    <button className="Btn2">
                      <span className="svgContainer2">
                        <svg fill="black" viewBox="0 0 496 512" height="1.6em">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </span>
                      <span className="BG2" />
                    </button>

                    <button className="Btn3">
                      <span className="svgContainer3">
                        <svg
                          viewBox="0 0 448 512"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                      <span className="BG3" />
                    </button>

                    <button className="Btn4">
                      <span className="svgContainer4">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="black"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                      <span className="BG4" />
                    </button>
                  </div>
                  <h1>Session Time : 12pm</h1>
                  <h1>Date : 15 february</h1>
                  <Link to="/sampada">
                    <button className="button w-full">
                      <span className="button_lg">
                        <span className="button_sl" />
                        <span className="button_text">More Information</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="flex h-full flex-col justify-center">
            <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600"></div>
            <div className="h-[450px] w-[850px] z-10 flex gap-44 my-12 border-2 border-red-600 rounded-2xl">
              <div className="h-full w-[850px] flex gap-4 rounded-2xl bg-zinc-900 p-3">
              <div className="overflow-hidden rounded-xl w-1/2">
                <div className="h-full w-full rounded-xl overflow-hidden img-bghover img-bg4"></div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between gap-3 p-3 ">
                  <h1 className="text-3xl">Tanu Jain</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure perferendis pariatur fuga ipsum obcaecati vero ipsa,
                    error minima accusamus doloremque quos, nulla architecto!
                    Mollitia alias eos vel voluptate, deserunt eum!
                  </p>
                  <div className="flex z-20 gap-6">
                    <button className="Btn1 ">
                      <span className="svgContainer1">
                        <svg
                          fill="white"
                          className="svgIcon"
                          viewBox="0 0 448 512"
                          height="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                      <span className="BG1" />
                    </button>

                    <button className="Btn2">
                      <span className="svgContainer2">
                        <svg fill="black" viewBox="0 0 496 512" height="1.6em">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </span>
                      <span className="BG2" />
                    </button>

                    <button className="Btn3">
                      <span className="svgContainer3">
                        <svg
                          viewBox="0 0 448 512"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                      <span className="BG3" />
                    </button>

                    <button className="Btn4">
                      <span className="svgContainer4">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="black"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                      <span className="BG4" />
                    </button>
                  </div>
                  <h1>Session Time : 12pm</h1>
                  <h1>Date : 15 february</h1>
                  <Link to="/speaker">
                    <button className="button w-full">
                      <span className="button_lg">
                        <span className="button_sl" />
                        <span className="button_text">More Information</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="flex h-full flex-col justify-center">
            <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600"></div>
            <div className="h-[450px] w-[850px] z-10 flex gap-44 my-12 border-2 border-red-600 rounded-2xl">
              <div className="h-full w-[850px] flex gap-4 rounded-2xl bg-zinc-900 p-3">
              <div className="overflow-hidden rounded-xl w-1/2">
                <div className="h-full w-full rounded-xl overflow-hidden img-bghover img-bg5"></div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between gap-3 p-3 ">
                  <h1 className="text-3xl">Tanu Jain</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure perferendis pariatur fuga ipsum obcaecati vero ipsa,
                    error minima accusamus doloremque quos, nulla architecto!
                    Mollitia alias eos vel voluptate, deserunt eum!
                  </p>
                  <div className="flex z-20 gap-6">
                    <button className="Btn1 ">
                      <span className="svgContainer1">
                        <svg
                          fill="white"
                          className="svgIcon"
                          viewBox="0 0 448 512"
                          height="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                      <span className="BG1" />
                    </button>

                    <button className="Btn2">
                      <span className="svgContainer2">
                        <svg fill="black" viewBox="0 0 496 512" height="1.6em">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </span>
                      <span className="BG2" />
                    </button>

                    <button className="Btn3">
                      <span className="svgContainer3">
                        <svg
                          viewBox="0 0 448 512"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                      <span className="BG3" />
                    </button>

                    <button className="Btn4">
                      <span className="svgContainer4">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="black"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                      <span className="BG4" />
                    </button>
                  </div>
                  <h1>Session Time : 12pm</h1>
                  <h1>Date : 15 february</h1>
                  <Link to="/speaker">
                    <button className="button w-full">
                      <span className="button_lg">
                        <span className="button_sl" />
                        <span className="button_text">More Information</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center">
          <div className="flex h-full flex-col justify-center">
            <div className="h-[460px] rounded-full w-[850px] absolute z-0 bg-red-600"></div>
            <div className="h-[450px] w-[850px] z-10 flex gap-44 my-12 border-2 border-red-600 rounded-2xl">
              <div className="h-full w-[850px] flex gap-4 rounded-2xl bg-zinc-900 p-3">
              <div className="overflow-hidden rounded-xl w-1/2">
                <div className="h-full w-full rounded-xl overflow-hidden img-bghover img-bg6"></div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between gap-3 p-3 ">
                  <h1 className="text-3xl">Tanu Jain</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure perferendis pariatur fuga ipsum obcaecati vero ipsa,
                    error minima accusamus doloremque quos, nulla architecto!
                    Mollitia alias eos vel voluptate, deserunt eum!
                  </p>
                  <div className="flex z-20 gap-6">
                    <button className="Btn1 ">
                      <span className="svgContainer1">
                        <svg
                          fill="white"
                          className="svgIcon"
                          viewBox="0 0 448 512"
                          height="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </span>
                      <span className="BG1" />
                    </button>

                    <button className="Btn2">
                      <span className="svgContainer2">
                        <svg fill="black" viewBox="0 0 496 512" height="1.6em">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </span>
                      <span className="BG2" />
                    </button>

                    <button className="Btn3">
                      <span className="svgContainer3">
                        <svg
                          viewBox="0 0 448 512"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="white"
                        >
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                      <span className="BG3" />
                    </button>

                    <button className="Btn4">
                      <span className="svgContainer4">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          className="svgIcon"
                          fill="black"
                        >
                          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                      </span>
                      <span className="BG4" />
                    </button>
                  </div>
                  <h1>Session Time : 12pm</h1>
                  <h1>Date : 15 february</h1>
                  <Link to="/speaker">
                    <button className="button w-full">
                      <span className="button_lg">
                        <span className="button_sl" />
                        <span className="button_text">More Information</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
			{/* </Swiper> */}
		</div>
	);
}

export default HomePageCarousal;
