"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleAccordion = (value) => {
    setExpandedCard(expandedCard === value ? null : value);
  };
  const servicesList = [
    {
      title: "Accounting",
      description:
        "Good accounting and bookkeeping are crucial for real estate investors and passive investors to accurately track the financial performance of their properties. Our specialized accounting services provide detailed financial reports and cash flow monitoring, helping you make informed decisions while saving valuable time.",
      imageUrl: "/accounting.jpg",
      alt: "",
    },
    {
      title: "Tax Planning",
      description:
        "We stay in regular contact with you throughout the year to plan and maximize your tax savings. Our focus is on high-net-worth individuals and high-income earners involved in real estate, ensuring you get the best strategies for your financial success.",
      imageUrl: "/planning.jpg",
      alt: "",
    },
    {
      title: "Tax Preparation",
      description:
        "Ensure your tax documents are prepared and distributed on time, whether it’s for your individual tax needs or meeting the demands of your passive investors. Our timely and accurate tax preparation services are designed to keep you compliant and stress-free.",
      imageUrl: "/preparation.jpg",
      alt: "",
    },
    {
      title: "Payroll Services",
      description:
        "Manage payroll efficiently and stay compliant with state and federal payroll tax laws.",
      imageUrl: "/payroll.jpg",
      alt: "",
    },
    {
      title: "Advisory",
      description:
        "Get expert advice on structuring and growing your real estate investments for success. We help you make informed decisions and optimize your real estate investment portfolio.",
      imageUrl: "/advisory.jpg",
      alt: "",
    },
    {
      title: "Tax Smart Investors",
      description:
        "Receive professional tax advice from our real estate experts at a fraction of the cost of one on one advisory services.",
      imageUrl: "/investors.jpg",
      alt: "",
    },
  ];
  return (
    <>
      <SectionHeading title="Our Services" />
      <section
        id="services"
        className="shadow-md bg-cover bg-center bg-[url('/services-bg.jpg')] bg-no-repeat bg-white bg-blend-multiply"
      >
        <div className="inset-0 backdrop-blur-md rounded-lg bg-black/30 max-w-6xl w-full mx-auto my-3 py-3 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {servicesList.map((service, index) => (
            <Card key={index} className="mt-6 max-w-sm mx-auto p-3 rounded-md">
              <CardHeader
                color="blue-gray"
                className="relative h-56 rounded-lg"
              >
                <Image src={service.imageUrl} fill alt={service.alt} />
              </CardHeader>
              <CardBody>
                <Accordion open={expandedCard === index}>
                  <AccordionHeader onClick={() => toggleAccordion(index)}>
                    <Typography variant="h5" color="blue-gray">
                      {service.title}
                    </Typography>
                  </AccordionHeader>
                  <AccordionBody onClick={() => toggleAccordion(index)}>
                    <Typography className="text-sm text-justify">
                      {service.description}
                    </Typography>
                  </AccordionBody>
                </Accordion>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
