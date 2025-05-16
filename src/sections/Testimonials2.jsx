"use client";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import { testimonialData } from "../constants/Testimonial";

import LogoStars from "../assets/Stars.svg";
import ArrowLeft from "../assets/arrow_back_24px.svg";
import ArrowRight from "../assets/arrow_forward_24px.svg";

const Testimonials2 = () => {
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	const breakpointsResponsive = {
		"@0.00": {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		"@0.75": {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		"@1.00": {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		"@1.50": {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	};

	const handleSwiperEvents = (swiper) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	return (
		<div className="w-full h-full space-y-5 relative lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col">
			<div className="w-full pt-2">
				<Swiper
					slidesPerView={1}
					spaceBetween={5}
					navigation={{
						nextEl: ".custom-next",
						prevEl: ".custom-prev",
					}}
					breakpoints={breakpointsResponsive}
					onSlideChange={(swiper) => handleSwiperEvents(swiper)}
					onInit={(swiper) => handleSwiperEvents(swiper)}
					modules={[Navigation]}
					className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
				>
					{testimonialData.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="w-full h-[300px] p-6 space-y-10 group bg-mustard rounded-xl ">
								<LogoStars />
								<p className="text-xs font-normal h-[50px]">{item.desc}</p>

								<div className="w-full flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img
											src={item.img}
											alt={item.name}
											className="w-8 h-8 object-center object-cover rounded-full border"
										/>

										<div className="space-y-1">
											<p className="text-xs font-medium">{item.name}</p>
											<p className="text-xs font-normal italic">
												{item.role} @ {item.company}
											</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="w-full flex items-center justify-end">
				{/* Custom buttons */}
				<div className="flex items-center ">
					<button
						className={`custom-prev  p-2 rounded-full z-10 ${
							isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
						}`}
						disabled={isBeginning}
					>
						<ArrowLeft size={20} />
					</button>
					<button
						className={`custom-next  p-2 rounded-full z-10 ${
							isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
						}`}
						disabled={isEnd}
					>
						<ArrowRight size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Testimonials2;
