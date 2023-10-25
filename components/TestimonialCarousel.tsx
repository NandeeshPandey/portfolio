"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// types
import { Testimonial } from "@/types";

// components
import TestimonialCard from "./TestimonialCard";

interface Props {
  testimonials: Testimonial[];
}

function TestimonialCarousel({ testimonials }: Props) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto container overflow-x-hidden">
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialCarousel;
