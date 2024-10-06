"use client";
import { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sterling White",
      img: "/sterling-white.jpg",
      text: "I have worked with Jason Malabute since fall of 2020. In that time, I observed his endless dedication to learning and desire to achieve the goals put in front of him. I particularly remember the countless times of his eagerness to find answers and not being afraid to ask questions to better understand the industry.",
      job: "Mentor & Multi-Family Investor",
    },
    {
      name: "Nick Giuliouni",
      img: "/nick-giuliouni.jpg",
      text: "Jason is an incredibly dedicated investor who is willing to swing big. He is always willing to lend a helping hand to those around him. If I were putting a bet on someone to make it big - I would bet on Jason.",
      job: "Real Estate Investor",
    },
    {
      name: "Fae Bautista",
      img: "/fae-bautista.jpg",
      text: "Jason Malabute is a huge inspiration to me. We have been working together for years. Jason is relentless, always striving to be his best version, very diligent and smart, despite the first impression of him. Jason communicates very well, and his language is real estate.",
      job: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <SectionHeading title="Testimonials" />

      <div className="relative w-full max-w-6xl mx-auto h-full p-4 bg-gray-200">
        <div className="overflow-hidden relative px-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-gray-100 rounded-lg shadow md:flex-row md:max-w-xl mx-auto my-auto h-60 md:h-auto w-full ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <img
                className="hidden sm:block object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={testimonial.img}
                alt={testimonial.name}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {testimonial.name}
                </h5>
                <p className="mb-3 text-sm md:text-base text-gray-700">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
