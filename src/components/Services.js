"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const Services = () => {
  const servicesList = [
    {
      title: "Advisory",
      description:
        "Get expert advice on structuring and growing your real estate investments for success. We help you make informed decisions and optimize your real estate investment portfolio.",
      imageUrl: "/advisory-icon-wwd.svg",
      alt: "Advisory",
    },
    {
      title: "Accounting",
      description:
        "Good accounting and bookkeeping are crucial for real estate investors and passive investors to accurately track the financial performance of their properties. Our specialized accounting services provide detailed financial reports and cash flow monitoring, helping you make informed decisions while saving valuable time.",
      imageUrl: "/accounting-icon-wwd.svg",
      alt: "Accounting",
    },
    {
      title: "Tax Preparation",
      description:
        "Ensure your tax documents are prepared and distributed on time, whether it’s for your individual tax needs or meeting the demands of your passive investors. Our timely and accurate tax preparation services are designed to keep you compliant and stress-free.",
      imageUrl: "/tax-icon-wwd.svg",
      alt: "Tax Preparation",
    },
    {
      title: "Tax Smart Investors",
      description:
        "Receive professional tax advice from our real estate experts at a fraction of the cost of one on one advisory services.",
      imageUrl: "/tax-smart-wwd.svg",
      alt: "Tax Smart Investors",
    },
  ];
  return (
    <>
      <section
        id="services"
        className="shadow-md bg-cover bg-center bg-no-repeat pb-3 bg-gray-100 bg-blend-multiply"
      >
        <div className="rounded-lg max-w-6xl w-full mx-auto pt-5">
          <h3 className="max-w-3xl text-left text-4xl mb-3 text-blue-500 font-semibold px-3">
            Personalized services backed by real estate expertise
          </h3>
          <p className="max-w-3xl text-center text-gray-600 mx-auto text-base mb-3 px-3">
            Our team works with you to develop proactive tax plans that reduce
            your taxes and provide back office support to help you grow.
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow"
              >
                <img
                  className="w-20 h-20 text-gray-800 mb-3"
                  src={service.imageUrl}
                  alt={service.alt}
                />

                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {service.title}
                </h5>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
